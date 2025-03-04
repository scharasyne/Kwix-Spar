document.addEventListener('DOMContentLoaded', function() {
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('id-upload');
    const previewContainer = document.getElementById('preview-container');
    const previewImage = document.getElementById('preview-image');
    const processButton = document.getElementById('process-button');
    const resultsContainer = document.getElementById('results-container');
    const loadingIndicator = document.getElementById('loading');
    
    initializeEventListeners();
    
    function initializeEventListeners() {
        dropArea.addEventListener('click', () => {
            fileInput.click();
        });
        
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });
        
        dropArea.addEventListener('dragenter', () => {
            dropArea.classList.add('border-blue-500');
        });
        
        dropArea.addEventListener('dragleave', () => {
            dropArea.classList.remove('border-blue-500');
        });
        
        dropArea.addEventListener('drop', handleDrop);
        fileInput.addEventListener('change', handleFileSelect);
        
        // Process the ID image
        processButton.addEventListener('click', processImage);
    }
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
        dropArea.classList.remove('border-blue-500');
    }
    
    function handleFileSelect(e) {
        const files = e.target.files;
        handleFiles(files);
    }
    
    function handleFiles(files) {
        if (files.length > 0) {
            const file = files[0];
            
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewContainer.classList.remove('hidden');
                resultsContainer.classList.add('hidden');
            };
            reader.readAsDataURL(file);
        }
    }
    
    // Process the image with Google Cloud Vision API
    function processImage() {
        loadingIndicator.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        
        const imageUrl = previewImage.src;
        
        fetch('../php/analyze-id.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageData: imageUrl
            })
        })
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                throw new Error(data.message || 'Failed to process image');
            }
            
            const extractedInfo = extractFromGoogleResponse(data.result);
            
            document.getElementById('id-number').textContent = extractedInfo.idNumber || 'Not detected';
            document.getElementById('name').textContent = extractedInfo.name || 'Not detected';
            
            if (extractedInfo.locationInfo && extractedInfo.locationInfo.city) {
                setLocationFromOCR(extractedInfo.locationInfo);
            }
            
            updateVerificationStatus(extractedInfo);
            
            loadingIndicator.classList.add('hidden');
            resultsContainer.classList.remove('hidden');
        })
        .catch(err => {
            console.error('Document Analysis Error:', err);
            loadingIndicator.classList.add('hidden');
            alert('Error processing the image: ' + err.message);
        });
    }
    
    // Extract information from Google Cloud Vision API response
    function extractFromGoogleResponse(response) {
        try {
            console.log("Google Vision API response:", JSON.stringify(response, null, 2));
            
            const result = {
                idNumber: null,
                name: null,
                expiryDate: null,
                locationInfo: {
                    islandGroup: null,
                    region: null,
                    province: null,
                    city: null
                }
            };
            
            if (response && response.responses && response.responses.length > 0) {
                const textAnnotations = response.responses[0].textAnnotations || [];
                
                const fullText = response.responses[0].fullTextAnnotation?.text || '';
                if (fullText) {
                    console.log("Extracted full text:", fullText);
                    
                    const textForIdExtraction = fullText.replace(/\s+(?=\d-|-\d|\d\s+\d)/g, '');
                    console.log("Text prepared for ID extraction:", textForIdExtraction);

                    // ID number extraction patterns
                    const idPatterns = [
                        /(\d{7}-\d{3}-\d{4})/,
                        /(\d[\d\s]{6,10}-\d[\d\s]{1,4}-\d[\d\s]{3,6})/,
                        /\b(\d{10,13})\b/
                    ];

                    let idMatches = null;
                    for (const pattern of idPatterns) {
                        idMatches = textForIdExtraction.match(pattern) || fullText.match(pattern);
                        if (idMatches && idMatches.length > 0) {
                            let idNumber = idMatches[0].replace(/\s+/g, '');
                            result.idNumber = idNumber;
                            console.log("Extracted ID number:", result.idNumber);
                            break;
                        }
                    }

                    if (!result.idNumber) {
                        const fallbackMatch = fullText.match(/\b(\d[\d\s]{7,12})\b/);
                        if (fallbackMatch && fallbackMatch[0]) {
                            result.idNumber = fallbackMatch[0].replace(/\s+/g, '');
                            console.log("Found ID using length-based fallback method:", result.idNumber);
                        }
                    }

                    const lines = fullText.split('\n');
                    let nameIndex = -1;
                    
                    // Name extraction logic
                    for (let i = 0; i < lines.length; i++) {
                        if (/^\s*name\s*(:)?\s*$/i.test(lines[i])) {
                            nameIndex = i;
                            console.log(`Found name label at line ${i}: "${lines[i]}"`);
                            break;
                        }
                    }
                    
                    if (nameIndex > 0) {
                        const potentialName = lines[nameIndex - 1].trim();
                        if (potentialName && 
                            !/REPUBLIC|PHILIPPINES|DEPARTMENT|BARANGAY|CITY|VALID|COUNTY|DISABILITY|TYPE|SIGNATURE|I\.D|NO\./i.test(potentialName)) {
                            result.name = potentialName;
                            console.log("Found name above name label:", result.name);
                        }
                    }
                    
                    if (!result.name) {
                        const namePatterns = [
                            /[Nn]ame\s*:\s*([A-Za-z\s.,]+)/i,
                            /[Ff]ull\s*[Nn]ame\s*:\s*([A-Za-z\s.,]+)/i,
                            /[Nn]ame\s*[Oo]f\s*PWD\s*:\s*([A-Za-z\s.,]+)/i
                        ];
                        
                        for (const pattern of namePatterns) {
                            const nameMatch = fullText.match(pattern);
                            if (nameMatch && nameMatch[1]) {
                                result.name = nameMatch[1].trim();
                                console.log("Extracted name from standard pattern:", result.name);
                                break;
                            }
                        }
                    }
                    
                    if (!result.name) {
                        for (const line of lines) {
                            if (/REPUBLIC|PHILIPPINES|DEPARTMENT|WELFARE|VALID|COUNTY|BARANGAY|DISABILITY|TYPE|SIGNATURE|I\.D|NO\.|LUNGSOD|PILIPINAS/i.test(line)) {
                                continue;
                            }
                            
                            const cleanLine = line.trim();
                            
                            if (cleanLine.length < 5 || cleanLine.length > 40) continue;
                            
                            const wordCount = cleanLine.split(/\s+/).length;
                            
                            if (wordCount >= 2 && wordCount <= 4) {
                                if (/^[A-Z][A-Z\s.]{4,}$/.test(cleanLine) || // ALL CAPS
                                    /^[A-Z][a-z]+ ([A-Z]\. )?[A-Z][a-z]+ ?([A-Z][a-z]+)?$/.test(cleanLine)) { // Proper Case
                                    result.name = cleanLine;
                                    console.log("Found name by format analysis:", result.name);
                                    break;
                                }
                            }
                        }
                    }
                    
                    for (let line of lines) {
                        if (/LAS PIÑAS|MANILA|QUEZON CITY|MAKATI|PASIG|TAGUIG/i.test(line)) {
                            const cityMatch = line.match(/(LAS PIÑAS|MANILA|QUEZON CITY|MAKATI|PASIG|TAGUIG)/i);
                            if (cityMatch) {
                                result.locationInfo.city = cityMatch[0];
                                console.log("Found city directly in content:", result.locationInfo.city);
                            }
                        }
                    }
                }
            }
            
            console.log("Final extracted information:", result);
            return result;
        } catch (err) {
            console.error('Error extracting data from Google Vision response:', err);
            return { 
                idNumber: null, 
                name: null, 
                expiryDate: null,
                locationInfo: { city: null } 
            };
        }
    }
    
    function setLocationFromOCR(locationInfo) {
        if (locationInfo.city) {
            const pathFound = findLocationPathByCity(locationInfo.city);
            
            if (pathFound) {
                console.log("Found location path:", pathFound);
                
                const islandGroupButton = document.getElementById('island-group-button');
                const islandGroupEvent = new MouseEvent('click', {bubbles: true});
                islandGroupButton.dispatchEvent(islandGroupEvent);
                
                setTimeout(() => {
                    selectOption('island-group-dropdown', pathFound.islandGroup, () => {
                        setTimeout(() => {
                            const regionButton = document.getElementById('region-button');
                            const regionEvent = new MouseEvent('click', {bubbles: true});
                            regionButton.dispatchEvent(regionEvent);
                            
                            setTimeout(() => {
                                selectOption('region-dropdown', pathFound.region, () => {
                                    setTimeout(() => {
                                        setInputValue('province-input', pathFound.province, () => {
                                            setTimeout(() => {
                                                setInputValue('city-input', pathFound.city, () => {
                                                    document.getElementById('validation-container').classList.remove('hidden');
                                                    const pwdIdInput = document.getElementById('pwd-id');
                                                    pwdIdInput.value = locationInfo.idNumber || '';
                                                });
                                            }, 300);
                                        });
                                    }, 300);
                                });
                            }, 300);
                        });
                    });
                }, 300);
                
                return;
            }
        }
    }
    
    function selectOption(dropdownId, optionText, callback) {
        const dropdown = document.getElementById(dropdownId);
        const options = dropdown.querySelectorAll('a');
        for (const option of options) {
            if (option.textContent === optionText) {
                option.click();
                if (callback) callback();
                return;
            }
        }
        if (callback) callback();
    }
    
    function setInputValue(inputId, value, callback) {
        const input = document.getElementById(inputId);
        input.value = value;
        const inputEvent = new Event('input', {bubbles: true});
        input.dispatchEvent(inputEvent);
        if (callback) callback();
    }
    
    function findLocationPathByCity(cityName) {
        console.log(`Searching for city: "${cityName}" in location database...`);
        const normalizedCityName = cityName.trim().toUpperCase();
        console.log(`Normalized search term: "${normalizedCityName}"`);
    
        for (const islandGroup in locationData) {
            for (const region in locationData[islandGroup]) {
                for (const province in locationData[islandGroup][region]) {
                    const cities = locationData[islandGroup][region][province];
                    
                    console.log(`Checking in ${islandGroup} > ${region} > ${province} (${cities.length} cities)`);
                    
                    const matchingCity = cities.find(city => {
                        const normalizedCity = city.toUpperCase();
                        const match = normalizedCity.includes(normalizedCityName) || 
                                     normalizedCityName.includes(normalizedCity);
                        
                        if (match) {
                            console.log(`✓ MATCH FOUND: "${city}" matches "${cityName}"`);
                        }
                        return match;
                    });
                    
                    if (matchingCity) {
                        const result = {
                            islandGroup: islandGroup,
                            region: region,
                            province: province,
                            city: matchingCity
                        };
                        console.log(`Found complete location path:`, result);
                        return result;
                    }
                }
            }
        }
        
        console.log(`❌ No matching location found for "${cityName}"`);
        return null;
    }
    
    function updateVerificationStatus(extractedInfo) {
        const verificationStatus = document.getElementById('verification-status');
        if (extractedInfo.idNumber && extractedInfo.name) {
            verificationStatus.textContent = 'Succesfully extracted information!';
            verificationStatus.classList.add('bg-green-100', 'text-green-800');
            verificationStatus.classList.remove('bg-red-100', 'text-red-800');
        } else {
            verificationStatus.textContent = 'Verification incomplete. Some information could not be detected.';
            verificationStatus.classList.add('bg-red-100', 'text-red-800');
            verificationStatus.classList.remove('bg-green-100', 'text-green-800');
        }
    }
});
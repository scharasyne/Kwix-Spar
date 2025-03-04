document.addEventListener('DOMContentLoaded', function() {
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('id-upload');
    const previewContainer = document.getElementById('preview-container');
    const previewImage = document.getElementById('preview-image');
    const processButton = document.getElementById('process-button');
    const resultsContainer = document.getElementById('results-container');
    const loadingIndicator = document.getElementById('loading');
    
    dropArea.addEventListener('click', () => {
        fileInput.click();
    });
    
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    dropArea.addEventListener('dragenter', () => {
        dropArea.classList.add('border-blue-500');
    });
    
    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('border-blue-500');
    });
    
    dropArea.addEventListener('drop', handleDrop);
    fileInput.addEventListener('change', handleFileSelect);
    
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
            
            // Display preview
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewContainer.classList.remove('hidden');
                resultsContainer.classList.add('hidden');
            };
            reader.readAsDataURL(file);
        }
    }
    
    // Process the image with OCR
    processButton.addEventListener('click', processImage);
    
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
            if(!data.success){
                throw new Error(data.message || 'Failed to process image');
            }

            return pollForResults(data.operationLocation);
        })
        .then(analysisResults => {
            const extractedInfo = extractFromAzureResponse(analysisResults);

            document.getElementById('id-number').textContent = extractedInfo.idNumber || 'Not detected';
            document.getElementById('name').textContent = extractedInfo.name || 'Not detected';
            // document.getElementById('expiry-date').textContent = extractedInfo.expiryDate || 'Not detected';

            if (extractedInfo.locationInfo && extractedInfo.locationInfo.islandGroup) {
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

    function setLocationFromOCR(locationInfo) {
        if (locationInfo.city) {
            const pathFound = findLocationPathByCity(locationInfo.city);
            
            if (pathFound) {
                console.log("Found location path:", pathFound);
                
                const islandGroupButton = document.getElementById('island-group-button');
                const islandGroupEvent = new MouseEvent('click', {bubbles: true});
                islandGroupButton.dispatchEvent(islandGroupEvent);
                
                setTimeout(() => {
                    const islandDropdown = document.getElementById('island-group-dropdown');
                    const islandOptions = islandDropdown.querySelectorAll('a');
                    for (const option of islandOptions) {
                        if (option.textContent === pathFound.islandGroup) {
                            option.click();
                            
                            setTimeout(() => {
                                const regionButton = document.getElementById('region-button');
                                const regionEvent = new MouseEvent('click', {bubbles: true});
                                regionButton.dispatchEvent(regionEvent);
                                
                                setTimeout(() => {
                                    const regionDropdown = document.getElementById('region-dropdown');
                                    const regionOptions = regionDropdown.querySelectorAll('a');
                                    for (const option of regionOptions) {
                                        if (option.textContent === pathFound.region) {
                                            option.click();
                                            
                                            setTimeout(() => {
                                                const provinceInput = document.getElementById('province-input');
                                                provinceInput.value = pathFound.province;
                                                
                                                const inputEvent = new Event('input', {bubbles: true});
                                                provinceInput.dispatchEvent(inputEvent);
                                                
                                                setTimeout(() => {
                                                    const cityInput = document.getElementById('city-input');
                                                    cityInput.value = pathFound.city;
                                                    cityInput.dispatchEvent(inputEvent);
                                                    
                                                    document.getElementById('validation-container').classList.remove('hidden');
                                                    const pwdIdInput = document.getElementById('pwd-id');
                                                    pwdIdInput.value = locationInfo.idNumber || '';
                                                }, 300);
                                            }, 300);
                                        }
                                    }
                                }, 300);
                            }, 300);
                        }
                    }
                }, 300);
                
                return;
            }
        }
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

    function pollForResults(operationLocation, retries = 10, delay = 1000) {
        return new Promise((resolve, reject) => {
            let attempts = 0;
            
            const checkStatus = () => {
                fetch(operationLocation, {
                    headers: {
                        'Ocp-Apim-Subscription-Key': '1ywJ9F2XtO5yFLJyUqhQGzZGQNQrnnrm7lAAUqqhOKH8UKBNHfcmJQQJ99BCACqBBLyXJ3w3AAALACOGakoI'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'succeeded') {
                        resolve(data);
                    } else if (data.status === 'failed') {
                        reject(new Error(data.error.message));
                    } else if (attempts < retries) {
                        attempts++;
                        setTimeout(checkStatus, delay);
                    } else {
                        reject(new Error('Operation timed out'));
                    }
                })
                .catch(reject);
            };
            
            checkStatus();
        });
    }

    function extractFromAzureResponse(response) {
        try {
            console.log("Azure API response:", JSON.stringify(response, null, 2));

            const result = {
                idNumber: null,
                name: null,
                expiryDate: "N/A",
                region: null,
                locationInfo: {
                    islandGroup: null,
                    region: null,
                    province: null,
                    city: null
                }
            };
            
            if (response.analyzeResult && response.analyzeResult.documents) {
                const document = response.analyzeResult.documents[0];
                const fields = document.fields;
                
                // Extract name
                if (fields.FirstName && fields.LastName) {
                    result.name = `${fields.FirstName.valueString} ${fields.LastName.valueString}`;
                }
                
                // Extract ID from OCR content
                const content = response.analyzeResult.content;
                const idMatches = content.match(/(\d{7}-\d{3}-\d{4})/);
                if (idMatches && idMatches.length > 0) {
                    result.idNumber = idMatches[0];
                }

                const lines = content.split('\n');
                for (let line of lines) {
                    if (/LAS PIÑAS|MANILA|QUEZON CITY|MAKATI|PASIG|TAGUIG/i.test(line)) {
                        const cityName = line.match(/(LAS PIÑAS|MANILA|QUEZON CITY|MAKATI|PASIG|TAGUIG)/i)[0];
                        console.log("Found city directly in content:", cityName);
                        result.locationInfo.city = cityName;
                    }
                    
                    const cityMatch = line.match(/([A-Za-z\s]+)\s+City/i);
                    if (cityMatch && cityMatch[1]) {
                        console.log("Found city by 'City' suffix:", cityMatch[1]);
                        result.locationInfo.city = cityMatch[1].trim() + " City";
                    }
                    
                    if (/BARANGAY/i.test(line)) {
                        console.log("Line with BARANGAY:", line);
                        result.locationInfo.barangayLine = line;
                    }
                }

                if (!result.locationInfo.city && result.locationInfo.barangayLine) {
                    // Match known cities in the barangay line
                    const knownCities = ['Las Piñas', 'Manila', 'Quezon', 'Makati', 'Pasig', 'Taguig'];
                    for (const city of knownCities) {
                        if (result.locationInfo.barangayLine.toUpperCase().includes(city.toUpperCase())) {
                            console.log(`Found city in BARANGAY line: ${city}`);
                            result.locationInfo.city = city;
                            break;
                        }
                    }
                }

                if (!result.locationInfo.city) {
                    console.log("Trying fallback city detection...");
                    result.locationInfo.city = "Las Piñas";
                }
                
                console.log("Final extracted locationInfo:", result.locationInfo);    
            }
            
            return result;
        } catch (err) {
            console.error('Error extracting data:', err);
            return { idNumber: null, name: null, expiryDate: null, region: null };
        }
    }
    
    function updateVerificationStatus(extractedInfo) {
        const verificationStatus = document.getElementById('verification-status');
        if (extractedInfo.idNumber && extractedInfo.name) {
            verificationStatus.textContent = 'Verification successful!';
            verificationStatus.classList.add('bg-green-100', 'text-green-800');
            verificationStatus.classList.remove('bg-red-100', 'text-red-800');
        } else {
            verificationStatus.textContent = 'Verification incomplete. Some information could not be detected.';
            verificationStatus.classList.add('bg-red-100', 'text-red-800');
            verificationStatus.classList.remove('bg-green-100', 'text-green-800');
        }
    }
});
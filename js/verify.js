document.addEventListener('DOMContentLoaded', function() {
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('id-upload');
    const previewContainer = document.getElementById('preview-container');
    const previewImage = document.getElementById('preview-image');
    const processButton = document.getElementById('process-button');
    const resultsContainer = document.getElementById('results-container');
    const loadingIndicator = document.getElementById('loading');

    const REGIONAL_ID_FORMATS = {
        'NCR': {
            patterns: [
                /\b\d{9}-\d{3}\b/,           // Standard format with hyphen
                /\b(\d{9})[\s-]*(\d{3})\b/   // NCR specific format
            ],
            validator: (id) => id.length === 13 && id.includes('-')
        },
        'LUZON': {
            patterns: [
                /\b\d{9}-\d{3}\b/,           // Standard format
                /\bR\d{1}-\d{8}-\d{3}\b/,    // R1-XXXXXXXX-XXX format
                /\bR\d{1}[\s-]*\d{8}[\s-]*\d{3}\b/
            ],
            validator: (id) => /^R\d{1}-\d{8}-\d{3}$/.test(id) || /^\d{9}-\d{3}$/.test(id)
        },
        'VISAYAS': {
            patterns: [
                /\b\d{4}-\d{4}-\d{4}\b/,     // XXXX-XXXX-XXXX format
                /\bR\d{1}[-\s]*\d{12}\b/     // Region code followed by 12 digits
            ],
            validator: (id) => /^\d{4}-\d{4}-\d{4}$/.test(id) || /^R\d{1}-\d{12}$/.test(id)
        },
        'MINDANAO': {
            patterns: [
                /\b\d{9}-\d{3}\b/,
                /\b\d{4}-\d{4}-\d{4}\b/,     // XXXX-XXXX-XXXX format
                /\bPWD-\d{10}\b/             // PWD-XXXXXXXXXX format
            ],
            validator: (id) => id.startsWith('PWD-') || /^\d{9}-\d{3}$/.test(id)
        },
        // Default patterns for unknown regions
        'DEFAULT': {
            patterns: [
                /\b\d{9}-\d{3}\b/,
                /\b\d{12}\b/,
                /\b(\d{9})[^\d\w]*(\d{3})\b/,
                /\bPWD[\s-]*\d{10,12}\b/
            ],
            validator: (id) => id && id.length >= 12
        }
    };
    
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
        if (locationInfo.islandGroup) {
            // Set island group
            const islandGroupButton = document.getElementById('island-group-button');
            islandGroupButton.textContent = locationInfo.islandGroup;
            document.getElementById('region-container').classList.remove('hidden');
            
            // Get regions for this island group
            const regions = Object.keys(locationData[locationInfo.islandGroup]);
            
            if (locationInfo.region) {
                // Find matching region in our data
                const matchingRegion = regions.find(r => 
                    r.toUpperCase().includes(locationInfo.region.toUpperCase()) || 
                    locationInfo.region.toUpperCase().includes(r.toUpperCase())
                );
                
                if (matchingRegion) {
                    // Set region
                    const regionButton = document.getElementById('region-button');
                    regionButton.textContent = matchingRegion;
                    document.getElementById('province-container').classList.remove('hidden');
                }
            }
        }
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

                const regionMatches = content.match(/\b(NCR|REGION \w+(-\w+)?|BARMM|CAR)\b/i);
                if (regionMatches) {
                    result.locationInfo.region = regionMatches[0];
                    
                    // Determine island group based on region
                    if (/NCR|REGION I|REGION II|REGION III|CAR|REGION IV-A|REGION IV-B|REGION V/i.test(result.locationInfo.region)) {
                        result.locationInfo.islandGroup = "Luzon";
                    } else if (/REGION VI|REGION VII|REGION VIII/i.test(result.locationInfo.region)) {
                        result.locationInfo.islandGroup = "Visayas";
                    } else if (/REGION IX|REGION X|REGION XI|REGION XII|REGION XIII|BARMM/i.test(result.locationInfo.region)) {
                        result.locationInfo.islandGroup = "Mindanao";
                    }
                    
                    // Try to extract province and city
                    const lines = content.split('\n');
                    for (let line of lines) {
                        // (Add logic to identify province and city)
                    }
                }
            }
            
            return result;
        } catch (err) {
            console.error('Error extracting data:', err);
            return { idNumber: null, name: null, expiryDate: null, region: null };
        }
    }

    function getSelectedRegion() {
        const regionSelect = document.getElementById('region-select');
        return regionSelect ? regionSelect.value.toUpperCase() : null;
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
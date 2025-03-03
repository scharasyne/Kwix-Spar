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
        
        // OCR configuration
        const ocrConfig = {
            lang: 'eng',
            logger: m => console.log(m),
            tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/.,: ',
            tessedit_pageseg_mode: '1',
            preserve_interword_spaces: '1',
            tessjs_create_hocr: '0',
            tessjs_create_tsv: '0',
        };
        
        // Define regex patterns
        const idNumberPattern = /(?:ID|PWD|ID\s*No\.?|ID\s*Number|PWD\s*ID)[:\.\s]*\s*(\d{9}-\d{3}|\d{9}\s+\d{3}|\d{12})/i;
        const namePattern = /(?:Name|Full\s*Name)[:\.\s]*\s*([A-Za-z\s\.,]+)(?:\r|\n|$|\s{2,})/i;
        const expiryPattern = /(?:Valid\s*Until|Expiry|Expiration|Exp\.?|Expiry\s*Date)[:\.\s]*\s*(\d{1,2}[\s\/\.\-]+\d{1,2}[\s\/\.\-]+\d{2,4})/i;
        
        Tesseract.recognize(imageUrl, 'eng', ocrConfig)
            .then(({ data: { text } }) => {
                console.log("Extracted text:", text);
                
                // Extract the data with primary method
                let idNumber = extractDataImproved(text, idNumberPattern);
                let name = extractDataImproved(text, namePattern);
                let expiryDate = extractDataImproved(text, expiryPattern);
                
                // Display debug information in console
                console.log("ID Number match:", text.match(idNumberPattern));
                console.log("Name match:", text.match(namePattern));
                console.log("Expiry match:", text.match(expiryPattern));
                
                // Try specialized ID extraction if standard method fails
                if (!idNumber) {
                    idNumber = findPwdIdFormat(text);
                }

                // Validate and format the ID
                if (idNumber) {
                    idNumber = validateIdNumber(idNumber);
                }
                
                // Try fallback extraction for missing data
                if (!idNumber || !name || !expiryDate) {
                    console.log("Standard extraction failed, trying fallback approach");
                    const fallbackData = extractWithFallback(text);
                    
                    // Use fallback data if primary extraction failed
                    if (!idNumber && fallbackData.idNumber) {
                        idNumber = validateIdNumber(fallbackData.idNumber);
                    }
                    if (!name && fallbackData.name) {
                        name = fallbackData.name;
                    }
                    if (!expiryDate && fallbackData.expiryDate) {
                        expiryDate = fallbackData.expiryDate;
                    }
                }
                
                // Update the UI
                document.getElementById('id-number').textContent = idNumber || 'Not detected';
                document.getElementById('name').textContent = name || 'Not detected';
                document.getElementById('expiry-date').textContent = expiryDate || 'Not detected';

                // Show verification status
                const verificationStatus = document.getElementById('verification-status');
                if (idNumber && name && expiryDate) {
                    verificationStatus.textContent = 'Verification successful!';
                    verificationStatus.classList.add('bg-green-100', 'text-green-800');
                    verificationStatus.classList.remove('bg-red-100', 'text-red-800');
                } else {
                    verificationStatus.textContent = 'Verification incomplete. Some information could not be detected.';
                    verificationStatus.classList.add('bg-red-100', 'text-red-800');
                    verificationStatus.classList.remove('bg-green-100', 'text-green-800');
                }
                
                // Hide loading indicator and show results
                loadingIndicator.classList.add('hidden');
                resultsContainer.classList.remove('hidden');
            })
            .catch(err => {
                console.error('OCR Error:', err);
                loadingIndicator.classList.add('hidden');
                alert('Error processing the image. Please try again with a clearer image.');
            });
    }

    // Improved data extraction
    function extractDataImproved(text, pattern) {
        const match = text.match(pattern);
        if (!match) return null;
        return match[1] ? match[1].trim() : null;
    }

    // Extraction with line-by-line analysis
    function extractWithFallback(text) {
        const lines = text.split('\n');
        let idNumber = null;
        let name = null;
        let expiryDate = null;
        
        // Try to find information by checking each line
        for (const line of lines) {
            const lowerLine = line.toLowerCase();
            
            // ID Number detection
            if (lowerLine.includes('id') && !idNumber) {
                const parts = line.split(/[:\s]+/);
                for (let i = 0; i < parts.length; i++) {
                    if (parts[i].toLowerCase().includes('id') && i + 1 < parts.length) {
                        idNumber = parts[i + 1];
                        break;
                    }
                }
                
                // Also look for any sequence of digits that could be an ID
                if (!idNumber) {
                    const digitSequence = line.match(/\d{9,12}/);
                    if (digitSequence) idNumber = digitSequence[0];
                }
            }
            
            // Name detection
            if (lowerLine.includes('name') && !name) {
                const namePart = line.split(/name[:\s]+/i)[1];
                if (namePart) name = namePart.trim();
            }
            
            // Expiry date detection
            if ((lowerLine.includes('valid') || lowerLine.includes('expiry') || 
                lowerLine.includes('expiration') || lowerLine.includes('until')) && !expiryDate) {
                // Look for date pattern DD/MM/YYYY or similar
                const dateMatch = line.match(/\d{1,2}[\/\.\-]\d{1,2}[\/\.\-]\d{2,4}/);
                if (dateMatch) expiryDate = dateMatch[0];
            }
        }
        
        return { idNumber, name, expiryDate };
    }

    // Validate and format the ID number
    function validateIdNumber(idStr) {
        if (!idStr) return null;
        
        // Remove any non-digit characters except hyphens
        let cleaned = idStr.replace(/[^\d\-]/g, '');
        
        // If we have 12 consecutive digits with no hyphen, insert it
        if (/^\d{12}$/.test(cleaned)) {
            cleaned = cleaned.substring(0, 9) + '-' + cleaned.substring(9);
        }
        
        // Check if it matches our expected format
        if (/^\d{9}-\d{3}$/.test(cleaned)) {
            return cleaned;
        }
        
        return null;
    }

    // Special ID format finder
    function findPwdIdFormat(text) {
        // Look for the exact format with hyphen
        const exactMatch = text.match(/\b\d{9}-\d{3}\b/);
        if (exactMatch) return exactMatch[0];
        
        // Look for 12 digits that could be the ID without hyphen
        const noHyphenMatch = text.match(/\b\d{12}\b/);
        if (noHyphenMatch) {
            const id = noHyphenMatch[0];
            return id.substring(0, 9) + '-' + id.substring(9);
        }
        
        // Look for 9 digits followed by 3 digits with spaces or other characters
        const splitMatch = text.match(/\b(\d{9})[^\d\w]*(\d{3})\b/);
        if (splitMatch) {
            return splitMatch[1] + '-' + splitMatch[2];
        }
        
        // Find any sequence of 9-12 digits that might be part of an ID
        const anyDigits = text.match(/\b(\d{9,12})\b/);
        if (anyDigits) {
            const digits = anyDigits[1];
            if (digits.length === 12) {
                return digits.substring(0, 9) + '-' + digits.substring(9);
            } else if (digits.length === 9) {
                // Look for 3 more digits nearby
                const threeMoreDigits = text.substring(text.indexOf(digits) + digits.length).match(/\b(\d{3})\b/);
                if (threeMoreDigits) {
                    return digits + '-' + threeMoreDigits[1];
                }
            }
        }
        
        return null;
    }
});
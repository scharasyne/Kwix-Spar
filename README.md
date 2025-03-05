# PWD ID Validator System

## Overview
The PWD ID Validator System is a web-based application designed to validate Philippine Persons with Disability (PWD) identification cards. This system provides an efficient way to verify PWD IDs through both manual input and image scanning capabilities.

## Features
- **Location-based Validation**
  - Hierarchical selection of:
    - Island Group
    - Region
    - Province
    - City/Municipality
  - Searchable dropdown menus for easy navigation

- **ID Validation Methods**
  - Manual ID number input
  - Image scanning using OCR (Optical Character Recognition)
    - Supports JPG and PNG formats
    - Drag-and-drop functionality
    - Real-time preview
    - Automated text extraction

- **Responsive Design**
  - Mobile-friendly interface
  - Adaptive navigation menu
  - Cross-browser compatibility

## Technologies Used
- **Frontend**
  - HTML5
  - TailwindCSS
  - JavaScript (Vanilla)

- **Libraries**
  - Tesseract.js (for OCR functionality)

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd pwd-id-validator
   ```

3. Open `homepage.html` in a web browser or set up a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

## Project Structure
project-root/
├── images/
│ ├── nav_logo.png
│ └── navb_logo.png
├── js/
│ ├── homepage.js # Main JavaScript for homepage functionality
│ └── image-scanning.js # OCR and image processing logic
├── html/
│ ├── homepage.html # Main validation page
│ ├── feedback.html # Contact/feedback form
│ └── admin-login.html # Admin authentication page
└── README.md

## Usage
1. **Manual Validation**
   - Select your location using the dropdown menus
   - Enter the PWD ID number
   - Click "Validate ID"

2. **Image Scanning**
   - Upload a PWD ID image using drag-and-drop or file browser
   - Wait for the OCR processing
   - View extracted information and validation results

## Security Features
- Input validation and sanitization
- Secure image processing
- Protected admin access

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## License
[Your chosen license]

## Contact
For support or queries, please contact [your contact information]

## Acknowledgments
- Tesseract.js team for OCR capabilities
- TailwindCSS team for the styling framework
- [Any other acknowledgments]

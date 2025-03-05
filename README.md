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

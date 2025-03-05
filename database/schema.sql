CREATE DATABASE IF NOT EXISTS pwdi_database;
USE pwdi_database;

CREATE TABLE lgu_admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    region VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    role VARCHAR(50) DEFAULT 'city_admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY `unique_city_admin` (`province`, `city`)
);

CREATE TABLE pwd_records (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pwd_id_number VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    last_name VARCHAR(100) NOT NULL,
    birth_date DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL,
    region VARCHAR(100) NOT NULL,
    disability_type VARCHAR(100) NOT NULL,
    id_expiry_date DATE NOT NULL,
    created_by INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES lgu_admins(id)
);

CREATE TABLE audit_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    admin_id INT NOT NULL,
    action VARCHAR(100) NOT NULL,
    details TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES lgu_admins(id)
);

CREATE TABLE pwd_documents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pwd_record_id INT NOT NULL,
    document_type VARCHAR(100) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pwd_record_id) REFERENCES pwd_records(id) ON DELETE CASCADE
);

CREATE TABLE document_types (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    required BOOLEAN DEFAULT false
);

INSERT INTO document_types (name, description, required) VALUES 
('medical_certificate', 'Medical Certificate from Licensed Physician', true),
('barangay_certification', 'Barangay Certification/Endorsement', true),
('id_picture', '2x2 ID Picture', true),
('birth_certificate', 'Birth Certificate', false),
('valid_id', 'Valid ID (if available)', false);

CREATE INDEX idx_pwd_id_number ON pwd_records(pwd_id_number);
CREATE INDEX idx_region ON pwd_records(region);
CREATE INDEX idx_province ON pwd_records(province);
CREATE INDEX idx_city ON pwd_records(city);

ALTER TABLE pwd_records 
ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP; 
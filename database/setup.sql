DROP TABLE IF EXISTS audit_logs;
DROP TABLE IF EXISTS pwd_records;
DROP TABLE IF EXISTS lgu_admins;

CREATE DATABASE IF NOT EXISTS pwdi_database;
USE pwdi_database;

CREATE TABLE lgu_admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    region VARCHAR(100) NOT NULL,
    role ENUM('super_admin', 'regional_admin', 'municipal_admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO lgu_admins (
    email,
    password,
    first_name,
    last_name,
    region,
    role
) VALUES (
    'BARMM@doh.gov',
    'BARMMdatabase',
    'BARMM',
    'Administrator',
    'BARMM - Bangsamoro Autonomous Region in Muslim Mindanao',
    'regional_admin'
); 
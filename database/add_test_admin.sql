USE pwdi_database;

-- to clear existing data
TRUNCATE TABLE audit_logs;
TRUNCATE TABLE pwd_records;
DELETE FROM lgu_admins;

INSERT INTO lgu_admins (
    email,
    password,
    first_name,
    last_name,
    region,
    role
) VALUES (
    'BARMM@doh.gov',
    'BARMMdatabase', -- plain text muna for testing; di gumagana hash (before ko i-dl php hhahh)
    'BARMM',
    'Administrator',
    'BARMM - Bangsamoro Autonomous Region in Muslim Mindanao',
    'regional_admin'
);

INSERT INTO lgu_admins (
    email,
    password,
    first_name,
    last_name,
    region,
    role
) VALUES 
('NCR@doh.gov', 
--  '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- Password: NCRdatabase
'$2y$10$vqATO6CsQdKe11kGQvldv.bfp6hokDquq1Is.zMwSSozbaGgvlf6u',
 'NCR', 
 'Administrator',
 'NCR - National Capital Region',
 'regional_admin'),
 
('CAR@doh.gov', 
 '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- Password: CARdatabase
 'CAR', 
 'Administrator',
 'CAR - Cordillera Administrative Region',
 'regional_admin'); 
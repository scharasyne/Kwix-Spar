USE pwdi_database;

-- Clear data in correct order (child tables first, then parent tables)
DELETE FROM pwd_documents;  -- Clear documents first since it references pwd_records
DELETE FROM audit_logs;     -- Clear audit logs since it references lgu_admins
DELETE FROM pwd_records;    -- Now safe to clear pwd_records
DELETE FROM lgu_admins;     -- Then clear admins

-- Insert admin data
-- BARMM Admin
INSERT INTO lgu_admins (
    email,
    password,
    first_name,
    last_name,
    region,
    province,
    city,
    role
) VALUES (
    'lamitan@barmm.gov.ph',
    'BARMMdatabase',  -- plain text for testing
    'Lamitan',
    'Administrator',
    'BARMM - Bangsamoro Autonomous Region in Muslim Mindanao',
    'Basilan',
    'Lamitan',
    'city_admin'
);

-- NCR Admin
INSERT INTO lgu_admins (
    email,
    password,
    first_name,
    last_name,
    region,
    province,
    city,
    role
) VALUES (
    'qc@ncr.gov.ph',
    'NCRdatabase',
    'Quezon City',
    'Administrator',
    'NCR - National Capital Region',
    'Metro Manila',
    'Quezon City',
    'city_admin'
);

-- CAR Admin
INSERT INTO lgu_admins (
    email,
    password,
    first_name,
    last_name,
    region,
    province,
    city,
    role
) VALUES (
    'baguio@car.gov.ph',
    'CARdatabase',
    'Baguio',
    'Administrator',
    'CAR - Cordillera Administrative Region',
    'Benguet',
    'Baguio City',
    'city_admin'
); 
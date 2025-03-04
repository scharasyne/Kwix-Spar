<?php
session_start();
require_once 'db-connect.php';

header('Content-Type: application/json');

try {
    // First, let's check if the table exists and has the right structure
    $checkTable = $conn->query("SHOW COLUMNS FROM pwd_records");
    $columns = $checkTable->fetchAll(PDO::FETCH_COLUMN);
    error_log("Table columns: " . print_r($columns, true));

    // Simple query to get all records
    $query = "SELECT 
        id,
        pwd_id_number,
        first_name,
        last_name,
        birth_date,
        gender,
        address,
        city,
        province,
        disability_type,
        id_expiry_date
    FROM pwd_records";

    $stmt = $conn->prepare($query);
    $stmt->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Log the results
    error_log("Found " . count($records) . " records");
    if (count($records) > 0) {
        error_log("First record: " . print_r($records[0], true));
    }

    // Return the records
    echo json_encode([
        'success' => true,
        'records' => $records,
        'count' => count($records)
    ]);

} catch (Exception $e) {
    error_log("Database error: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
} 
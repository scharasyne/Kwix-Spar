<?php
require_once 'db-connect.php';

header('Content-Type: application/json');

try {
    // Test query 1: Count all records
    $query1 = "SELECT COUNT(*) as total FROM pwd_records";
    $result1 = $conn->query($query1)->fetch(PDO::FETCH_ASSOC);

    // Test query 2: Get all records with basic info
    $query2 = "SELECT pwd_id_number, first_name, last_name, city, province FROM pwd_records";
    $result2 = $conn->query($query2)->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'total_records' => $result1['total'],
        'records' => $result2
    ]);

} catch (Exception $e) {
    echo json_encode([
        'error' => $e->getMessage(),
        'trace' => $e->getTraceAsString()
    ]);
} 
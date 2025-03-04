<?php
require_once 'db-connect.php';
header('Content-Type: text/plain');

try {
    // Check table structure
    echo "Checking pwd_records table structure:\n";
    $columns = $conn->query("SHOW COLUMNS FROM pwd_records")->fetchAll(PDO::FETCH_ASSOC);
    print_r($columns);

    // Count records
    echo "\nCounting records:\n";
    $count = $conn->query("SELECT COUNT(*) as total FROM pwd_records")->fetch(PDO::FETCH_ASSOC);
    print_r($count);

    // Show some sample records
    echo "\nSample records:\n";
    $records = $conn->query("SELECT * FROM pwd_records LIMIT 5")->fetchAll(PDO::FETCH_ASSOC);
    print_r($records);

} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
    echo "Stack trace: " . $e->getTraceAsString();
} 
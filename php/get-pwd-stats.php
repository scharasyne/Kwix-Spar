<?php
session_start();
require_once 'db-connect.php';
header('Content-Type: application/json');

try {
    // Simple query to get all stats at once
    $query = "SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN id_expiry_date >= CURDATE() THEN 1 ELSE 0 END) as active,
        SUM(CASE WHEN id_expiry_date < CURDATE() THEN 1 ELSE 0 END) as expired
        FROM pwd_records";

    $stmt = $conn->prepare($query);
    $stmt->execute();
    $stats = $stmt->fetch(PDO::FETCH_ASSOC);

    // Convert null values to 0
    $stats['total'] = (int)$stats['total'] ?? 0;
    $stats['active'] = (int)$stats['active'] ?? 0;
    $stats['expired'] = (int)$stats['expired'] ?? 0;

    // Debug log
    error_log("Stats calculated: " . print_r($stats, true));

    echo json_encode([
        'success' => true,
        'data' => $stats
    ]);

} catch (Exception $e) {
    error_log("Error getting stats: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'message' => 'Error getting stats: ' . $e->getMessage()
    ]);
} 
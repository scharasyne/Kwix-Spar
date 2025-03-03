<?php
session_start();
require_once 'db-connect.php';
header('Content-Type: application/json');

try {
    $region = $_SESSION['admin_region'];
    
    // Get total count
    $stmt = $conn->prepare("SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN expiry_date >= CURDATE() THEN 1 ELSE 0 END) as active,
        SUM(CASE WHEN expiry_date < CURDATE() THEN 1 ELSE 0 END) as expired
        FROM pwd_records 
        WHERE region = ?");
    $stmt->execute([$region]);
    $stats = $stmt->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode($stats);
} catch (Exception $e) {
    echo json_encode([
        'error' => $e->getMessage()
    ]);
} 
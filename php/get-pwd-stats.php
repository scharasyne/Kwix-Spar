<?php
session_start();
require_once 'db-connect.php';
header('Content-Type: application/json');

try {
    // Get admin's city
    $adminCity = $_SESSION['admin_city'] ?? '';
    
    // Build query with city filter
    $query = "SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN id_expiry_date >= CURDATE() THEN 1 ELSE 0 END) as active,
        SUM(CASE WHEN id_expiry_date < CURDATE() THEN 1 ELSE 0 END) as expired
        FROM pwd_records";
    
    // Add city filter
    if (!empty($adminCity)) {
        $query .= " WHERE city = :city";
    }

    $stmt = $conn->prepare($query);
    
    // Bind city parameter if present
    if (!empty($adminCity)) {
        $stmt->bindParam(':city', $adminCity);
    }
    
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
        'data' => $stats,
        'adminCity' => $adminCity
    ]);
    
} catch (Exception $e) {
    error_log("Error getting stats: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>
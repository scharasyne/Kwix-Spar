<?php
session_start();
require_once 'db-connect.php';
header('Content-Type: application/json');

try {
    // Get filters from request
    $search = isset($_GET['search']) ? '%' . $_GET['search'] . '%' : '%';
    $status = isset($_GET['status']) ? $_GET['status'] : 'all';
    
    // Get admin's city from session
    $adminCity = $_SESSION['admin_city'] ?? '';
    
    // Build query with city filter
    $sql = "SELECT * FROM pwd_records WHERE 
            (pwd_id_number LIKE :search OR first_name LIKE :search OR last_name LIKE :search)";
            
    // Add city filter
    if (!empty($adminCity)) {
        $sql .= " AND city = :city";
    }
    
    // Add status filter
    if ($status !== 'all') {
        $currentDate = date('Y-m-d');
        if ($status === 'active') {
            $sql .= " AND id_expiry_date >= :currentDate";
        } else if ($status === 'expired') {
            $sql .= " AND id_expiry_date < :currentDate";
        }
    }
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':search', $search);
    
    // Bind city parameter if present
    if (!empty($adminCity)) {
        $stmt->bindParam(':city', $adminCity);
    }
    
    // Bind date parameter if needed
    if ($status !== 'all') {
        $stmt->bindParam(':currentDate', $currentDate);
    }
    
    $stmt->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => true,
        'records' => $records,
        'adminCity' => $adminCity
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}
?>
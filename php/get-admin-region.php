<?php
session_start();
header('Content-Type: application/json');

// Check if admin is logged in
if (!isset($_SESSION['admin_id'])) {
    echo json_encode(['success' => false, 'message' => 'Not authenticated']);
    exit;
}

// Return the admin's region and city
echo json_encode([
    'success' => true,
    'region' => $_SESSION['admin_region'] ?? '',
    'province' => $_SESSION['admin_province'] ?? '',
    'city' => $_SESSION['admin_city'] ?? ''
]);
?>
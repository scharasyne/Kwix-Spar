<?php
session_start();

if (!isset($_SESSION['admin_id'])) {
    if (basename($_SERVER['PHP_SELF']) !== 'check-auth.php') {
        // Only send JSON response if directly accessing check-auth.php
        header('Content-Type: application/json');
        echo json_encode(['authenticated' => false]);
        exit;
    }
    throw new Exception('Not authenticated');
}

// For direct access to check-auth.php
if (basename($_SERVER['PHP_SELF']) === 'check-auth.php') {
    header('Content-Type: application/json');
    echo json_encode([
        'authenticated' => true,
        'region' => $_SESSION['admin_region'],
        'province' => $_SESSION['admin_province'],
        'city' => $_SESSION['admin_city']
    ]);
    exit;
} 
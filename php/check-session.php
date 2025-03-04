<?php
session_start();
header('Content-Type: application/json');

$sessionData = [
    'session_id' => session_id(),
    'session_status' => session_status(),
    'admin_id' => $_SESSION['admin_id'] ?? 'not set',
    'admin_email' => $_SESSION['admin_email'] ?? 'not set',
    'admin_province' => $_SESSION['admin_province'] ?? 'not set',
    'admin_city' => $_SESSION['admin_city'] ?? 'not set',
    'admin_region' => $_SESSION['admin_region'] ?? 'not set'
];

echo json_encode($sessionData); 
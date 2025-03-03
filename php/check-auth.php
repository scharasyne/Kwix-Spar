<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['admin_id'])) {
    echo json_encode([
        'authenticated' => true,
        'region' => $_SESSION['admin_region']
    ]);
} else {
    echo json_encode([
        'authenticated' => false
    ]);
} 
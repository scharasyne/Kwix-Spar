<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');

require_once 'db-connect.php';

try {
    // Get POST data
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $region = $_POST['region'] ?? '';
    $province = $_POST['province'] ?? '';
    $city = $_POST['city'] ?? '';

    // Debug logging
    error_log("Login attempt with:");
    error_log("Email: " . $email);
    error_log("Region: " . $region);
    error_log("Province: " . $province);
    error_log("City: " . $city);

    if (empty($email) || empty($password) || empty($region) || empty($province) || empty($city)) {
        throw new Exception('All fields are required');
    }

    // Validate admin credentials
    $stmt = $conn->prepare("SELECT * FROM lgu_admins WHERE email = ? AND province = ? AND city = ?");
    $stmt->execute([$email, $province, $city]);
    $admin = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($admin && $password === $admin['password']) { // In production, use password_verify()
        // Set all necessary session variables
        $_SESSION['admin_id'] = $admin['id'];
        $_SESSION['admin_email'] = $admin['email'];
        $_SESSION['admin_region'] = $admin['region'];
        $_SESSION['admin_province'] = $admin['province'];
        $_SESSION['admin_city'] = $admin['city'];
        $_SESSION['admin_role'] = $admin['role'];

        // Debug log
        error_log("Session variables set: " . print_r($_SESSION, true));

        echo json_encode([
            'success' => true,
            'message' => 'Login successful'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Invalid credentials'
        ]);
    }

} catch (Exception $e) {
    error_log("Login error: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
} 
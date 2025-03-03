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

    // Debug logging
    error_log("Login attempt with:");
    error_log("Email: " . $email);
    error_log("Region: " . $region);

    if (empty($email) || empty($password) || empty($region)) {
        throw new Exception('All fields are required');
    }

    // Check if user exists
    $stmt = $conn->prepare("SELECT * FROM lgu_admins WHERE email = ? AND region = ?");
    $stmt->execute([$email, $region]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Debug logging
    error_log("User found: " . ($user ? 'Yes' : 'No'));

    if (!$user) {
        throw new Exception('User not found');
    }

    // Debug password check
    error_log("Stored password: " . $user['password']);
    error_log("Provided password: " . $password);

    // For testing purposes, accept plain text password
    if ($password === $user['password']) {
        // Set session variables
        $_SESSION['admin_id'] = $user['id'];
        $_SESSION['admin_email'] = $user['email'];
        $_SESSION['admin_region'] = $user['region'];
        $_SESSION['admin_role'] = $user['role'];

        error_log("Login successful for user: " . $email);

        echo json_encode([
            'success' => true,
            'message' => 'Login successful'
        ]);
    } else {
        throw new Exception('Invalid password');
    }

} catch (Exception $e) {
    error_log("Login error: " . $e->getMessage());
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
} 
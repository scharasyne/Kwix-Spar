<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$db_host = 'localhost';
$db_user = 'root';  // Default XAMPP username
$db_pass = '';      // Default XAMPP password
$db_name = 'pwdi_database';

try {
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    error_log("Database connection successful");
} catch(PDOException $e) {
    error_log("Connection failed: " . $e->getMessage());
    die("Connection failed: " . $e->getMessage());
} 
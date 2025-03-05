<?php
// Start with a clean slate
ob_end_clean();
if (ob_get_level() == 0) ob_start();

// Basic setup
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', '../php-errors.log');

session_start();

// Function to send JSON response
function sendJSON($data) {
    ob_clean();
    header('Content-Type: application/json');
    echo json_encode($data);
    ob_end_flush();
    exit;
}

try {
    require_once 'db-connect.php';
    require_once 'check-auth.php';

    // Debug logging
    error_log("POST data: " . print_r($_POST, true));
    error_log("FILES data: " . print_r($_FILES, true));

    // Validate required fields
    $required_fields = [
        'pwd_id', 'first_name', 'last_name', 'birth_date', 
        'gender', 'address', 'city', 'disability_type', 'expiry_date'
    ];

    foreach ($required_fields as $field) {
        if (empty($_POST[$field])) {
            throw new Exception("Missing required field: $field");
        }
    }

    // Validate required files
    $required_files = ['medical_certificate', 'barangay_certification', 'id_picture'];
    foreach ($required_files as $file) {
        if (!isset($_FILES[$file]) || $_FILES[$file]['error'] !== UPLOAD_ERR_OK) {
            throw new Exception("Missing required file: $file");
        }
    }

    $conn->beginTransaction();

    // Create uploads directory
    $upload_dir = "../uploads/";
    if (!file_exists($upload_dir)) {
        if (!mkdir($upload_dir, 0777, true)) {
            throw new Exception('Failed to create uploads directory');
        }
    }

    // Insert PWD record
    $stmt = $conn->prepare("
        INSERT INTO pwd_records (
            pwd_id_number, first_name, last_name, birth_date,
            gender, address, city, province, region,
            disability_type, id_expiry_date, created_by
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->execute([
        $_POST['pwd_id'],
        $_POST['first_name'],
        $_POST['last_name'],
        $_POST['birth_date'],
        $_POST['gender'],
        $_POST['address'],
        $_POST['city'],
        $_SESSION['admin_province'],
        $_SESSION['admin_region'],
        $_POST['disability_type'],
        $_POST['expiry_date'],
        $_SESSION['admin_id']
    ]);

    $pwd_record_id = $conn->lastInsertId();

    // Handle file uploads
    foreach ($required_files as $file) {
        if (isset($_FILES[$file]) && $_FILES[$file]['error'] === UPLOAD_ERR_OK) {
            $ext = pathinfo($_FILES[$file]['name'], PATHINFO_EXTENSION);
            $filename = uniqid() . '_' . $file . '.' . $ext;
            $filepath = $upload_dir . $filename;

            if (!move_uploaded_file($_FILES[$file]['tmp_name'], $filepath)) {
                throw new Exception("Failed to upload file: $file");
            }

            $stmt = $conn->prepare("
                INSERT INTO pwd_documents (
                    pwd_record_id, document_type, file_name, file_path
                ) VALUES (?, ?, ?, ?)
            ");
            $stmt->execute([$pwd_record_id, $file, $_FILES[$file]['name'], $filepath]);
        }
    }

    // Log the action
    $stmt = $conn->prepare("
        INSERT INTO audit_logs (admin_id, action, details)
        VALUES (?, 'add_pwd_record', ?)
    ");
    $stmt->execute([$_SESSION['admin_id'], "Added PWD record: " . $_POST['pwd_id']]);

    $conn->commit();
    sendJSON(['success' => true, 'message' => 'Record saved successfully']);

} catch (Exception $e) {
    if (isset($conn)) {
        $conn->rollBack();
    }
    error_log("Error: " . $e->getMessage());
    sendJSON([
        'success' => false,
        'message' => 'Error saving record: ' . $e->getMessage()
    ]);
} 
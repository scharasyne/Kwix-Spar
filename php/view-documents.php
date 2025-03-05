<?php
session_start();
require_once 'check-auth.php';
require_once 'db-connect.php';

$record_id = $_GET['record_id'] ?? null;

if (!$record_id) {
    die('Record ID is required');
}

try {
    $stmt = $conn->prepare("
        SELECT d.*, dt.name as document_type_name 
        FROM pwd_documents d
        JOIN document_types dt ON d.document_type = dt.name
        WHERE d.pwd_record_id = ?
    ");
    $stmt->execute([$record_id]);
    $documents = $stmt->fetchAll(PDO::FETCH_ASSOC);

    include '../html/document-viewer.html';

} catch (Exception $e) {
    die('Error loading documents: ' . $e->getMessage());
}
?> 
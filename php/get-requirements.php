<?php
session_start();
require_once 'check-auth.php';
require_once 'db-connect.php';

header('Content-Type: application/json');

$record_id = $_GET['record_id'] ?? null;

if (!$record_id) {
    echo json_encode(['error' => 'Record ID is required']);
    exit;
}

try {
    $stmt = $conn->prepare("
        SELECT d.*, dt.name as document_type_name, dt.description
        FROM pwd_documents d
        JOIN document_types dt ON d.document_type = dt.name
        WHERE d.pwd_record_id = ?
        ORDER BY d.uploaded_at DESC
    ");
    $stmt->execute([$record_id]);
    $documents = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($documents);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
} 
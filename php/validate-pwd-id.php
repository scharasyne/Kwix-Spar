<?php
header('Content-Type: application/json');

try {
    $pwdID = isset($_GET['id']) ? trim($_GET['id']) : '';
    error_log("Validating PWD ID: '$pwdID'");

    if (empty($pwdID)) {
        throw new Exception('No ID provided');
    }

    require_once 'db-connect.php';
    error_log('Database connection established');

    $stmt = $conn->prepare("SELECT * FROM pwd_records WHERE pwd_id_number = ?");
    $stmt->execute([$pwdID]);
    $record = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$record) {
        // No matching record found
        echo json_encode([
            'success' => false,
            'message' => 'No valid PWD ID record found with this number.'
        ]);
    } else {
        // $record = $result->fetch_assoc();

        $isExpired = new DateTime($record['id_expiry_date']) < new DateTime();

        echo json_encode([
            'success' => true,
            'isExpired' => $isExpired,
            'record' => [
                'name' => $record['first_name'] . ' ' . $record['last_name'],
                'disability_type' => $record['disability_type'],
                'city' => $record['city'],
                'expiry_date' => $record['id_expiry_date']
            ]
        ]);
    }
} catch (Exception $e) {
    error_log('PWD validation error: ' . $e->getMessage());
    echo json_encode([
        'success' => false,
        'message' => 'Error validating PWD ID: ' . $e->getMessage()
    ]);
}
?>
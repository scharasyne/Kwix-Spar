<?php
header('Content-Type: application/json');
require_once 'db-connect.php';

$json = file_get_contents('php://input');
$data = json_decode($json, true);

$imageData = $data['imageData'] ?? '';
if(empty($imageData)){
    echo json_encode(['success' => false, 'message' => 'No image data provided']);
    exit;
}

$imageData = str_replace('data:image/jpeg;base64,', '', $imageData);
$imageData = str_replace('data:image/png;base64,', '', $imageData);
$imageData = str_replace(' ', '+', $imageData);
$imageData = base64_decode($imageData);

// Configuration for Azure Document Intelligence
$endpoint = "https://pwdi.cognitiveservices.azure.com/";
$key = "1ywJ9F2XtO5yFLJyUqhQGzZGQNQrnnrm7lAAUqqhOKH8UKBNHfcmJQQJ99BCACqBBLyXJ3w3AAALACOGakoI";
$modelId = "prebuilt-idDocument";

$headers = [
    'Content-Type: application/octet-stream',
    'Ocp-Apim-Subscription-Key: ' . $key
];

$url = $endpoint . "/formrecognizer/documentModels/" . $modelId . ":analyze?api-version=2023-07-31";

// Send request to Azure
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $imageData);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true);

$response = curl_exec($ch);

//  Get headers and body
$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$headers = substr($response, 0, $headerSize);
$body = substr($response, $headerSize);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

$operationLocation = null;
foreach (explode("\n", $headers) as $headerLine) {
    if (stripos($headerLine, 'operation-location:') !== false) {
        $operationLocation = trim(substr($headerLine, 19));
        break;
    }
}

curl_close($ch);

if ($httpCode === 202 && $operationLocation) {
    echo json_encode([
        'success' => true,
        'operationLocation' => $operationLocation
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Azure API request failed: ' . $httpCode,
        'response' => $body
    ]);
}
?>
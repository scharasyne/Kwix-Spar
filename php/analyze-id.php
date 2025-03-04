<?php
header('Content-Type: application/json');
require_once 'db-connect.php';

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

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

// Google Cloud Vision API config
$apiKey = $_ENV['GOOGLE_VISION_API_KEY'];

// Prepare request payload for Google Cloud Vision API
$requestData = [
    "requests" => [
        [
            "image" => [
                "content" => $imageData
            ],
            "features" => [
                [
                    "type" => "DOCUMENT_TEXT_DETECTION",
                    "maxResults" => 1
                ]
            ]
        ]
    ]
];

// Send request to Google Cloud Vision API
$ch = curl_init();
$url = "https://vision.googleapis.com/v1/images:annotate?key=" . $apiKey;

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($requestData));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    $responseData = json_decode($response, true);
    
    if (isset($responseData['error'])) {
        echo json_encode([
            'success' => false,
            'message' => 'Google Cloud Vision API error: ' . $responseData['error']['message']
        ]);
    } else {
        echo json_encode([
            'success' => true,
            'result' => $responseData
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Google Cloud Vision API request failed: ' . $httpCode,
        'response' => $response
    ]);
}
?>
<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$upload_dir = "../uploads/";

echo "<h2>Upload Directory Test</h2>";

// Check if directory exists
if (!file_exists($upload_dir)) {
    echo "Creating upload directory...<br>";
    if (mkdir($upload_dir, 0777, true)) {
        echo "Upload directory created successfully<br>";
    } else {
        echo "Failed to create upload directory<br>";
    }
} else {
    echo "Upload directory exists<br>";
}

// Check permissions
if (is_writable($upload_dir)) {
    echo "Upload directory is writable<br>";
} else {
    echo "Upload directory is NOT writable<br>";
}

// Try to create a test file
$test_file = $upload_dir . "test.txt";
if (file_put_contents($test_file, "test")) {
    echo "Successfully created test file<br>";
    unlink($test_file);
    echo "Successfully removed test file<br>";
} else {
    echo "Failed to create test file<br>";
}

echo "<br>Directory path: " . realpath($upload_dir); 
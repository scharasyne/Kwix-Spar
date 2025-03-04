<?php
$conn = new PDO(
    "mysql:host=localhost;dbname=pwdi_database",
    "root",
    "",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
); 
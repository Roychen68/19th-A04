<?php
session_start();
header("Content-Type: application/json");

echo json_encode([
    "login" => $_SESSION['admin'] ?? false
]);
?>

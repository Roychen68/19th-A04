<?php

header("Content-Type: application/json");

$action = $_POST['action'] ?? null;

$pdo = new PDO("mysql:host=localhost;dbname=19_a04;charset=utf8","root", "");

switch ($action) {

    case 'journal':

        $image =
            "data:" .
            $_FILES['image']['type'] .
            ";base64," .
            base64_encode(
                file_get_contents($_FILES['image']['tmp_name'])
            );

        $stmt = $pdo->prepare("
            INSERT INTO journal(name,email,location,date,rate,review,image,file_name)VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

        $stmt->execute([
            $_POST['name'],
            $_POST['email'],
            $_POST['location'],
            $_POST['date'],
            $_POST['rate'],
            $_POST['review'],
            $image,
            $_FILES['image']['name']
        ]);

        echo json_encode([
            "success" => true,
            "message" => "投稿成功"
        ]);

        break;


    default:

        echo json_encode([
            "success" => false,
            "message" => "Unknown action"
        ]);

        break;
}
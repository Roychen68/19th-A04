<?php
session_start();
header("Content-Type: application/json");

$action = $_POST['action'] ?? null;

$pdo = new PDO(
    "mysql:host=localhost;dbname=19_a04;charset=utf8mb4",
    "root",
    ""
);

switch ($action) {

    case 'journal':
        $image = "uploads/" . $_FILES['image']['name'];
        move_uploaded_file($_FILES['image']['tmp_name'],"../" . $image);

        $stmt = $pdo->prepare("
            INSERT INTO journal
            (name,email,location,date,rate,review,image,file_name,bless)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)
            ");

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

    case 'journals':

        $stmt = $pdo->prepare("
            SELECT id, name, CONCAT(LEFT(email, 1), '***', SUBSTRING(email, LOCATE('@', email))) AS email, location, date, rate, review, image, file_name, bless
            FROM journal
            ORDER BY date DESC, id DESC
        ");
        $stmt->execute();

        echo json_encode([
            "success" => true,
            "data" => $stmt->fetchAll(PDO::FETCH_ASSOC)
        ]);

        break;

    case 'bless':

        $stmt = $pdo->prepare("UPDATE journal SET bless = bless + 1 WHERE id = ?");
        $stmt->execute([$_POST['id']]);

        $stmt = $pdo->prepare("SELECT bless FROM journal WHERE id = ?");
        $stmt->execute([$_POST['id']]);

        echo json_encode([
            "success" => true,
            "bless" => $stmt->fetchColumn()
        ]);

        break;

    case 'admin_journals':

        if (!($_SESSION['admin'] ?? false)) {
            http_response_code(401);
            echo json_encode([
                "success" => false,
                "message" => "未登入者不可直接進入後台"
            ], JSON_UNESCAPED_UNICODE);
            break;
        }

        $stmt = $pdo->prepare("
            SELECT id, name, email, location, date, rate, review, image, file_name, bless
            FROM journal
            ORDER BY date DESC, id DESC
        ");
        $stmt->execute();

        echo json_encode([
            "success" => true,
            "data" => $stmt->fetchAll(PDO::FETCH_ASSOC)
        ], JSON_UNESCAPED_UNICODE);

        break;

    default:

        echo json_encode([
            "success" => false,
            "message" => "Unknown action"
        ]);

        break;
}

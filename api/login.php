<?php
session_start();
header("Content-Type: application/json");

$_SESSION['admin'] = $_SESSION['admin'] ?? false;
$form = $_POST;
if (($form['password'] ?? "") == "1234" && ($form['account'] ?? "") == "admin") {
    $_SESSION['admin'] = true;
    echo json_encode([
        "login" => true,
        "message" => "登入成功"
    ]);
} else {
    $_SESSION['admin'] = false;
    echo json_encode([
        "login" => false,
        "message" => "帳號或密碼錯誤"
    ]);
}

?>

<?php
session_start();

$_SESSION['admin'] = $_SESSION['admin'] ?? false;
$form = $_POST;
if ($form['password'] == "1234" && $form['account'] == "admin") {
    $_SESSION['admin'] = true;
    echo json_encode([
        "login" => true,
        "message" => "登入成功"
    ]);
} else {
    echo json_encode([
        "login" => false,
        "message" => "未登入者不可直接進入後台"
    ]);
}

?>
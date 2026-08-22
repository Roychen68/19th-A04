<?php
declare(strict_types=1);

session_start();
header('Content-Type: application/json; charset=utf-8');

$authenticated = isset($_SESSION['admin']) && $_SESSION['admin'] === true;

if (!$authenticated) {
    http_response_code(401);
}

echo json_encode([
    'authenticated' => $authenticated,
    'message' => $authenticated ? '管理者已登入。' : '未登入者不可直接進入後台。'
], JSON_UNESCAPED_UNICODE);

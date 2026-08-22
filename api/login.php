<?php
declare(strict_types=1);

session_start();
header('Content-Type: application/json; charset=utf-8');

$action = $_POST['action'] ?? '';
if ($action === 'logout') {
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'], $params['secure'], $params['httponly']);
    }
    session_destroy();
    echo json_encode(['login' => false, 'message' => '已安全登出。'], JSON_UNESCAPED_UNICODE);
    exit;
}

$account = trim((string) ($_POST['account'] ?? ''));
$password = (string) ($_POST['password'] ?? '');

if ($account === 'admin' && $password === '1234') {
    session_regenerate_id(true);
    $_SESSION['admin'] = true;
    echo json_encode(['login' => true, 'message' => '登入成功，正在前往管理後台。'], JSON_UNESCAPED_UNICODE);
    exit;
}

$_SESSION['admin'] = false;
http_response_code(401);
echo json_encode(['login' => false, 'message' => '帳號或密碼錯誤，請重新輸入。'], JSON_UNESCAPED_UNICODE);

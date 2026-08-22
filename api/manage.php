<?php
$action = $_POST['action'];
$pdo = new PDO("mysql:host=localhost;charset=utf8;dbname=19_a04");

switch ($action) {
    case 'journal':
        print_r($_POST['form']);
        break;

    default:
        # code...
        break;
}

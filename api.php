<?php
include "db.php";

$action = $_POST['action'];
switch ($action) {
    case 'journal_get':
        $stmt = $pdo->prepare("SELECT * FROM `forecast`");
        $stmt->execute();
        $result = $stmt->fetchAll();
        echo json_encode($result);
        break;
    
    default:
        # code...
        break;
}
?>
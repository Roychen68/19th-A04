<?php
$action = $_POST['action'];
$pdo    = new PDO("mysql:host=localhost;charset=utf8;dbname=19_a04", "root", "");

switch ($action) {
    case 'journal':
        header("Content-type: application/json");
        $image = "data:".$_FILES['image']['type'].";base64,".base64_encode(file_get_contents($_FILES['image']['tmp_name']));
        $stmt = $pdo->prepare("INSERT INTO `journal`( `name`, `email`, `location`, `date`, `rate`, `review`, `image`, `file_name`) VALUES (?,?,?,?,?,?,?,?)");
        $stmt->execute($_POST['name'], $_POST['email'], $_POST['location'], $_POST['date'], $_POST['rate'], $_POST['review'],$image,$_FILES['image']['tmp_name']);
        break;

    default:
        # code...
        break;
}

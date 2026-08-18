<?php
$action = $_POST['action'];

switch ($action) {
    case 'aurora':
        header("Content-Type: application/json");
        $result = file_get_contents("https://space.fmi.fi/MIRACLE/RWC/r-index/api/map-en-esa.json");
        echo json_encode($result);
        break;
    
    default:
        # code...
        break;
}
?>
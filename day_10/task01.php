<?php
$name = $_GET["name"];
header('Content-Type: application/json');
echo json_encode(["name"=>$name]);
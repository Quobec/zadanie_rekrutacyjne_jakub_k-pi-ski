<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$json = file_get_contents("users.json");
echo $json;

?>
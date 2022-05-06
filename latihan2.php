<?php
$data = file_get_contents("coba.json");

$emp = json_decode($data, true);


var_dump($emp);
echo $emp["nama"]; 
echo '<br>';
echo $emp["pembimbing"]["pembimbing 1"];


?>
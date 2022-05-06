<?php
/*
$mahasiswa = [
    [
        "nama" => "rizki",
        "nip" => "11104001",
        "email" => "rizki@gmail.com",
        "dosen" => [
            "dosen 1" => "udin",
            "dosen 2" => "mamat"
        ]
    ],
    [
        "nama" => "aljabari",
        "nip" => "222321",
        "email" => "aljabari@gmail.com",
        "dosen" => [
            "dosen 1" => "ucok",
            "dosen 2" => "john"
        ]
    ]
];
*/

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employeedatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM employee";
$result = $conn->query($sql);

$row = $result -> fetch_all(MYSQLI_ASSOC);


//berbentuk array asosiatif
// var_dump($mahasiswa);

$data = json_encode($row);
echo $data;



?>
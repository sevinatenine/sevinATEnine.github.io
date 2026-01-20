<?php

header("Content-Type: text/json");

$servername = "localhost";
$username = "elem435_cst_usr";
$password = "#3rm|n@2";
$dbname = "elem435_cst";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// $sql = "CREATE TABLE authCodes(id int, code text)";
$sql = "SELECT * FROM authCodes WHERE id=1";
// $sql = "DELETE FROM authCodes";
// $sql = "INSERT INTO authCodes VALUES(0,'16473289')";

$result = $conn->query($sql);

// echo $result;
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $code = $row['code'];
    $timeCreated = $row['timeCreated'];

  }

} else {
    die('{"auth:":"error: no results"}');
}

if (strlen($_GET['code'])<1) {
    die('{"auth:":"error: no code inputed"}');
}

if (strval($_GET['code'])==strval($code)) {
    echo '{"auth:":"true"}';
} else {
    echo '{"auth:":"false"}';
}


$conn->close();
?>
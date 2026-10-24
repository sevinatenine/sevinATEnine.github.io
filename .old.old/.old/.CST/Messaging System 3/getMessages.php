<?php
header('Content-type: application/json');

$servername = "localhost";
$username = "elem435_cst_usr";
$password = "#3rm|n@2";
$dbname = "elem435_cst";
$messagesData = '';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$roomId = $_GET['roomId'];


$sql = "SELECT * FROM messages3";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {

    $messagesData += '{"date":"'.$row["dateSent"].'", "time":"'.$row["timeSent"]. '", "sender":"'.$row["sender"]. '", "ip":"'.$row["ipAdress"].'", "message":"' . $row["message"].'"}'; 
}
} else {
}

$conn->close();

echo "{\"data\":[$messagesData]}";
?>
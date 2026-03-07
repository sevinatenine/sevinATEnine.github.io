<?php
$servername = "localhost";
$username = "elem435_cst_usr";
$password = "#3rm|n@2";


// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
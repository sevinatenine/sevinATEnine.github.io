<?php
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

// $sql = "CREATE TABLE Stock(ItemName text, Ammount int, Price int)";

// $sql = "DELETE FROM Stock";
// $sql = "INSERT INTO Stock VALUES('Test 3',5,20)";

try {
$result = $conn->query($_GET['sqlCode']);
} catch(Exception $e) {
  echo('Error: '. $e->getMessage());
}

try {
echo $result;
} catch(Exception $e) {
  echo('Error: '. $e->getMessage());
}

$conn->close();
?>

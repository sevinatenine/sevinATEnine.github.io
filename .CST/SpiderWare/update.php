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

$sql = "SELECT * FROM SpiderWareData WHERE ip ='".$_SERVER['REMOTE_ADDR']."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  echo "$result->num_rows results<br>";

  $sql2 = "UPDATE SpiderWareData SET jsondata = '".$_POST['jsondata']."' WHERE ip = '".$_SERVER['REMOTE_ADDR']."'";
  echo "$sql2<br>";

  if ($conn->query($sql2) === TRUE) {
    echo "Old record updated successfully";
  } else {
    echo "Error: " . $sql2 . "<br>" . $conn->error;
  }
  
} else {

  echo "No results<br>";
  $sql3 = "INSERT INTO SpiderWareData (ip, lastUpdated, jsondata) VALUES ('".$_SERVER['REMOTE_ADDR']."', '".new DateTime()."', '".$_POST['jsondata']."')";
  echo "$sql3<br>";

  if ($conn->query($sql3) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql3 . "<br>" . $conn->error;
  }
  
}




$conn->close();
?>
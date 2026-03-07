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


$result = $conn->query("SELECT * FROM locationTracker WHERE uniqeID = '".$_GET['uid']."'");


// echo($result);


// echo($result->num_rows);
if ($result->num_rows > 0) {
    $sql = "UPDATE locationTracker SET uniqeID ='".$_GET['uid']."',latitude = '".$_GET['latitude']."', longitude = '".$_GET['longitude']."' WHERE uniqueID = '".$_GET['uid']."'";

} else {
    $sql = "INSERT INTO locationTracker(uniqeID, latitude, longitude) VALUES('".$_GET['uid']."','".$_GET['latitude']."','".$_GET['longitude']."')";
}
echo($sql ."<br>");



// $sql = "DELETE FROM Stock";
// $sql = "INSERT INTO Stock VALUES('Test 3',5,20)";

try {
$result = $conn->query($sql);
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

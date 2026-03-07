<?php
echo $_GET['deviceId'];

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

$sql = "SELECT * FROM OpIcecubeDevicePings WHERE deviceId = '".$_GET['deviceId']."' LIMIT 1;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {

    echo "[" . $row["timePosted"] . "] " . "<font color='".$colors[$row['username']]."'>" . $row["username"] . "</font>: ". $row["messageContent"] . "<br>"; 
}
} else {
    echo ",Off,No Power,No Network,No SSH,Not Ready,Not Armed,Not Detonated,Unresponsive";
}

$conn->close();

?>

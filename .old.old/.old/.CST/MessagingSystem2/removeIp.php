<a href='./banIp.php'>Back</a><br><br>
<?php
Header('Content-type: text/html');
$servername = "localhost";
$username = "elem435_cst_usr";
$password = "#3rm|n@2";
$dbname = "elem435_cst";

$bannedIps = $_POST["bannedIps"];



echo ("Received data:" . implode(explode("\n",$bannedIps))). "<br><br>";

$ipsToBan = explode("\n",$bannedIps);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

echo "Clearing....<br>";

$sql = "DELETE FROM bannedMessageIPs";
$result = $conn->query($sql);

// 
// INSERT INTO settings (item, contents) VALUES ('lockdownMode', 'false')

if ($result=='1') {
    echo "Success<br><br>";
} else {
    die("Error".$conn -> error);
}

echo "Inserting....<br>";

foreach ($ipsToBan as $value) {
    echo "Banning $value: ";
    $sql = "INSERT INTO bannedMessageIPs VALUES ('$value')";
    $result = $conn->query($sql);

    // 
    // INSERT INTO settings (item, contents) VALUES ('lockdownMode', 'false')

    if ($result=='1') {
    echo "Success<br>";
    } else {
    echo "Error".$conn -> error;
    }
}


$conn->close();


?>


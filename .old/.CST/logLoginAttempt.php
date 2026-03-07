<?php 

$trueUsername = $_GET['trueUsername'];
$trueUsername2 = $_GET['trueUsername2'];
$loginUsername = $_GET['loginUsername'];
$os = $_GET['os'];
$browser = $_GET['browser'];
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

if ($loginUsername === 'google_login_user_undefined') {
  die('Invalid username. Exiting.');
};


// $_SERVER['HTTP_USER_AGENT']

// $_SERVER['REMOTE_ADDR']

// $sql = "DELETE FROM loginAttempts";
// $sql = "INSERT INTO loginAttempts (trueUsername, loginUsername, os, browser) VALUES ('".$trueUsername."','".$loginUsername."','".$os."','".$browser."')";
$sql = "INSERT INTO loginAttempts (trueUsername, loginUsername, os, browser, ip1, trueUsername2) VALUES ('".$trueUsername."','".$loginUsername."','".$os."','".$browser."','".$_SERVER['REMOTE_ADDR']."','".$trueUsername2."')";
// $sql = "ALTER TABLE loginAttempts ADD ip2 TEXT";

// $sql = "CREATE TABLE loginAttempts (
//     trueUsername TEXT, 
//     loginUsername TEXT, 
//     os TEXT, 
//     browser TEXT
//     )";
// $sql = "";

$result = $conn->query($sql);

if ($result === TRUE) {
    echo $result."\n\nSuccessfull\n$loginUsername\n$os\n$browser\n".$_SERVER['REMOTE_ADDR'];
  } else {
    echo "Error: " . $conn->error;
}

$conn->close();



?>
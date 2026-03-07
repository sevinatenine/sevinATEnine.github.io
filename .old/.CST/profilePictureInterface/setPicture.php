<?php

Header('Content-type: application/json');

if (strlen($_POST['userName'])<1) {
    die('{"status": "error: please enter userName via. POST"}');
} else if (strlen($_POST['pictureData'])<1) {
    die('{"status": "error: please enter pictureData via. POST"}');
}



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

$sql = "UPDATE userData SET username='".$_POST['userName']."',profilePicture='".$_POST['pictureData']."',notes=(SELECT notes FROM userData WHERE username='".$_POST['userName']."') WHERE username='".$_POST['userName']."';";
$result = $conn->query($sql);

// echo $result;
if ($result===1) {
    echo('{"status": "success"}');
} else {
    echo('{"status": "fail"}');
}
$conn->close();


?>
<!----------------------------------------------------------------------------------------------------

The following document is owned by:
@sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02

It is under the Creative Commons license and may not be reproduced commercially or without
direct permission from the authors.

Other files linked to this repository, with the exception of some of the assets, also hold
the same criteria.

---------------------------------------------------------------------------------------------------->
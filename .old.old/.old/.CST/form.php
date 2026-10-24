<!----------------------------------------------------------------------------------------------------

The following document is owned by:
@sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02

It is under the Creative Commons license and may not be reproduced commercially or without
direct permission from the authors.

Other files linked to this repository, with the exception of some of the assets, also hold
the same criteria.

---------------------------------------------------------------------------------------------------->

<?php
$servername = "localhost";
$username = $_POST["username"]; 
$password = $_POST["password"]; 

echo "Connecting to " . $username . "@" . $servername . " with password: ";
for ($x = 0; $x <= (strlen($password)-1); $x++) {
  echo "*";
}

sleep(2);
// Create connection
// $conn = new mysqli($servername, $username, $password);
$conn = new mysqli($servername, $username, $password);
// print($conn);

// Check connection
if ($conn->connect_error) {
  echo ("<br> Connection failed: " . $conn->connect_error);
  echo ("<br> Redirecting to login...");
  sleep(1);
  header("Location: ./index.html");

} else {
  echo "<br> Connected successfully";
  echo ("<br> Redirecting to terminal...");
  sleep(3);
  header("Location: ./terminal.html");
}
?>



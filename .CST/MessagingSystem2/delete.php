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

  $messageIdentifier = $_GET['id'];


  $sql = "DELETE FROM messages2 WHERE messageIdentifier = '$messageIdentifier'";
  $result = $conn->query($sql);

  if ($result === TRUE) {
    echo "Success<br>";
  } else {
    echo "Fail!<br>";
  }

  echo $result." ".$conn->error;

?>
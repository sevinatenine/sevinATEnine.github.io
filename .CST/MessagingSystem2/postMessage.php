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
  $a = $_SERVER['REMOTE_ADDR'];

  $usernameGet = $_GET['username']." (XX.XX.XX.XX)";
  $messageGet = $_GET['message'];
  $roomId = $_GET['roomId'];
  $ipAddress = $_SERVER['REMOTE_ADDR'];


  /// Check IPs \\\

  $messageIdentifier = hash("md5",rand().rand());


  $sql = "SELECT * FROM bannedMessageIPs WHERE ipAddress = '$ipAddress'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    die("IP $ipAddress, is banned from posting messages");

  } else {
    echo "Ip clear!";
  }

  
  /// Post message \\\


  echo "Posting message...<br>";

  $sql = "INSERT INTO messages2 (sender, message, roomId, messageIdentifier) VALUES ('$usernameGet', '$messageGet', $roomId, '$messageIdentifier')";
  $result = $conn->query($sql);

  echo $result." ".$conn -> error;
  echo "<script>var chatroomId=$roomId;</script>";

  
  $conn->close();
  ?>
    <script>
/* The commented line `// window.location=('./view.php?roomId='+chatroomId);` is setting the window
location to redirect the user to the `view.php` page with the `roomId` parameter appended to the
URL. This line of code is currently commented out, which means it is not active and will not
execute. If you uncomment this line by removing the `//`, the user will be redirected to the
`view.php` page with the `roomId` parameter passed in the URL. */
        window.location=('./view.php?roomId='+chatroomId);
    </script>
  
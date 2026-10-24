<!----------------------------------------------------------------------------------------------------

The following document is owned by:
@sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02

It is under the Creative Commons license and may not be reproduced commercially or without
direct permission from the authors.

Other files linked to this repository, with the exception of some of the assets, also hold
the same criteria.

---------------------------------------------------------------------------------------------------->



<?php
    function startsWith ($string, $startString)
    {
        $len = strlen($startString);
        return (substr($string, 0, $len) === $startString);
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
    if (startsWith(($_GET['username']), "[")) {
        echo(('You are not ' . $_GET['username'] . '. Don\'t try to fake as them. Anything starting with `[` is reserved for root.'));
        die();
    };
    $message = $_GET['message'];
    $sql = "INSERT INTO Messages (username, messageContent) VALUES ('" . $_GET['username'] . "', '" . $message . "')";

    if ($conn->query($sql) === TRUE) {
    echo "Successfully posted";
    echo "<br/><a id='link'href=".$_GET['redirect'].">Back to messages</a><br>";
    } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    }
  
    $conn->close();


  ?>
<script>
  document.getElementById("link").click();
</script>
<br>


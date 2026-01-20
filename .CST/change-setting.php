<!----------------------------------------------------------------------------------------------------

The following document is owned by:
@sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02

It is under the Creative Commons license and may not be reproduced commercially or without
direct permission from the authors.

Other files linked to this repository, with the exception of some of the assets, also hold
the same criteria.

---------------------------------------------------------------------------------------------------->

<?php
if ($_GET['auth']=="!312645root.com/eat~") {

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

    // $sql = "UPDATE settings SET item = 'lockdown-mode', contents = 'true' WHERE item = 'lockdown-mode';";
    $sql = "UPDATE settings SET item = '".strval($_GET['setting'])."', contents = '".strval($_GET['value'])."' WHERE item = '".strval($_GET['setting'])."';";
    $result = $conn->query($sql);

    // 
    // INSERT INTO settings (item, contents) VALUES ('lockdownMode', 'false')

    echo ($result);
    $conn->close();
} else {
    echo('Could not change setting, '.$_GET['setting'].' due to invalid auth.');
}
?>
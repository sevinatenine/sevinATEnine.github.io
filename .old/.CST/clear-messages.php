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

        $sql = "DELETE FROM Messages";
        $result = $conn->query($sql);

        if ($result) {
            echo("Success");
        } else {
            echo("Error");
        };
        $conn->close();

    } else {
        echo('Could not clear messages, due to invalid auth.');
    }
?>
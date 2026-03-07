<!----------------------------------------------------------------------------------------------------

The following document is owned by:
@sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02

It is under the Creative Commons license and may not be reproduced commercially or without
direct permission from the authors.

Other files linked to this repository, with the exception of some of the assets, also hold
the same criteria.

---------------------------------------------------------------------------------------------------->

<?php 

$action = $_GET["action"];
$arg1 = $_GET["arg1"];
$arg2 = $_GET["arg2"];
echo "Performing action " . $action . " with arguments " . $arg1 . " and " . $arg2;

switch ($action) { 
    case "help":
        echo "help shows list of commands!<br>Logout - Logs out of the terminal.<br>Read - Reads file.<br>Append - Adds to a file.<br>Write - Overrides the file then writes to it.<br>Erase - Clears a file.<br>Clear - Removes previous output.<br>Make - Makes a file.<br>Remove - Removes a file.<br>Change - Changes directory to a folder.<br>Move - Moves a file from one location to another.<br>Upload - Uploads a file for storage or editing.";
        break;
    case "read":
        break;
    case "append":
        break;
    case "write":
        break;
    case "erase":
        break;
    case "clear":
        break;
    case "make":
        break;
    case "remove":
        break;
    case "change":
        break;
    case "move":
        break;
    case "credits":
        echo "SQL and Server Implementaion - Simon<br>Programming - Caden<br>Graphics - Todd";
        break;
    case "logout":
        header("Location: ./index.html");
    case "upload":
        break;
}

?>
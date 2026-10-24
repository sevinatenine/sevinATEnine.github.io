<?php
    $lib = fopen("./libraries/".$_POST["file"]."cst", "x+") or die("Unable to create file and/or requested library already exists.");
    $txt = $_POST["contents"];
    fwrite($lib, $txt);
    fclose($lib);
    echo("Library created.")
?>
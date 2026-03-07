<?php
header("Content-type:text/json");
echo("[");
// connect and login to FTP server
$ftp_server = "ftp.hobbyrobot.com";
$ftp_username = "cst@hobbyrobot.com";
$ftp_userpass = "#3rm|n@2";
$ftp_conn = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");
$login = ftp_login($ftp_conn, $ftp_username, $ftp_userpass) or die("Could not login to $ftp_server");

// echo "Succesfully connected to  $ftp_server with username: $ftp_username, using password: true<br><hr><strong>Files:</strong><br>";

$filelist = ftp_rawlist($ftp_conn, "/");


$ftpFiles = array();



foreach($filelist as $index => $value) {
    $split = explode(" ", $value);
    $split = array_filter($split);
    $split = implode(" ", $split);
    $split = explode(" ", $split);

    array_push($ftpFiles, [
        "modified" => "$split[5] $split[6] $split[7]",
        "name" => "$split[8]",
        "size" => "$split[4]",
    ]);
}

foreach($ftpFiles as $key => $val) {
    echo "{'name':'".$ftpFiles[$key]["name"]."','modified':'".$ftpFiles[$key]["modified"]."','size':'".$ftpFiles[$key]["size"]."'}, ";
}


// $file = "localfile.txt";

// // upload file
// if (ftp_put($ftp_conn, "serverfile.txt", $file, FTP_ASCII))
//   {
//   echo "Successfully uploaded $file.";
//   }
// else
//   {
//   echo "Error uploading $file.";
//   }




// then do something...

// close connection
ftp_close($ftp_conn);



echo("]");
?>

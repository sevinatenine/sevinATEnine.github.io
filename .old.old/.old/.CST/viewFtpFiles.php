<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

* {
    font-family: monospace;
}
</style>
</head>
<body>

<table>
<tr><th>Index</th><th>Permissions</th><th>Hard links to the file</th><th>Owner</th><th>Group owner</th><th>Size</th><th>Date modified</th><th>Name</th></tr>
<!-- <pre> -->
<?php
// connect and login to FTP server
$ftp_server = "ftp.hobbyrobot.com";
$ftp_username = "cst@hobbyrobot.com";
$ftp_userpass = "#3rm|n@2";
$ftp_conn = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");
$login = ftp_login($ftp_conn, $ftp_username, $ftp_userpass) or die("Could not login to $ftp_server");

// echo "Succesfully connected to  $ftp_server with username: $ftp_username, using password: true<br><hr><strong>Files:</strong><br>";

$filelist = ftp_rawlist($ftp_conn, "/");


// then do something...

// close connection
ftp_close($ftp_conn);


// foreach($filelist as $index => $value) {
//     $split = array_filter(explode(" ", $value));

    
//     echo ($split[0]."<br>");    

// }

foreach($filelist as $index => $value) {
    $split = explode(" ", $value);
    $split = array_filter($split);
    $split = implode(" ", $split);
    $split = explode(" ", $split);




    echo "<tr><td>$index</td><td>$split[0]</td><td>$split[1]</td><td>$split[2]</td><td>$split[3]</td><td>$split[4]</td><td>$split[5] $split[6] $split[7]</td><td>$split[8]</td></tr>";
}



?>
<!-- </pre> -->
</table>
</body>
</html>
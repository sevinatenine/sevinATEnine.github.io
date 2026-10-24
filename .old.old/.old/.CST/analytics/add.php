<head>
    <style>
            * {
                font-family: monospace;
            }
    </style>
</head>
<body>
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
        $ip = $_SERVER['REMOTE_ADDR'];
        $url = $_GET['pageUrl'];
        $userAgent = $_GET['userAgent'];


        $sql = "INSERT INTO pageLoads (ip, time, url, userAgent) VALUES ('$ip', '".date('d-m-y h:i:s')."', '$url', '$userAgent')";
        $result = $conn->query($sql);

        // 
        // INSERT INTO settings (item, contents) VALUES ('lockdownMode', 'false')

        echo $result;
        echo $conn->error;
        
        $conn->close();
    ?>
</body>
<head>
    <style>
        #sidebar {
            width: 200px;
            background-color: aquamarine;
            height: 100%;
            position: absolute;
            top:0px;
            left: 0px;
        }

        .sidebar-table-element {
            font-family: monospace;
            background-color: aquamarine;
            padding: 10px;
            border-bottom: 2px solid grey;
        }
        .sidebar-table-element:hover {
            background-color: aqua;
        }
        .sidebar-table-element:target {
            background-color: lightblue;
        }
        #main {
            border: 4px solid black;
            margin-left: 205px;
            height: 98%;
        }
    </style>
</head>
<body>
    <script>
        var sqlNames = [];
        hashChanged(window.location.hash.slice(1));
        function hashChanged(value) {
            console.log(value);
        }
    </script>
        <div id='main'>
          
        </div>
    <div id='sidebar'>

        
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
        
        // $sql = "CREATE TABLE Stock(ItemName text, Ammount int, Price int)";
        
        // $sql = "DELETE FROM Stock";
        $sql = "SHOW TABLES;";
        $sqlTableList = array();
        
        
        try {
        $result = $conn->query($sql);
        } catch(Exception $e) {
          echo('Error: '. $e->getMessage());
        }
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                $name = $row['Tables_in_elem435_cst'];
                echo "<div class='sidebar-table-element' id='$name' onclick=\"window.location.hash='$name'; hashChanged('$name');\">$name</div>";
                echo "<style>#$name:target { background-color: lightblue; }</style>";
                echo "<script>sqlNames.push('$name');</script>";
                array_push($sqlTableList, $name);
            }
          } else {
            echo "No messages";
          }

        
        
        try {
        echo $result;
        } catch(Exception $e) {
          echo('Error: '. $e->getMessage());
        }
        
        $conn->close();
        
        ?>
    </div>


</body>
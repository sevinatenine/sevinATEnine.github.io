<?php

    header('Content-Type: application/json; charset=utf-8');

    $servername = "localhost";
    $username = "elem435_cst_usr";
    $password = "#3rm|n@2";
    $dbname = "elem435_cst";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die(`{"error": "` . $conn->connect_error . `"}`);
    }

    $sql = "SELECT (blockId + 1) AS blockId FROM blocks ORDER BY blockId DESC LIMIT 1";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $str = rand();
            $key = hash("sha256", $str);
            $str2 = rand();
            $user = hash("sha256", $str2);
            $password = rand(0, 9).rand(0, 9).rand(0, 9).rand(0, 9).rand(0, 9).rand(0, 9).rand(0, 9).rand(0, 9).rand(0, 9).rand(0, 9).rand(0, 9);

            echo '{"id": "'.$row["blockId"].'", "key":"'.$key.'", "user":"'.$user.'"}';
            $blockId = $row["blockId"];
        }
    } else {
    }

    $sql = "INSERT INTO blocks VALUES ($blockId, '$key', '$user', '$password', 'N/A')";
    $result = $conn->query($sql);


    echo $conn -> error;

    $conn->close();
?>
  
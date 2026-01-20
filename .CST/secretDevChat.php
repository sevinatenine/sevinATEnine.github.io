<!----------------------------------------------------------------------------------------------------

The following document is owned by:
@sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02

It is under the Creative Commons license and may not be reproduced commercially or without
direct permission from the authors.

Other files linked to this repository, with the exception of some of the assets, also hold
the same criteria.

---------------------------------------------------------------------------------------------------->

<!DOCTYPE html>
<head>
  <title>CST Dev Messages</title>
  <link rel="icon" type="image/x-icon" href="./assets/favicon.ico">
  <style>
    input {
      width: 25%;
      margin-bottom: 3px;
      border-radius: 5px;
      height: 20px;
    }
    div,a {
      width: 30%;
      height: 20px;
      background-color: skyblue;
      border-radius: 5px;
      color: black;
      cursor: pointer;
      padding: 5px;
      border: none;
      text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    * {
      font-family: "Lucida Console", "Menlo", "Monaco", "Courier", monospace;
      
    }
    body {
      background: rgb(218, 237, 255);
    }

    #messages {
      height: 400px;
      max-height: 400px;
      overflow-y: scroll;
      overflow-x: wrap;
      background: rgb(218, 237, 230);
      width:100%;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>CST Messages - Only works on <a href="https://hobbyrobot.com/cst/secretDevChat.php">Hobbyrobot website</a></h1>
        <a href="./index.html">Back to login</a>
        
        <script>
          // if(sessionStorage.userTerminalCST != 'root' || sessionStorage.getItem("userTerminalCST") != 'c@d3N' || sessionStorage.getItem("userTerminalCST") != '$|m0n') {
          //   document.body.style.display = "none";
          //   alert("Sorry, but you are not permitted in the secret  dev chat.");
          // }
          function autoRefresh() {
            if (((document.getElementsByName('username')[0].value)=="") && ((document.getElementsByName('message')[0].value)=="")) {
              window.location = window.location.href;
            }
          }
          setInterval('autoRefresh()', 5000);
          
        </script>

  <br>
  <br>
  <hr>
  <div id="messages">
  <br>
  <?php

  $colors = [
    '[SYSTEM]' => 'magenta',
    'koala' => 'purple',
    'Me' => 'cyan',
    '$|m0n' => 'red',
    'c@d3N' => 'orange',
    '#Caden-dev' => 'orange',
    '#Simon-dev' => 'red',
  ];

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

  $sql = "SELECT username, messageContent, timePosted FROM Messages WHERE username IN('#Caden-dev','#Simon-dev')";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {

      echo "[" . $row["timePosted"] . "] " . "<font color='".$colors[$row['username']]."'>" . $row["username"] . "</font>: ". $row["messageContent"] . "<br>"; 
    }
  } else {
    echo "No messages";
  }
  
  $conn->close();


  ?>
  <br>
  </div>
  <hr>
  <br>
  <h2>Post message</h2>
  <form action="./postMessage.php" method="get">
    Username <input placeholder="name" name="username" required><br>
    Message <input placeholder="message" name="message" required><br>
    <input type="hidden"name="redirect"value="./secretDevChat.php">
    <input type="submit" value="Post">
  </form>

</body>

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

  <title>CST New Messaging system</title>
  <link rel="icon" type="image/x-icon" href="./assets/favicon.ico">
  <style>
    body {
      overflow-y:scroll !important;
    }
    input {
      width: 400px;
      margin-bottom: 3px;
      border-radius: 5px;
      height: 20px;
    }

    button {
      width: fit-content;
      margin-bottom: 3px;
      border-radius: 5px;
      height: fit-content;
      padding: 5px;
      margin-right: 3px;
    }
    * {
        font-family: monospace;
        background-color: ghostwhite;
    }

    #top {
        height:15vh;
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        border:none;
    }
    div {
        border-radius: 5px;
        padding: 5px;
        width: fit-content;
        height: fit-content;
        border: 2px solid grey;
    }
    span {
        border-right: 1px solid black;
        padding: 5px;
        margin-right: 5px;
    }
    form {
        position: fixed;
        top:80%;
        height:40%;
        z-index:1;
    }
    .messageArea {
      height: 550px;
      position:absolute;
      margin-top:15vh;
      min-width: 500px !important;
      max-width: 99% !important;
      width: fit-content !important;
      border: 1px solid grey !important;
      overflow: scroll !important;
    }

    div > button {
      background-color: red;
    }
    div > button:not(:disabled):hover {
      background-color: brown;
    }

    div > button:disabled {
      background-color: grey;
    }


    nav {
      text-align: center;
      color:white;
      background-color:black;
      position:fixed;
      width:100%;
      top:0px;
      left:0px;
      height:5vh;
      padding:6px;
      z-index:3;
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
  $roomId = $_GET['roomId'];

  echo "<div id='top'><h1>CST New Messaging System - Room #$roomId</h1><a href='../index.html'>Home</a> | <a href='./browse.php'>Back</a><hr></div><div class='messageArea'>";

  $sql = "SELECT * FROM messages2 WHERE roomId = $roomId";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {

      echo "<div><small>".$row["timeSent"] . " [".$row["messageIdentifier"]."] #".$row["id"]." </small><hr><span>" . $row["sender"] . "</span>" . $row["message"] . "<hr><button id=\"".$row["messageIdentifier"]."-button\" onclick='report(\"".$row["messageIdentifier"]."\", \"".$row["id"]."\",\"".$row["sender"]."\", \"".$row["message"]."\");'>Report</button></div><br>"; 
    }
  } else {
    echo "No messages";
  }
  
  $conn->close();
  echo "<script>var chatroomId=$roomId;</script>"
  ?>
  </div>
    <form action="./postMessage.php">
        <h3>Post Message</h3>
        <hr>
        <label for="username">Username</label><br>
        <input type="text" id="username" name="username" placeholder="John Doe" oninput="this.value=chatFilter(this.value, 0);" required><br>
        <label for="message">Message:</label><br>
        <input type="text" id="message" name="message" placeholder="What's up?" oninput="this.value=chatFilter(this.value, 1);" required>
        <input type="text" id="roomId" name="roomId" value="?" style='display: none;'><br><br>
        <input type="submit" value="Submit">
    </form>

    <script>
        if (window.sessionStorage.userTerminalCST !== undefined) {
          document.getElementById('username').value = window.sessionStorage.userTerminalCST;
          document.getElementById('username').oninput = function() {
            document.getElementById('username').value = window.sessionStorage.userTerminalCST
          };
        } else {
          window.location = `../login.html?nextPage=./MessagingSystem2/view.php%3FroomId%3D${chatroomId}`;
        }

        function genText(word) {
          var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`-=~_+!@#$%^&*()[]{}\\|/.,<>?";
          chars = chars.split('');
          var output = [];
          for (i of word) {
            output.push("chars["+chars.indexOf(i)+"]");
          }
          return "(" + output.join(" + ")+")";
        }

        document.getElementById('roomId').value = chatroomId;

        var objDiv = document.querySelector('.messageArea');
        objDiv.scrollTop = objDiv.scrollHeight;

        function chatFilter(text, id) {
          var output=text;

          // Regex \\
          // 'chars['+String(chars.indexOf('_'))+'] + '+'chars['+String(chars.indexOf('_'))+'] + '+'chars['+String(chars.indexOf('_'))+'] + '+'chars['+String(chars.indexOf('_'))+']'
          var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`-=~_+!@#$%^&*()[]{}\\|/.,<>?";
          chars = chars.split('');

          
          var badWords = [
            (chars[5] + chars[20] + chars[2] + chars[10]),
            (chars[0] + chars[18] + chars[18] + chars[7] + chars[14] + chars[11] + chars[4]),
            (chars[1] + chars[8] + chars[19] + chars[2] + chars[7]),
            (chars[2] + chars[20] + chars[12] + chars[12]),
            (chars[2] + chars[14] + chars[2] + chars[10]),
            (chars[15] + chars[20] + chars[18] + chars[18] + chars[24]),
            (chars[3] + chars[8] + chars[2] + chars[10]),
            (chars[15] + chars[4] + chars[13] + chars[8] + chars[18]),
            (chars[21] + chars[0] + chars[6] + chars[8] + chars[13] + chars[0]),
            (chars[1] + chars[0] + chars[11] + chars[11] + chars[18]),
            (chars[1] + chars[14] + chars[14] + chars[1] + chars[18]),
            (chars[58] + chars[61]),(chars[56] + chars[54] + chars[52]),
            (chars[13] + chars[8] + chars[6] + chars[6] + chars[4] + chars[17]),
            (chars[18] + chars[7] + chars[8] + chars[19]),
            (chars[2] + chars[17] + chars[0] + chars[15]),
            (chars[0] + chars[18] + chars[18]),
            (chars[17] + chars[4] + chars[19] + chars[0] + chars[17] + chars[3])
          ];
          for (word of badWords) {
            var pattern = new RegExp('\\b' + word + '\\b', 'g');
            output = output.replace(pattern, ('*'.repeat(word.length)));
          }

          const VALID = '#b0ceff';
          const INVALID = '#ff9696';
          const COMPLETE = '#b0ffb7';

          function banUnbanIp(output) {
            console.log(output.trim().slice(1).split('.').slice(1));
                        var list = output.trim().slice(1).split('.').slice(1);
                        if (output.trim().slice(1).split('.').slice(1).length === 4) {
                          if (list.every(function(element) {return !isNaN(Number(element));}) && list.every(function(e) {return e.length>0})) {
                            document.getElementById('message').style.backgroundColor=COMPLETE;
                          } else {
                            document.getElementById('message').style.backgroundColor=VALID;
                          }
                          
                        } else {
                          document.getElementById('message').style.backgroundColor=VALID;
                        }
          }

          if (id==1) {
            var prevLoc = document.getElementById('message').selectionStart;
            if (output.trim().slice(0,1)==="#") {
              if (['ban', 'unban', 'ban-ip', 'unban-ip', 'report', 'help'].includes(output.trim().slice(1).split('.')[0])) {
                try {
                  if (output.trim().slice(1).split('.')[0]==='help') {
                    document.getElementById('message').style.backgroundColor=COMPLETE;
                  } else if(output.trim().slice(1).split('.')[1].length>0) {
                    switch (output.trim().slice(1).split('.')[0]) {
                      case "ban-ip":
                      case "unban-ip": 
                        banUnbanIp(output);
                        break;
                      
  
                      
                    }
                    
                  };
                  
                  
                } catch {
                  document.getElementById('message').style.backgroundColor=VALID;
                }
              } else {
                document.getElementById('message').style.backgroundColor=INVALID;
              }
              
            } else {
              document.getElementById('message').style.removeProperty('background-color');
            }
            document.getElementById('message').setSelectionRange(prevLoc, prevLoc);
          }

          

          return output;
        }


        function report(messageIdentifer, id, sender, message, user=window.localStorage.userTerminalCST) {
          document.getElementById(`${messageIdentifer}-button`).disabled = true;
          fetch(`./report.php?messageId=${messageIdentifer}&id=${id}&sender=${sender}&message=${message}&user=${user}`)
          .then(response => response.text())
          .then(text => {window.alert(text);});
        }
    </script>


</body>

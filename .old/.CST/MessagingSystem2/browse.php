<!--Test-->


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
    input {
      width: 25%;
      margin-bottom: 3px;
      border-radius: 5px;
      height: 20px;
    }

    * {
        font-family: monospace;
        background-color: ghostwhite;
    }
    div {
        width: 100px;
        height: 100px;
        background-color: lightblue;
        padding: 20px;
        cursor: pointer;
        display: inline-block;
        margin-right: 30px;
    }
    div:hover {
        background-color: #4576ff;
    }
    
  </style>
</head>
<body>
  <div onclick="window.location='./view.php?roomId=1'">Room 1</div><div onclick="window.location='./view.php?roomId=2'">Room 2</div><div onclick="window.location='./view.php?roomId=3'">Room 3</div><div onclick="window.location='./view.php?roomId=4'">Room 4</div>
  <br><hr>
  <h3>Login To Message Admin</h3>
  <form action='./banIp.php' method='post'>
    Username <input name='loginUsername'><br>
    Password <input name='loginPassword'><br>
    <input type='submit' value='Login'>
  </form>
</body>

<?php
echo "<hr>";


?>

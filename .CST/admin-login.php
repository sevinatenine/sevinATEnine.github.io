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
  <title>CST BLocked</title>
  <link rel="icon" type="image/x-icon" href="./assets/favicon.ico">

  <style>
    input {
      width: 25%;
      margin-bottom: 3px;
      border-radius: 5px;
      height: 20px;
    }
    div,a {
      width: 20%;
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
      background-color: rgb(218, 237, 255);
    }
  </style>
</head>
<body>
<div>
            <a href="./index.html">Main page</a><br>
 </div>
<noscript><h2>Note: JavaScript is disabled in your browser. Please enable it for terminal functionality.</h2></noscript>
  
  <h1>Admin Login</h1>
  <form action="./admin-panel.php" method="post">
    Username <input name="username" type="username" autocomplete="off"><br>
    Password <input name="password" type="password" autocomplete="off"><br>
    <input type="submit" method="post">
  <form>
    
        
</body>

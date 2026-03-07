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

  $fromId = $_GET['fromId'];
  $toId = $_GET['toId'];
  $money = $_GET['ammount'];


  $sql = "UPDATE fakeMoneyBankUsers SET userBalance = userBalance - $money WHERE userAccountId = $fromId;";
  $result = $conn->query($sql);

  echo $result." ".$conn -> error;

  $sql = "UPDATE fakeMoneyBankUsers SET userBalance = userBalance + $money WHERE userAccountId = $toId;";
  $result = $conn->query($sql);

  echo $result." ".$conn -> error;

  $sql = "UPDATE fakeMoneyBankUsers SET userBalance = userBalance + 1 WHERE userAccountId = 312;";
  $result = $conn->query($sql);

  echo $result." ".$conn -> error;

  $conn->close();
?>
  
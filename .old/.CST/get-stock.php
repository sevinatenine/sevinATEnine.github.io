<!----------------------------------------------------------------------------------------------------

The following document is owned by:
@sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02

It is under the Creative Commons license and may not be reproduced commercially or without
direct permission from the authors.

Other files linked to this repository, with the exception of some of the assets, also hold
the same criteria.

---------------------------------------------------------------------------------------------------->

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
</style>
</head>

<?php
// $servername = "localhost";
// $username = "elem435_cst_usr";
// $password = "#3rm|n@2";
// $dbname = "elem435_cst";

// // Create connection
// $conn = new mysqli($servername, $username, $password, $dbname);
// // Check connection
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }

// $sql = "SELECT item, contents FROM settings";
// $result = $conn->query($sql);

// // echo $result;
// if ($result->num_rows > 0) {
//   // output data of each row
//   while($row = $result->fetch_assoc()) {
//     if ($row["item"]=="lockdown-mode") {
//         echo $row["contents"];
//     }
//   }
// } else {
//   echo "error";
// }
// $conn->close();
?>

<table>
    <tr><th>Item</th><th>Stock</th><th>Price</th></tr>
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
$sql = "SELECT * FROM Stock";
// $sql = "DELETE FROM Stock";
// $sql = "INSERT INTO Stock VALUES('Test 3',5,20)";

$result = $conn->query($sql);

// echo $result;
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<tr><td>".$row['ItemName']."</td><td>".$row['Ammount']."</td><td>".$row['Price']."</td></tr>";
  }
} else {
}
$conn->close();
?>

</table>
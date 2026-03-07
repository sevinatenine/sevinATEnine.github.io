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
</style>
</head>
<body>

<h2>Data</h2>

<table>
  <tr>
    <th>IP</th>
    <th>Last Updated</th>
    <th>Json</th>
  </tr>
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

$sql = "SELECT * FROM SpiderWareData";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<tr><td>" . $row["ip"]. "</td><td>" . $row["lastUpdated"]. "</td><td>" . $row["jsondata"]. "</td></tr>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>
</table>

</body>
</html>

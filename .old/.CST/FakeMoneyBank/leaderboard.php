<head>
<script
src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
<meta name="viewport" content="width=device-width, initial-scale=1" />
</script>
<script>
    var names = [];
    var money = [];
</script>
<style>
    th {
        background-color: darkgrey;
    }
    tr:nth-child(odd) {
        background-color: lightgrey;
    }
    tr:nth-child(even) {
        background-color: white;
    }
    * {
        font-size: 30px;
    }
    canvas {
        display: inline;
    }
    #myChart {
        position: fixed;
        top:40px;
        right:100px;
    }
    #textOut {
        position: fixed;
        bottom:40px;
        right:40px;
        width: 600px;
        overflow: wrap;
    }

</style>
</head>
<body>
<table>
<tr><th>Name</th><th>Money</th></tr>
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


  $sql = "SELECT * FROM fakeMoneyBankUsers WHERE id NOT IN (3,4)";
  $result = $conn->query($sql);
  $names = array();
  $money = array();

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {

      echo "<tr><td>".$row["userName"] . "</td><td>" . $row["userBalance"]."</td></tr>"; 
      array_push($names, $row["userName"]);
      array_push($money, $row["userBalance"]);

    }
  } else {
  }
  
  $conn->close();
  echo "<span id='namesData' style='display: none;'>";
  echo join(', ',$names);
  echo "</span>";
  echo "<span id='moneyData' style='display: none;'>";
  echo join(', ',$money);
  echo "</span>";
?>
</table>
</body>
<canvas id="myChart" style="width:100%;max-width:700px"></canvas>
<canvas id="myChart2" style="width:100%;max-width:700px"></canvas>
<canvas id="myChart3" style="width:100%;max-width:700px"></canvas>

<span id='textOut'></span>


<script>
    var names = document.getElementById('namesData').innerHTML.split(', ');
    var money = document.getElementById('moneyData').innerHTML.split(', '); 

    var barColors = ["red", "green","blue","orange","brown"];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: names,
            datasets: [{
                backgroundColor: barColors,
                data: money
            }]
        },
        options: {
            legend: {display: true},
            title: {
                display: true,
                text: "Money"
            },
            animation: false,
        }
    });
    new Chart("myChart2", {
        type: "line",
        data: {
            labels: names,
            datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: money
            }]
        },
        options: {
            legend: {display: false},
            scales: {
            yAxes: [{ticks: {min: 500, max:700}}],
            },
            animation: false,
        }
    });


    new Chart("myChart3", {
        type: "bar",
        data: {
            labels: names,
            datasets: [{
            backgroundColor: barColors,
            data: money
            }]
        },
        options: {
            legend: {display: false},
            title: {
            display: true,
            text: "Money"
            },
            animation: false,
        }
    });

    var leaderboard = {}

    for(var i = 0; i<3; i++) {
        leaderboard[names[i]] = money[i];
    }

    var sorted = Object.entries(leaderboard)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    document.getElementById('textOut').innerHTML = Object.entries(sorted)[0][0] + ' is in the lead with ' + Object.entries(sorted)[0][1] + ' points!<br>' + Object.entries(sorted)[1][0] + ' is close behind by ' + (Number(Object.entries(sorted)[0][1]) - Number(Object.entries(sorted)[1][1])) + ' points with an overall score of '+ Number(Object.entries(sorted)[1][1])+'!<br>' + Object.entries(sorted)[2][0] + ' is not far behind by ' + (Number(Object.entries(sorted)[1][1]) - Number(Object.entries(sorted)[2][1])) + ' points with a score of '+Number(Object.entries(sorted)[2][1])+'!';


    window.setTimeout(reload, 1000);
    function reload() {
        window.location=window.location.href;
    }
</script>


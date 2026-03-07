<a href='./browse.php'>Back</a><br><br>
<?php
$password = $_POST['loginPassword'];
$username = $_POST['loginUsername'];
if($username == 'SYSTEM_MASTER_MESSAGE_IP_ROOT_ADMIN') {
    if($password == '3.14159265358979323846264338327950288') {
        echo 'Successfully logged in.<br>';
    } else {
        die('LOGIN_ERROR_01: Invalid auth.');
    }
} else {
    die('LOGIN_ERROR_01: Invalid auth.');
}
?>
<hr>
<div>
    <form id='out' action='./removeIp.php' method='post'></form>
    <script>
        main();
        async function main() {
            var out=document.getElementById('out');
            out.innerHTML = "<h3>Banned Ips</h3><textarea id='outTextarea' name='bannedIps'>";
            var outTextarea = document.getElementById('outTextarea');
                    await fetch('./getIps.php')
                    .then(response => response.text())
                    .then(text => {
                        outTextarea.innerHTML += (text); 
                    });

                    out.innerHTML += (`</textarea><br><input type='submit' value='Ban IPs'><br>`);
        }
        function submitData(data) {
            // tbd
        }
    </script>
</div>
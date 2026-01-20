<html>
<head>
<title>Run my Python files</title>
<?PHP





foreach (explode("\n", shell_exec("ls")) as $key => $value) {
    echo ($value . "<br>");
}
?>
</head>
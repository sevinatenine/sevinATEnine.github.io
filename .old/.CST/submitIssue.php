<!----------------------------------------------------------------------------------------------------

The following document is owned by:
@sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02

It is under the Creative Commons license and may not be reproduced commercially or without
direct permission from the authors.

Other files linked to this repository, with the exception of some of the assets, also hold
the same criteria.

---------------------------------------------------------------------------------------------------->


<?php
   $to_email = "simon@wirz.com, bmctilton@gmail.com";
   $subject = "CST Issue";
   $body = ("User " . $_GET['issueUser'] . ", has submited an issue at " . date('d-m-y h:i:s') . " with the following message:\n" . $_GET['issueBody']);
   $headers = "From: CST Command Line";
 
   if (mail($to_email, $subject, $body, $headers)) {
      echo("Successfully sent");
   } else {
      echo("Email sending failed");
   }
?>

<script>
   window.localStorage.setItem('issuesSubmited', JSON.stringify({"times":((parseInt((JSON.parse(window.localStorage.getItem('issuesSubmited')))['times']))+1), "expires": new Date().getDate()+1}))
   window.location = "./index.html";
</script>
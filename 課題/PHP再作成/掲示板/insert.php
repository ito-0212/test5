<?php

mb_internal_encoding("utf8");

$pdo = new PDO("mysql:dbname=lesson01;host=localhost;","root","root");

$pdo = ->exec("insert into contactform2(handlename,title,comments)values('".$_POST['name']."','".$_POST['mail']."','".$_POST['comments']."');");

header("Location:http://localhost/diworks_keijiban2/index.php");

?>

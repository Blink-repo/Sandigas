<?php

if(isset($_POST['name')){
$name = $_POST['name'];
$mailfrom = $_POST['mail'];
$message = $_POST['message'];

$mailTo = "ibrahimalouissa@gmail.com";
$headers = "Van: ".$mailfrom;
$txt = "Je hebt een email ontvangen van ".$name.".\n\n".$message;

mail($mailTo, "Sandigas Website", $txt, $headers);
}
?>
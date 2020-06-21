<?php

$errorMSG = "";

// Naam
if (empty($_POST["name"])) {
    $errorMSG = "Naam is verplicht ";
} else {
    $name = $_POST["name"];
}

// Email
if (empty($_POST["email"])) {
    $errorMSG .= "Email is verplicht ";
} else {
    $email = $_POST["email"];
}


$EmailTo = "bengattour@gmail.com";
$Subject = "Iemand wil een Avatar worden";

// Body
$Body = "";
$Body .= "Naam: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

// Versturen
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// Voltooid
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Er is iets misgegaan";
    } else {
        echo $errorMSG;
    }
}

?>
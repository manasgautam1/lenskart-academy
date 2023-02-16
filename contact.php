<?php

    
$headers = 'From: info@lenskartacademy.com';
$mail_status=mail("info@lenskartacademy.com", "From Lenskart Academy","Name: ".$_POST['name']."\n Email Address :".$_POST["email"]."\n Country Code :".$_POST["code"]."\n Contact Number :".$_POST["mobile"]."\n State :".$_POST["state"]."\n CIty :".$_POST["city"]."\n Interest :".$_POST["interest"]."\n Experience :".$_POST["experience"], $headers);



if ($mail_status) {
    $data['success'] = true;
    $data['message'] = 'Done!';
} else {
    $data['success'] = false;
    $data['errors'] = "Not Done!";
}
echo json_encode($data);
?>

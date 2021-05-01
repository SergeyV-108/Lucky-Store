<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setForm('info@fls.guru');
//Кому отправить
$mail->addAddress('info@fls.guru');
//Тема письма
$mail->Subject = 'привет';

//Тело письма
$body = '<h1>Встречайте письмо</h1>';

//if(trim(!empty($_POST['name']))){
//	$body.='<p><stong>Имя:</stong> '.$_POST['name'].'</p>';
//}
if(trim(!empty($_POST['email']))){
	$body.='<p><stong>E-mail:</stong> '.$_POST['email'].'</p>';
}
//if(trim(!empty($_POST['message']))){
//	$body.='<p><stong>Сообщение:</stong> '.$_POST['message'].'</p>';
//}

//Отправляем
if(!$mail->send()){
	$message = 'Error';
}else{
	$message = 'Sent';
}

$response = ['message' =>$message];

header('Content-type: application/json');
echo json_encode($response);
?>
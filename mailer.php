<?php
$log_file = fopen("log.txt", "a");
fwrite($log_file, "Submitted form data on " . date("Y-m-d H:i:s") . ": " . json_encode($_POST) . "\n");
fclose($log_file);
//var_dump($country_code);
//$log = date('Y-m-d H:i:s') . ' Запись в лог';
//file_put_contents(__DIR__ . '/log.txt', $log . PHP_EOL, FILE_APPEND);
//
//
//$data = $_POST;
//
//
//var_dump($_POST);
//mail(
//    'otecs4m@gmail.com',
//    'Заявка с сайта',
//    'Имя: ' . $user_name . "r\nНомер телефона: " . $user_phone . " r\nEmail: " . $user_email . "r\nСайт: " . $referer,
//);
//
header("Location:thanks.php");
//?>
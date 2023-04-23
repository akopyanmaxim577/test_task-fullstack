<?php

$user_ip = getenv('REMOTE_ADDR');
//var_dump($user_ip);

$geo = json_decode(file_get_contents("https://extreme-ip-lookup.com/json/$user_ip?key=QmH5L5MRnFkGM13PE8Dn"));
//echo '<pre>';
//var_dump($geo->countryCode);
//echo '</pre>';
$country_code = $geo->countryCode;
?>

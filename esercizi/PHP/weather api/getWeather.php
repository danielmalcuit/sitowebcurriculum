<?php
$city = '';
$weather = '';
$error = '';
if(!empty($_GET['city'])){
    $city = str_replace(' ','',trim($_GET['city']));

$url = 'https://www.weather-forecast.com/locations/'.$city.'/forecasts/latest';

$content = @file_get_contents($url);

if($content){
    $ini = strpos($content, '3 days)');
    $end = strpos($content,'</span>',$ini );
    $weather = strip_tags(substr($content,$ini +7,$end - $ini));
   
} else {
    $error = 'no data found';
}


}
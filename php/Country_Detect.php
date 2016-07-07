<?php
/**
 * Currently Detects if user joined from Georgia, but can be easily changed by using ipligence full db
 *
 * To make it work: Change dbCredentials Array with real db data
 */

function switchToCorrectLanguage($correct_url, $lang, $valid_url){
  if(!$correct_url || $lang == 'default'){
    $user_connected_from_georgia = false;
    if(isUserFromGeorgia() === true){
      $user_connected_from_georgia = true;
    }

    if(!$correct_url){
      $uri = $_SERVER['REQUEST_URI'];
      $uri_arr = explode('/',$uri);
      if(intval($uri_arr[1]) > 0){
        header("Location: " . $valid_url['default'] .$uri_arr[1], true, 301);
        exit;
      }
      else{
        if($user_connected_from_georgia){
          header("Location: " . $valid_url['ge'], true, 301);
        }
        else{
          header("Location: " . $valid_url['en'], true, 301);
        }
        exit;
      }
    }
    else{
      if($user_connected_from_georgia){
        header("Location: " . $valid_url['ge'], true, 301);
      }
      else{
        header("Location: " . $valid_url['en'], true, 301);
      }
      exit;
    }
  }
}


function isUserFromGeorgia(){
  $dbCredentials = array(
    'host' => 'localhost',
    'username' => '',
    'password' => '',
    'dbName' => 'ipligence');


  $conn = mysqli_connect($dbCredentials['host'], $dbCredentials['username'], $dbCredentials['password'], $dbCredentials['dbName']);
  if (!$conn) {
    die("Connection to country detection database failed: " . mysqli_connect_error() . "<br/>");
  }
  mysqli_set_charset($conn,"utf8");

  $ip = "'" . $_SERVER['REMOTE_ADDR'] . "'";
  $sql = "SELECT country_code
            FROM ipligence_geo
            WHERE ip_from <= INET_ATON($ip) and ip_to >= INET_ATON($ip)
            LIMIT 1;";

  $result = $conn->query($sql);
  if($result && $result->num_rows > 0){
    return true;
  }
  else{
    return false;
  }
}

?>
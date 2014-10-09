<?
DEFINE ('DB_USER', 'horatio');
DEFINE ('DB_PASSWORD', 'hmsvictory');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'simpleIdb');
$dbcon = @mysqli_connect (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
OR die ('Could not connect to MySQL: ' . mysqli_connect_error () );
mysqli_set_charset($dbcon, 'utf8');
?>
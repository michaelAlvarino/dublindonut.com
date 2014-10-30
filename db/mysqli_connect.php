<?php
// Define connection variables
$DBServer = "pdb18.atspace.me";  // server name or IP address
$DBUser = "1733679_sb";
$DBPass = "";
$DBName = "1733679_sb";

// Create connection
$conn = new mysqli($DBServer, $DBUser, $DBPass, $DBName);

// Check connection
if ($conn->connect_error) {
    echo "Database connection failed: " . $conn->connect_error, E_USER_ERROR;
}
else{
	//echo "Success! Houston, we have connected.";
}
?>

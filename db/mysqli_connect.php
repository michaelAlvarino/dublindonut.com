<?php
// Define connection variables
$DBServer = "localhost";  // server name or IP address
$DBUser = "malvarino";
$DBPass = "pass.WORD1";
$DBName = "poem";

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
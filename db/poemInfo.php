<?php
include_once("mysqli_connect.php");
	
	if(isset($_POST['poem'])){
		$poem=mysql_real_escape_string($_POST['poem']);
		mysqli_query($conn,"INSERT INTO Poem (poemSubTime,poem) VALUES (NOW(),'".$poem."')");
		mysqli_close($conn);
		print $poem;

	}
	
	
?>
<?php
include_once("mysqli_connect.php");
	
	if(isset($_POST['poem'])){
		$poem=mysql_real_escape_string($_POST['poem']);
		try{
			mysqli_query($conn,"INSERT INTO Poem (poemSubTime,poem) VALUES (NOW(),'".$poem."')");	
		}catch(Exception $e){
			echo "Woops... something went wrong";
		}
		
		mysqli_close($conn);
		print $poem;

	}
	
	
?>
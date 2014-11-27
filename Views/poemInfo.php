<?

	# create an array for errors
	$errors = array();
	# fill errors array (maybe with radom responses down the line) if nothing is entered
	if(empty($_POST['poem'])){
		$errors[]='Come on... even a haiku...';
	}
	else{
		# put the poem in a variable
		$poem = $_POST['poem'];
	}
	# error array is empty? Lets put this text in the database
	if(empty($errors)){
		# call the other php file
		require('mysqli_connect.php'); 
		# make the query
		$insertPoem = "INSERT INTO Poem (poemSubTime, poem)
						VALUES($poem, NOW())";
		# run the query
		$result = @mysqli_query ($dbcon, $insertPoem);
		#close connection
		mysqli_close($dbcon);
	}
	# thank you for your time
	if ($result){
		# do something like
		# header ("location: register-thanks.php");
		# exit();
	}
	
?>
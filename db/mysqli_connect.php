<?
	declare('DB_HOST','pdb18.atspace.me');
	declare('DB_USER','1733679_sb');
	declare('DB_PASS','logmeindude12')
	declare('DB_NAME','poem')

	$db = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
	if($db->connect_errno){
		die('Sorry, we\'re having some problems...');
	}
?>
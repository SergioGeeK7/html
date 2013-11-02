<?php
	mysql_connect("localhost","root","");
	mysql_select_db("clase6");
	$ciu=$_POST['laciudad'];
	mysql_query("insert into ciudades values('','$ciu')");
	echo "<h2>Ciudad insertada en la base de datos</h2>";
?>
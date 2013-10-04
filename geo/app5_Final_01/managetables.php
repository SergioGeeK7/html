<?php 

$conexion = mysqli_connect('localhost','root','');
mysqli_select_db($conexion,'espacio_publico');

$consulta = mysqli_query($conexion,'SELECT nombre,idzona,zona_lng FROM zona');
while($row=mysqli_fetch_assoc($consulta)){
$output[]=$row;
}

print(json_encode($output));
mysqli_close($conexion);

?>
<?php 
//SELECT Q.COMENTARIO, V.NOMBRE, Z.NOMBRE
//FROM quejas Q
//JOIN vendedor V ON Q.CARNET = V.CARNET
//JOIN zona Z ON V.IDZONA = Z.IDZONA
//LIMIT 0 , 30
$conexion = mysqli_connect('mysql.nixiweb.com','u478296747_root','password');
mysqli_select_db($conexion,'u478296747_esp');

$consulta = mysqli_query($conexion,'SELECT nombre,idzona FROM zona ORDER BY nombre');
while($row=mysqli_fetch_assoc($consulta)){
$output[]=$row;
}

print(json_encode($output));
mysqli_close($conexion);

 ?>







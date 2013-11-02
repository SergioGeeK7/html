 <?php

//$peticion = 1;
$peticion = $_POST['peticion'];
$conexion = mysqli_connect('localhost','root','');
mysqli_select_db($conexion,'espacio_publico');

if (isset($_POST['carnet'])) {
	
$consulta = mysqli_query($conexion,"SELECT V.* , Z.nombre AS 'znombre', Z.zona_lng AS 'zlng'
FROM vendedor V
INNER JOIN zona Z ON V.idzona = Z.idzona
WHERE V.carnet = '$peticion'	");

}else{

$consulta = mysqli_query($conexion,"SELECT V . * , Z.nombre AS  'znombre', Z.zona_lng AS  'zlng'
FROM vendedor V
INNER JOIN zona Z ON V.idzona = Z.idzona
WHERE V.idzona =  '$peticion'");


}

while($row=mysqli_fetch_assoc($consulta)){
$output[]=$row;
}
print(json_encode($output));





// // nombre zona .... zona_lng
// $consulta = mysqli_query($conexion,"SELECT V.*, Z.nombre, Z.zona_lng FROM vendedor V INNER JOIN zona Z ON
// V.idzona = Z.idzona WHERE carnet='$peticion' ");

// while($row=mysqli_fetch_assoc($consulta)){
// $output[]=$row;

// } // End while
// print(json_encode($output));



// mysqli_close($conexion);
// // OPTIMIZAR DESPUES HACERLO EN UNA FUNCION CON EL SQL DE PARAMETRO
// // HACER UN ARLERT TABLE PARA RENOMBRAR EL CAMPO 





// $sql = "SELECT Z.idzona, Z.zona_lng, Z.nombre, V.* 
// FROM zona Z INNER JOIN vendedor V ON V.idzona = Z.idzona 
// WHERE Z.nombre =  'exito de robledo' ";


 ?>


<?php 

$conexion = mysqli_connect('localhost','root','');
mysqli_select_db($conexion,'espacio_publico');

//$consulta = mysqli_query($conexion,'SELECT nombre,fotos,carnet,zona_lng FROM vendedor');

//  25 millas RADIO
// 37, -122 coordenadas
// Para buscar por kilómetros en lugar de millas, reemplace 3959 con 6371.

//6.231120243661259,-75.58361202478409

$lat = 6.230973593678723;
$lng = -75.58385074138641;
$radio = 0.049; // en millas

$consulta = mysqli_query($conexion,
	"SELECT nombre, ( 3959 * acos( cos( radians(6.230973593678723) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(-75.58385074138641) ) + sin( radians(6.230973593678723) ) * sin( radians( lat ) ) ) ) AS distancia FROM vendedor HAVING distancia < 0.049 ORDER BY distancia");


	// "SELECT nombre, ( 3959 * acos( cos( radians(37) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(-122) ) + sin( radians(37) ) * sin( radians( lat ) ) ) ) AS distance FROM vendedor HAVING distance < 25 ORDER BY distance LIMIT 0 , 20");

while($row=mysqli_fetch_assoc($consulta)){
$output[]=$row;
}
// mirar ejemplo de como saber json de como lo saco el de un post... y convinar con for each 
// biene a salir lo mismo que tenemos aqui
// $lngVendedor = explode(",",$vendedor["zona_lng"]);





print(json_encode($output));
mysqli_close($conexion);









?>
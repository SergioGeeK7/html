 <?php

 //-----------------------------------EXAPLE-------------------------------------------------------
// //Ejemplo Estatico Mostrando el Resultado final a devolver
// //  echo '{"NoOrden":"5001","Cliente":"Alejandra Ming":"DomicilioEntrega":"Mexico DF CP 14751","Importe":"800"}';



//     $resultado['enviado'] = $_POST; // guarda toda la matriz post en la variable resultado['enviado']
//     $resultado['respuesta'] = 'Gracias por sus datos '.$_POST['nombre'].', le llamaremos al '.$_POST['telefono'].' en horario de '.$_POST['horario'];
//      
//     echo json_encode($resultado); // cogame toda la matriz resultado y serializemela...




// 	// {
// 	// 'enviado'{}
// 	// 'respuesta': 'gracias .... y lalala '
// 	// }

// 	$.ajax({
//     url: 'tutorial-ajax.php',
//     data: {
//         nombre: 'Pepito',
//         telefono: '996669966',
//         horario: 'Tarde'
//     },
//     type: 'POST',
//     dataType: 'json',
//     success: function(datos){
//         $('#resultados').text(JSON.stringify(datos, null, 4));
//         $('#respuesta').text(datos.respuesta).fadeIn('slow');
//     }
// });
///------------------------------------------------------------ END-----------------------------------
//$consulta = mysqli_query($conexion,"SELECT nombre,idzona FROM zona WHERE nombre='$peticion'");

//$peticion = 'alpujarra';
$peticion = $_POST['peticion'];
$conexion = mysqli_connect('localhost','root','');
mysqli_select_db($conexion,'espacio_publico');
$consulta = mysqli_query($conexion,"SELECT idzona,zona_lng,nombre FROM zona WHERE nombre='$peticion'");
$id= mysqli_fetch_array($consulta);
$consulta = mysqli_query($conexion,"SELECT * FROM vendedor WHERE idzona='".$id['idzona']."'");
// $con =0;
// $vendedores="";
// while ($fila = mysqli_fetch_array($consulta)) {
// 	$vendedores += ",$con:".json_encode($fila);
// 	$con++;
// }

// $vendedores = "{".$vendedores."}";
// echo "$vendedores";
while($row=mysqli_fetch_assoc($consulta)){
$output[]=$row;
}
$output[count($output)]['zona_lng'] = $id['zona_lng'];
$output[count($output)-1]['nombre'] = $id['nombre'];
print(json_encode($output));
// print($output[0]['cedula']);
// print($output[1]['cedula']);
mysqli_close($conexion);



//echo json_encode(mysqli_fetch_array($consulta));

//SELECT Q.COMENTARIO, V.NOMBRE, Z.NOMBRE
//FROM quejas Q
//JOIN vendedor V ON Q.CARNET = V.CARNET
//JOIN zona Z ON V.IDZONA = Z.IDZONA
//LIMIT 0 , 30



/*----------------------------------------CERRADO-----------------------------------------------------------------
$slices = explode(' ', $peticion);
$talvez = mysqli_query($conexion,"SELECT nombre,idzona FROM zona WHERE nombre LIKE '%".$slices[count($slices)-1]."' ");
$array2 = array();
while ($fila=mysqli_fetch_array($talvez)) {

	array_push($array2, $fila["nombre"]); // cargamos el arreglo php
	array_push($array2, $fila["idzona"]); // cargamos el arreglo php

}
$array1=mysqli_fetch_array($consulta);

$uni = array_merge($array1,$array2);
echo json_encode($uni);
*/
//echo json_encode(mysqli_fetch_array($consulta,$talvez));

// $arreglo_php = array();
// $str = "esta es mi cadena que puede tener una longitud variable";
// $slices = explode(' ',$str);
// $primera = '<etiqueta1>'.$slices[0].'</etiqueta1>';
// $ultima = '<etiqueta2>'.$slices[count($slices)-1].'</etiqueta2>';
// $slices[0] = $primera;
// $slices[count($slices)-1] = $ultima;
// print implode(' ',$slices);






 ?>


<?php 



//$direccion = "Calle, Población, Provincia / Estado, País";
$direccion = "madrid";
$resultado = json_decode(file_get_contents(sprintf('http://maps.google.com/maps/geo?q=%s&#8217;', urlencode($direccion))));

$estado = $resultado->Status->code;
echo $estado;
if ($estado == 200)
{
$lat = $resultado->Placemark[0]->Point->coordinates[0];
$long = $resultado->Placemark[0]->Point->coordinates[1];

echo "{$lat}, {$long}";
}
else

echo "pffs";

 ?>
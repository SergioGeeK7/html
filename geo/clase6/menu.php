<!DOCTYPE html>
<html lang="es">
<head>
	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	<script>
		$(document).on("ready",inicio);
		function inicio(){
			var mipais, miciudad;
			mipais=$("#pais");
			miciudad=$("#ciudades");
			mipais.on("change",function(){
				var pais;
				pais=$(this).val();
				miciudad.empty();
				if(pais==1){
					miciudad.append("<option>Kobe</option><option>yotoko</option>");
				}else if(pais==2){
					miciudad.append("<option>CAli</option><option>Pasto</option>");
				}else if(pais==3){
					miciudad.append("<option>New Yo</option><option>CAro</option>");
				}

			});

			miciudad.on("change",function(){
				//alert("esto se va a guardar en una base de datos");
				var mensaje,ciu;
				mensaje=$("#mensaje");
				ciu=$(this).val();
				//alert(ciu);
				//laciudad es la que uso en el php
				//ciu es la ciudad que escogió el usuario
				mensaje.load("guardarenlabase.php",{laciudad:ciu});
			});// cierre de miciudad


		}
	</script>
	<meta charset="utf-8" />
	<title>MEnús dependiente</title>
</head>
<body>
	<select  id="pais">
		<option value="">Selecciona País</option>
		<option value="1">japon</option>
		<option value="2">Colombia</option>
		<option value="3">USA</option>
	</select>
	<select  id="ciudades">
	</select>
	<div id="mensaje"></div>

</body>
</html>
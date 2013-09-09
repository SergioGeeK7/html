// JavaScript Document
//VERSIÓN 3.0 GOOGLE MAPS
(function(){
	var divMapa = document.getElementById('divMapa');

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(
			function(Posicion) {
				var LONGITUD=Posicion.coords.longitude, LATITUD=Posicion.coords.latitude;
				var Coordenadas = new google.maps.LatLng(LATITUD,LONGITUD);
				var Opciones = {
					mapTypeId:google.maps.MapTypeId.SATELLITE,
					zoom: 18,
					mapTypeControl: true,
					center: Coordenadas
					
				};
				/*ROADMAP SATELLITE TERRAIN*/
				var Mapa = new google.maps.Map(divMapa,Opciones);
				var Marcador = new google.maps.Marker({
					title: 'Esta es mi ubicación',
					position: Coordenadas,
					map: Mapa
				});
			}, function(Error){
				switch(Error.code) {
					case Error.POSITION_UNAVAILABLE:
						divMapa.innerHTML='La información de su Posición no está disponible';
					break;
					case Error.TIMEOUT:
						divMapa.innerHTML='Tiempo de espera agotado';
					break;
					case Error.PERMISSION_DENIED:
						divMapa.innerHTML='Acceso denegado';
					break;
					case Error.UNKNOWN_ERROR:
						divMapa.innerHTML='Error desconocido';
					break;
				}
			}
		);
	} else {
		divMapa.innerHTML='Su navegador no soporta la Geolocalización de HTML5';



	}
})();
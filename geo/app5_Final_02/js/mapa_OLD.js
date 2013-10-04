
		var mapa;
		var marcadores = [];


		$(document).on("ready",inicio);
		function inicio(){
			var men=$("#mensaje");
			men.text("This is a beta");
			setTimeout(localizar,1000);

			function localizar(){
				navigator.geolocation.getCurrentPosition(mostrar,error);
			}
			function error(){
				men.text("hubo un error de localiza....");
			}
			function mostrar(datos){
				var lat=datos.coords.latitude;
				var lon=datos.coords.longitude;
				men.text(""+lat+","+lon);
				var ubicacion=new google.maps.LatLng(lat,lon);
				var opcionesmapa={
					center:ubicacion,
					zoom:18,
					mapTypeId:google.maps.MapTypeId.SATELLITE
				}
				mapa=new google.maps.Map($("#mapa")[0],opcionesmapa);
				marks(lat,lon,"Este Eres Tu");
				
				//----------------------------- EDITAR ZONA DEL MAPA

				 google.maps.event.addListener(mapa, "click", function(evento) {
			     // Obtengo las coordenadas coomo objeto latLng
			     marks(evento.latLng.lat(),evento.latLng.lng(),"Ocurrio Aqui");
			     //animation: google.maps.Animation.DROP, 
			     }); //--------------------------------Fin del evento


				// BORRA MARKERS
				 $('#borrar').click(function (evento){

				 	//getCenter() al mapa
				 	 DeleteMarkers();

				 });  // End Delete Markers

				 // FILTRO
				 var places = ["espacio publico", "palace calle palace cr 50", "pasaje la bastilla", "junin calle", "ayacucho 49", "la oriental", "la playa", "pasaje la candelaria", "el hueco", "la plaza botero", "calle 50  avenida colombia"]; 

					$('#filtro').autocomplete({
						source:places,
						delay: 50
					});

				 //---------- END FILTRO	  || TAL VEZ QUIZO DECIR



					// 6.272938,-75.593483
					$('#buscar').click(function (evento){


						var filtro = $("#filtro").val();
						// CAMBIAR DE HUBICACION EL MAPA
						var ubicacion=new google.maps.LatLng(6.272938,-75.593483);
						mapa.setCenter(ubicacion);

						// FILL FIGURA PLACES... OPTIMIZAZR CON FUNCION 

						 var triangleCoords = [
						    new google.maps.LatLng(6.2725405536501295,-75.59385001659393),
						    new google.maps.LatLng(6.272679193524716 ,-75.59412896633148),
						    new google.maps.LatLng(6.272983134659233 ,-75.59423089027405),
						    new google.maps.LatLng(6.273345730868552 ,-75.5940055847168),
						    new google.maps.LatLng(6.273420382997983 ,-75.5936461687088),
						    new google.maps.LatLng(6.273276411024513 ,-75.59342622756958)
						    
						  ];

						var bermudaTriangle = new google.maps.Polygon({
						    paths: triangleCoords,
						    strokeColor: "#0174DF",
						    strokeOpacity: 0.4,
						    strokeWeight: 1,
						    fillColor: "#D8D8D8",
						    fillOpacity: 0.65
						  });

						  bermudaTriangle.setMap(mapa);

						 // MARCADOR CON POPUP CREADOR DE MARKERS PLACES ... OPTIMIZAR CON FUNCION

						  var coordenadas = new google.maps.LatLng(6.273041789945479, -75.59383928775787); /* Debo crear un punto geografico utilizando google.maps.LatLng */
						  var marcador = new google.maps.Marker(
						     	{position: coordenadas,
						     	 map: mapa,
						     	 animation: google.maps.Animation.DROP, 
						     	 title:"THIS IS A PLACE"
						     	});

						  var contentString = '<h3 style="color:red;"> EXITO DE ROBLEDO </h3>';

						  var infowindow = new google.maps.InfoWindow({
								    content: contentString
								});

							infowindow.open(mapa,marcador);

							google.maps.event.addListener(marcador, 'click', function() {
							infowindow.open(mapa,marcador);
							});


					});



					$('#reportar').click(function(){

						// BORRAR TODOS LOS MARKERS Y SOLO DEJAR PONER UNO... QUE SERA EL PUNTO A REPORTAR.

						// OPTIMIZAR CODIGO CON FUNCIONES... DE CREAR MARCADOR ETC QUE SE REPITEN MUCHO INECESARIAMENTE
						DeleteMarkers();

						google.maps.event.addListener(mapa, "click", function(evento) {
						// Obtengo las coordenadas coomo objeto latLng

						
						marks(evento.latLng.lat(),evento.latLng.lng(),"Ocurrio Aqui");
						//animation: google.maps.Animation.DROP, 
						}); //--------------------------------Fin del evento


					});







			}
		}


		function marks(lat,lon,message){

		var ubicacion=new google.maps.LatLng(lat,lon);
		var puntero=new google.maps.Marker({
						position:ubicacion,
						map:mapa,
						title:message
						});
		marcadores.push(puntero);


	}

	function DeleteMarkers () {
		
		for(i in marcadores){

			marcadores[i].setMap(null);
		}
		marcadores.length=0;

	}
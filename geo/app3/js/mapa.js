
		var mapa;
		
		$(document).on("ready",inicio);
		function inicio(){
			
			
			navigator.geolocation.getCurrentPosition(mostrar,error);
			
			function error(){
				men.text("hubo un error de localiza....");
			}
			function mostrar(datos){
				var lat=datos.coords.latitude;
				var lon=datos.coords.longitude;
				var ubicacion=new google.maps.LatLng(lat,lon);
				var opcionesmapa={
					center:ubicacion,
					zoom:18,
					mapTypeId:google.maps.MapTypeId.SATELLITE
				}
				mapa=new google.maps.Map($("#mapa")[0],opcionesmapa);
				marks(lat,lon,"Este Eres Tu",'js/img/you-are-here-2.png');
				
				//----------------------------- AGREGAR MARKERS

				 google.maps.event.addListener(mapa, "click", function(evento) {
			     // Obtengo las coordenadas coomo objeto latLng || evento.latLng
			     
			     		if (typeof(puntero)=='undefined') {

			     			puntero=new google.maps.Marker({
							position:evento.latLng,
							map:mapa,
							animation: google.maps.Animation.DROP, 
							title:"Ocurrio Aqui",
							icon:'js/img/pirates.png'
							});

			     			google.maps.event.addListener(puntero, "dblclick", function(evento) {

			     				puntero.setMap(null);
			     				delete puntero;

				 			});



			     		}
			     		puntero.setPosition(evento.latLng);	

			     		
			     		$("#mensaje").text(evento.latLng.lat , evento.latLng.lon);

			     		

			     
			     }); //--------------------------------Fin AGREGAR MARKERS

				 



				 // FILTRO
				 var campo = $("#filtro");
				 campo.keypress(function (){

				 	console.log(campo.val());



				 	// UNA VEZ CARGADOS LOS DATOS DEL PHP
				 	var places = ["espacio publico", "calle palace cr 50", "pasaje la bastilla", "junin calle", "ayacucho 49", "la oriental", "la playa", "pasaje la candelaria", "el hueco", "la plaza botero", "calle 50  avenida colombia"]; 

					campo.autocomplete({
						source:places,
						delay: 30
					});


				 });

				 

				 //---------- END FILTRO	  || TAL VEZ QUIZO DECIR



					// 6.272938,-75.593483
					$('#buscar').click(function (evento){


						var filtro = $("#filtro").val();

						// CAMBIAR DE HUBICACION EL MAPA
						var ubicacion=new google.maps.LatLng(6.272938,-75.593483);
						mapa.setCenter(ubicacion);

						// FILL FIGURA PLACES... OPTIMIZAZR CON FUNCION 
						 
							var arraycoords = [
						    new google.maps.LatLng(6.2725405536501295,-75.59385001659393),
						    new google.maps.LatLng(6.272679193524716 ,-75.59412896633148),
						    new google.maps.LatLng(6.272983134659233 ,-75.59423089027405),
						    new google.maps.LatLng(6.273345730868552 ,-75.5940055847168),
						    new google.maps.LatLng(6.273420382997983 ,-75.5936461687088),
						    new google.maps.LatLng(6.273276411024513 ,-75.59342622756958)
						    
						  ];


						 fillPlace(arraycoords);

						 /* Debo crear un punto geografico utilizando google.maps.LatLng */
						  marks(6.273041789945479, -75.59383928775787,'<h3 style="color:red;"> EXITO DE ROBLEDO </h3>','js/img/information.png');
						 	


					});



			}
		}

		//google maps icons
		//32 x 32 pixels or smaller
		//http://mapicons.nicolasmollet.com/

		function marks(lat,lon,message,image){
			// animation null
		var ubicacion=new google.maps.LatLng(lat,lon);
		var puntero=new google.maps.Marker({
						position:ubicacion,
						map:mapa,
						animation: google.maps.Animation.DROP,
						icon:image
						});



		  var infowindow = new google.maps.InfoWindow({
				    content: message
				});

			infowindow.open(mapa,puntero);

			google.maps.event.addListener(puntero, 'click', function() {
			infowindow.open(mapa,puntero);
			});

	}

	function fillPlace (arraycoords){



						var bermudaTriangle = new google.maps.Polygon({
						    paths: arraycoords,
						    strokeColor: "#0174DF",
						    strokeOpacity: 0.4,
						    strokeWeight: 1,
						    fillColor: "#D8D8D8",
						    fillOpacity: 0.65
						  });

						  bermudaTriangle.setMap(mapa);
	}
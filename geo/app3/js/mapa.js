
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
				//var ubicacion=new google.maps.LatLng(lat,lon);
				var ubicacion=new google.maps.LatLng(lat,lon);
				var opcionesmapa={
					center:ubicacion,
					zoom:19,
					mapTypeId:google.maps.MapTypeId.SATELLITE
				}
				mapa=new google.maps.Map($("#mapa")[0],opcionesmapa);
				marks(lat,lon,"Este Eres Tu",'js/img/you-are-here-2.png');
				
				//----------------------------- AGREGAR MARKERS

				 google.maps.event.addListener(mapa, "click", function(evento) {
			     // Obtengo las coordenadas coomo objeto latLng || evento.latLng
			     $("#mensaje").text(evento.latLng.lat()+","+evento.latLng.lng());
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


			     
			     }); //--------------------------------Fin AGREGAR MARKERS

				 



				 // FILTRO
				 //var campo = $("#filtro");




				 $.ajax({
								    url: 'managetables.php',
								    type: 'POST',
								    dataType: 'json',
								    error: function (error){console.log(error);},
								    success: function(datos){
								    	var places = new Array();
								         for(var i in datos){

								         	places.push(datos[i].nombre);

								         }
								         

								    	$('#filtro').autocomplete({
											source:places,
											delay: 30,
											select:cargarVen
								     	});
								    }
								});


				 	// CARGAR LOS VENDEDORES DE LA DB
				 	function cargarVen ( event, ui ) {
								
								$.ajax({
								    url: 'recivirpeticion.php',
								    data: {
								    		peticion:ui.item.value
								        },
								    type: 'POST',
								    dataType: 'json',
								    error: function (error){console.log(error);},
								    success: function(datos){
								         $('#mensaje').text(JSON.stringify(datos, null, 4));
								         // DIBUJAR LOS MARKERS

								         // FOR PAR DIBUJAR
								         

								         	// llamar a marks2 -- hasta que ya y hago una markers generica

								         	//datos[i].carnet
								         	//datos[i].zona_lng
								         	//datos[i].nombre
								         	//datos url get
								         	//i url get


								         	marks2(datos);

								    }
								});


						}

				 	
						
				 

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
		//filtrar select con javascript
		//http://stackoverflow.com/questions/1447728/how-to-dynamic-filter-options-of-select-with-jquery

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


			function marks2(datos){
			// animation null

			var lng = datos[datos.length-1].zona_lng.split(',');
			var image = 'js/img/market.png';
			var ubicacion=new google.maps.LatLng(lng[0],lng[1]);
			mapa.setCenter(ubicacion);
			marks(lng[0],lng[1],'<h3 style="color:red;"> '+datos[datos.length-1].nombre+'  </h3>','js/img/information.png');

			delete datos[datos.length-1];

			for(var i in datos){

			         	// llamar a marks2 -- hasta que ya y hago una markers generica

			         	//datos[i].carnet
			         	//datos[i].zona_lng
			         	//datos[i].nombre
			         	//datos url get
			         	//i url get
			         	var lng = datos[i].zona_lng.split(',');
			         	var ubicacion=new google.maps.LatLng(lng[0],lng[1]);
						var puntero=new google.maps.Marker({
						position:ubicacion,
						map:mapa,
						animation: google.maps.Animation.DROP,
						icon:image
						});


						// CUANDO SE LE DE CLICK EL SIMPLEMENTE VA A DIRIGIR AL PHP Y CARGA LOS DATOS
						var infowindow = new google.maps.InfoWindow({
				    	content: 'Nombre :'+datos[i].nombre +'<br>Carnet : '+datos[i].carnet
						});

						//infowindow.open(mapa,puntero);
   						agregaEvent (puntero,infowindow,datos[i]);

         	}



         	function agregaEvent (puntero,infowindow,datos){
         		google.maps.event.addListener(puntero, 'click', function() {
				infowindow.open(mapa,puntero);

				$.ajax({
					    url: 'cargven.php',
					    data: {
					    		indice:i,
					    		dataj:datos
					        },
					    type: 'POST',
					    dataType: 'html',
					    error: function (error){console.log(error);},
					    success: function(datos){
					     $("#mensaje").html(datos);
					    }
					});


				});
         	}
		



		  

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
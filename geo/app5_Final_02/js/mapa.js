		var mapa;
		$(document).on("ready",inicio);
		function inicio(){

			navigator.geolocation.getCurrentPosition(mostrar,error);
			
			function error(){} // Funcion para mostrar error

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

				// PUNTERO YO
				var puntero=new google.maps.Marker({
						position:ubicacion,
						map:mapa,
						animation: google.maps.Animation.DROP,
						icon:'js/img/you-are-here-2.png'
						});


				var infowindow = new google.maps.InfoWindow({
				    content: "Este Eres Tu"
				});

				infowindow.open(mapa,puntero);
				google.maps.event.addListener(puntero, 'click', function() {
				infowindow.open(mapa,puntero);
				});
				

				//---- cargar lugares

				var places;
				$.ajax({
			    url: 'managetables.php',
			    type: 'POST',
			    dataType: 'json',
			    error: function (error){console.log(error);},
			    success: function(datos){
			    	
		    	this.places = datos;

				}

				});

				//---- end carga lugares



				//----------------------------- CREAR TABLA Y AGREGAR MARKERS

				 google.maps.event.addListener(mapa, "click", function(evento) {
			     // Obtengo las coordenadas como objeto latLng || evento.latLng
			     $("#mensaje").text(evento.latLng.lat()+","+evento.latLng.lng());
			     puntero.setPosition(evento.latLng);

			     var desde[0]=evento.latLng.lat();
			     desde[1]=evento.latLng.lng();
			     var peticion = masCerca(desde,200);

			    $.ajax({url: 'recivirpeticion.php',
			    data: {
			    		peticion:params.val
			          },
			    type: 'POST',
			    dataType: 'json',
			    error: function (error){console.log(error);},
			    success: function(datos){
			         $('#mensaje').text(JSON.stringify(datos, null, 4));
		         		marks2(datos,false);
			         
		         	// CREAR TABLA

// $('#mensaje').html("");
// var $table = $('<table>');
// $table.attr({ border :'1px' });
// // thead
// $table.append('<thead>').children('thead')
// .append('<tr />').children('tr').append('<th>Nombre</th><th> # de carnet </th> <th> Fotos </th>');

// //tbody
// var $tbody = $table.append('<tbody />').children('tbody');

// for (var i in datos){
// 	// add row
// 	var fotos = datos[i].fotos.split(',');

// 	$tbody.append('<tr />').children('tr:last')
// 	.append("<td>"+datos[i].nombre+"</td>")
// 	.append("<td>"+datos[i].carnet+"</td>")
// 	.append("<td> <img src='"+fotos[0]+"'/> </td>");
// }

// // add table to dom
// $table.appendTo('#mensaje');

								    }
								
								    });
			     
			     }); //----------------------------- CREAR TABLA Y AGREGAR MARKERS



			}


		}

		
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


			// DIBUJAR VENDEDORES
			function marks2(datos,carnet){
			// animation null
			// si esta buscando por carnet segundo parametro
			var lng = datos[0].zlng.split(',');
			var image = 'js/img/market.png';
			var ubicacion=new google.maps.LatLng(lng[0],lng[1]);
			mapa.setCenter(ubicacion);
			marks(lng[0],lng[1],'<h3 style="color:red;"> '+datos[0].znombre+'  </h3>','js/img/information.png');
			punteros = new Array ();
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

         	} // ----- END DIBUJAR VENDEDOR

	}

	//---- CARGAR VENDEDOR INFO
	function agregaEvent (puntero,infowindow,datos){
         		google.maps.event.addListener(puntero, 'click', function() {
				infowindow.open(mapa,puntero);

				$.ajax({
					    url: 'cargven.php',
					    data: {
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
         	}	// --- END VENDEDOR INFO
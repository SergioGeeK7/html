		var mapa;
		var markers = new Array();
		$(document).on("ready",inicio);
		function inicio(){
			
			

			navigator.geolocation.getCurrentPosition(mostrar,error); // Arrancar geo
			
			function error(){} // Funcion para mostrar error

			function mostrar(datos){
				var lat=datos.coords.latitude;
				var lon=datos.coords.longitude;
				//var ubicacion=new google.maps.LatLng(lat,lon);
				var ubicacion=new google.maps.LatLng(6.231128,-75.583291);
				var opcionesmapa={
					center:ubicacion,
					zoom:19,
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
				
				//---- circle
				/*var ubi_circle= new google.maps.LatLng(6.273388,-75.592849);
				var populationOptions = {
				      strokeColor: '#FF0000',
				      strokeOpacity: 0.8,
				      strokeWeight: 2,
				      fillColor: '#FF0000',
				      fillOpacity: 0.35,
				      map: mapa,
				      center: ubi_circle,
				      radius: 150
				};
				    // Add the circle for this city to the map.
				    cityCircle = new google.maps.Circle(populationOptions);


				//---------------*/

				//---- cargar vendedor

				var vendedor;
				$.ajax({
			    url: 'managetables.php',
			    type: 'POST',
			    dataType: 'json',
			    error: function (error){console.log(error);},
			    success: function(datos){
			    	
			    	vendedor = datos;
			    	mostrarVendedor(vendedor,ubicacion);
				}

				});

				//---- end carga vendedor



				//----------------------------- CAPTURA LOCALIZACION

				 google.maps.event.addListener(mapa, "click", function(evento) {
			     // Obtengo las coordenadas como objeto latLng || evento.latLng
			     $("#mensaje").text(evento.latLng.lat()+","+evento.latLng.lng());
			     puntero.setPosition(evento.latLng);
			     mostrarVendedor(vendedor,evento.latLng);
			     
			     }); //----------------------------- CAPTURA LOCALIZACION



			}


		}


		//----------------------------- CREAR TABLA Y AGREGAR MARKERS
		function mostrarVendedor (vendedor,latLng){

		// limpiar markers anteriores
	     for (var i in markers){
	     	markers[i].setPosition(null);
	     }

	     
	     $('#mensaje').html("");

	     var $table = $('<table>');
		 $table.attr({ border :'1px' });
		// thead
		 $table.append('<thead>').children('thead').append('<tr />')
		 .children('tr').append('<th>Nombre</th><th> # de carnet </th> <th> Foto </th>');

		//tbody
		 var $tbody = $table.append('<tbody />').children('tbody');

	     for (var i in vendedor){

	     	var lng = vendedor[i].zona_lng.split(',');
	     	var ubicacion=new google.maps.LatLng(lng[0],lng[1]);
		     if (google.maps.geometry.spherical.computeDistanceBetween(latLng,ubicacion,150)
		     	<0.0035000000000000000){

				// add row
				var fotos = vendedor[i].fotos.split(',');

				$tbody.append('<tr />').children('tr:last')
				.append("<td>"+vendedor[i].nombre+"</td>")
				.append("<td>"+vendedor[i].carnet+"</td>")
				.append(
				"<td> <a href='"+fotos[0]+"'> <img src='fotos/online-store-icon.png'/> </a> </td>");


				// add table to dom
				$table.appendTo('#mensaje');
				marks2(vendedor[i]);
				
		     }


	    }

	     if ($('#mensaje').text()=="") {
	     	
	     	$('#mensaje').html("No hay vendedores cercanos ...");
	     	 
	     }else{

		    $("td a").facybox();
			$("#facybox").click(function(){
		  	$.facybox.close();
			});

	     }


		} ///----------------------------- CREAR TABLA Y AGREGAR MARKERS

		// DIBUJAR vendedor
		function marks2(vendedor){

			var lng = vendedor.zona_lng.split(',');
			var image = 'js/img/market.png';
		    var ubicacion=new google.maps.LatLng(lng[0],lng[1]);

			var puntero=new google.maps.Marker({
			position:ubicacion,
			map:mapa,
			animation: google.maps.Animation.DROP,
			icon:image
			});
			
			// CUANDO SE LE DE CLICK EL SIMPLEMENTE VA A DIRIGIR AL PHP Y CARGA LOS vendedor
			var infowindow = new google.maps.InfoWindow({
	    	content: 'Nombre :'+vendedor.nombre +'<br>Carnet : '+vendedor.carnet
			});

			google.maps.event.addListener(puntero, 'click', function() {
			infowindow.open(mapa,puntero);

			});
	     	// contar markador para despues limpiarlo
	     	markers.push(puntero);

		}// ----- END DIBUJAR VENDEDOR
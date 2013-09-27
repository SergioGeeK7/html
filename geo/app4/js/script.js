 $(document).on("ready",function (){


	$.ajax({
		    url: 'data/data.json',
		    type: 'POST',
		    dataType: 'json',
		    error: function (error){console.log(error);},
		    success: function(datos){

		    var select= document.getElementById('filtro');
	    	for(var i in datos){

	    		//console.log(datos[i].vendedores[0].carnet);
	    		opt = document.createElement("option");
	            opt.value = i;
	            opt.text  = i;
	            select.appendChild(opt);
	    		console.log(i);

	    	}

	    	//console.log(datos["exito de robledo"].vendedores[0].carnet);

	        var select =$('#filtro');
	        	select.chosen({
	        	no_results_text: "No hay ningun lugar llamado",
			    width: "20%"
			    });

			select.on('change', function(evt, params) {
		    
				$('#mensaje').html("");
				var $table = $('<table>');
				$table.attr({ border :'1px' });
				// thead
				$table.append('<thead>').children('thead')
				.append('<tr />').children('tr').append('<th>Nombre</th><th> # de carnet </th> <th> Fotos </th>');

				//tbody
				var $tbody = $table.append('<tbody />').children('tbody');



		    for (var i in datos[params.selected].vendedores){

				// add row
				var fotos = datos[params.selected].vendedores[i].fotos.split(',');

				var $tr = $tbody.append('<tr />').children('tr:last');


				$tr.append("<td>"+datos[params.selected].vendedores[i].nombre+"</td>")
				.append("<td>"+datos[params.selected].vendedores[i].carnet+"</td>")
				.append("<td> <img src='"+fotos[0]+"'/> </td>");

				addEvento($tr,datos[params.selected].vendedores[i]);
					    
			}
					    // add table to dom
					    $table.appendTo('#mensaje');

				function addEvento (tr,datos){

					tr.click(function (){

						//console.log(datos.nombre);

						$.ajax({
					    url: 'cargven.php',
					    data: {
					    		dataj:datos
					        },
					    type: 'POST',
					    dataType: 'html',
					    error: function (error){console.log(error);},
					    success: function(datos){
					    select.trigger("chosen:updated");
					    select.chosen({width : "95%"}); 
					    $("#mensaje").html(datos);
					    }
						});



					});

				}


					});


			}


								});






$('button').on('about', function() {
      
	$('#filtro_chosen').hide('fast');
	
	

    });


});


 
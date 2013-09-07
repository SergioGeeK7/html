			var x;
		x=$(document);// COJO TODO EL DOCUMENTO
			x.ready(inicio);

		function inicio (){

				var x;
				x=$('#hola');
				x.mousedown(presionar);  // cuando pulse el boton del raton
				x.mouseup(soltar);
		}
			function presionar (){

			$(this).css('background-color','red');

			}

			function soltar () {

			$(this).css('background-color','blue');

		}

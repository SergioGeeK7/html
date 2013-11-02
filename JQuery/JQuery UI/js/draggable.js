var x;
x=$(document);
x.ready(inicio);


function inicio (){

	var x=$('#mueveme');
	x.draggable(); // HACE CUALQUIER ELEMENTO MOVIBLE
	x=$('#sueltame');
	x.droppable({drop:soltado});  // RECONOSE SI SE SUELTA UN ELEMENTO DENTRO DE EL
	// soltado function que ejecutara cuando detecte que algo le fue soltado ensima
}



function soltado (){

	x=$('#sueltame');
	x.css('background','red');
	x.text('GRACIAS AHORA TENGO EL ANTERONEO');
}
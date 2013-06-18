var x;
x=$(document);
x.ready(inicia);

function inicia (){

	var x=$(document); // hace referencia a todo el documento , NO SOLO UN DIV
	x.mousemove(capturaraton);

}


function capturaraton (){

	var x=$('#x');
	x.text('Coordenada X =' + event.clientX );
	var x=$('#y');
	x.text('Coordenada Y =' + event.clientY );

}
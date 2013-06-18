var x=$(document);
x.ready(inicia);


function inicia (){

	var x=$('#boton1');
	x.click(asociarclase);

	var x=$('#boton2');
	x.click(disosiarclase);

}

function asociarclase (){

	var x=$('#articulo'); // cogemos lo que tenga la id articulo
	x.addClass('agregar'); // no es necesario .agregar porque ya estamos espeficicando addCLASS que es una clase



}

function disosiarclase (){

	var x=$('#articulo'); // cogemos lo que tenga la id articulo
	x.removeClass('agregar'); // no es necesario .notica porque ya estamos espeficicando addCLASS que es una clase

	

}
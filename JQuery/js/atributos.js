var x;
var x=$(document);
x.ready(listo);


function listo(){

	var x=$("#boton1");
	x.click(leer);

	var x=$("#boton2");
	x.click(escribir);

	var x=$("#boton3");
	x.click(borrar);
}

function leer (){

	var x =$('table');
	alert(x.attr('border'));  // para leer un param
}


function escribir () {

	var x =$('table');
	x.attr('border','3'); // para establecer 2 param
}

function borrar(){

	var x=$('table');
	x.removeAttr('border');
}
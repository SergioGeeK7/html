var x;
x=$(document);
x.ready(inicio);

function inicio (){

	var x=$('#enviar');
	x.click(enviar);
}

function enviar (){

	var v=$('#numero').attr('value');
	$.ajax({async:true,
		type:"POST",
		dataType:"html",
		contentType:"application/x-www-form-urlencoded",
		url:"php/ajaxcompleto.php",
		data:"ano"+v,
		beforeSend:inicioEnvio,
		success:exito,
		timeout:4000,
		error:problemas

		});
	return false;




}

function inicioEnvio (){

	var x=$("#resultado");
	x.html('CARGANDO .....');
}
//param lo que devolvio el archivo .php
function exito (datos){

	var x=$('#resultado');
	x.text(datos);
}

function problemas (){

	var x=$('#resultado');
	x.text('Problemas en el servidor .');
}



















		// type:"POST", // METODO
		// dataType:"html", // TIPO DE DATOS
		// contentType:

		// url:"php/ajaxcompleto.php", // ARCHIVO QUE PROCESARA
		// data:"ano"+v,   NOMBRE DE LA VARIABLE POST MAS EL VALOR DE ESA VARIABLE
		// beforeSend:inicioEnvio,  // FUNCTION A EJECUTAR ANTES 
		// success:exito,  // FUNCTION A EJECUTAR SI TUBO EXITO
		// timeout:4000,  // TIEMPO DE ESPERA A QUE SE EJECUTE
		// error:problemas // FUNCTION QUE SE EJECUTA SI HAY PROBLEMAS SE CUMPLIO EL TIEMPO
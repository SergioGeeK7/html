var x;
x=$(document);
x.ready(inicio);

function inicio (){

	var x=$('#enviar');                             // el boton enviar... para que no se valla a la otra pagina sino que controlare que hacer
	x.click(carga);

}

function carga (){
	

	var x=$('#numero').attr('value');  // cojo lo que tiene adentro el input numero

	// $.POST == metodo post de ajax
	// param archivo.php a enviar el form
	// param {} nombre de la variable post a enviar:valor de la variable
	// param funcion que ejecutara cuando tenga el resultado
	console.log(x);
	$.post('php/calculadora.php',{numero:x},recibir);
	return false;
}

//parm datos parametro que retorna la funcion POST de ajax devuelve el resultado de calculadora.php
function recibir (datos){

	alert(datos);

}
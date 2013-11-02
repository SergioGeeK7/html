var x;
x=$(document);
x.ready(inicio);

function inicio (){

	var x;
	x=$('a'); // hagao referencia a todos los enlaces
	x.click(muestrame);

}

function muestrame (){

	var pagina;
	pagina=$(this).attr('href');  // selecciono this al elemento que le dieron click y le selecciono el atributo attr 

	var x=$('#hablame');  // selecciono el div hablame
	x.load(pagina);  // param pagina contiene la url
	return false; // la funcion ajax no debe devolver nada, ya que lo que devuelve lo hara dentro del div


	// USANDO AJAX DE MANERA ASYNCRONICA
}
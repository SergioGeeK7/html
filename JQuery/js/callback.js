var x;
x=$(document);
x.ready(inicio);

function inicio (){

	var x=$('#escondeme');
	x.click(esconder);
}

function esconder (){

	var x;
	x=$('#rectangulo');
	x.hide(5000,termino);  // si tiene dos parametros esperara a que termina la animacion y ejecutara esa funcion termino
	

}

function termino (){
	alert('el div ha sido escondido'); // no se ejecutara sino hasta que termina la animacion
}
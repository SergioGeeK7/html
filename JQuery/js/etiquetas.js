var x;
x=$(document);
x.ready(inicializar);

function inicializar (){

	var x;
	x=$('h1');
	x.click(presionar);

}

function presionar (){
	var x;
	x=$(this);
	x.css('font-size','12px');

}

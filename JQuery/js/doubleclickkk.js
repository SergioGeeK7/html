var x;
x=$(document);
x.ready(inicia);

function inicia (){

	var x;
	x=$('#hola');
	x.dblclick(pulsar);
}

function pulsar (){

	alert('haz hecho dobleclick el DIV');
}
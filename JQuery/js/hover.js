var x;
x=$(document);
x.ready(inicia);

function inicia (){

	var x;
	x=$('#hola');
	x.hover(entraraton,saleraton);
}

function entraraton (){

	$(this).css('background-color','yellow');


}


function saleraton (){

	$(this).css('background-color','white');


}
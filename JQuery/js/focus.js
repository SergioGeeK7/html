var x;
x=$(document);
x.ready(inicia);

function inicia (){

	var x;
	x=$('#usuario');
	x.focus(enfocar);
           x.blur(desenfocar);

}

function enfocar (){

	x=$('#usuario');
	x.attr('value',''); // le quitara a el campo el valor por defecto cuando gane el foco
}

function desenfocar (){

	x=$('#usuario');
	x.attr('value','Usuario'); // le quitara a el campo el valor por defecto cuando gane el foco


	// EL VALUE ES EL VALOR POR DEFECTO SE APLICA SI EL CAMPO ESTA VACIO EMPY
}
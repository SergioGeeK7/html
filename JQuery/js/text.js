var x;
x=$(document);
x.ready(inicio);


function inicio (){

	var x=$('#boton1'); // x es boton 1
	x.click(leer); // pulsan en b1 llamar leer
	x=$('#boton2'); // ahora es boton 2
	x.click(escribir); // pulsan en b2 llamar a escribir
	x=$('#robar');
	x.click(robar);


}

function leer (){

	var x=$('p');
	alert(x.text());  // c.text() leera el contenido de  p 

}

function escribir (){

	var x=$('p');
	x.text('Este es el nuevo texto a introducir');  // esto seteara el texto en la p
	// x.append('agregame');
	// x.prepend('añadira el texto al inicio');

	// x.after('pondra el texto con un salto de linea ');
	// x.before('pondra al inicio y luego salto de linea ');

}

function robar (){

	var x=$('[id$="cojeme"]');
	//var x=$('[id$="robame"]');
            alert(x.text());

}


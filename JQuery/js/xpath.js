var x;
x=$(document);
x.ready(inicio);


function inicio (){

	var x= $('#revelar');
	x.click(mostrar);


}

function mostrar (){

	var x=$('[href="#3"]');
	//var x=$('[href!="#3"]');// diferente de almuadilla 
	x.css('background','yellow');

	var x=$('[href $= ".jpg"]'); // buscara cadenas de caracteres y cambiara el tributo a la etiqueta que lo contenga
}
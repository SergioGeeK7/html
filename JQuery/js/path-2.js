var x;
x=$(document); // coge documento
x.ready(inicio); // si documento esta listo

function inicio (){

	var x= $('#revelar');  // cojo a la id revelar 
	x.click(mostrar);  // si hacen  click en id revelar ejecuta mostrar

}


function mostrar (){

	//var x=$('h1#cambiame'); // cojo a todos los p

	var x=$('li:first'); // cojo a todos los p
	x.css('background','yellow'); // pinto a todos los p
}

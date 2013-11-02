var x;
x=$(document);
x.ready(inicio);

function inicio (){


	var x=$('#animar');
	x.click(animate);


}

function animate (){

	var x=$('#objetivo');

	// param {} css para animar (:si es px debe de ir entre comillas)
	//param '' duracion
	x.animate({height:300},'slow');
	x.animate({width:300},'3000');
	x.animate({height:100},'normal');
	x.animate({width:200},'1000'); // representado en milisegundos == 1000 1s

}
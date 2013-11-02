var x;
x=$(document);
x.ready(inicio);

function inicio (){

	var x=$('#mostrar')  // el objeto que tenga el id mostrar
	x.click(mostrar);
	 // x=$('#ocultar');
	 // x.click(ocultar);


}


function mostrar (){

	var x=$('#objetivo'); 
	//x.show('fast');  //desaparece desvaneciendo y reduciendo el tamaño
	//x.fadeIn('slow');
	//x.fadeTo('fast','1')// 50% desvanece 
	//x.toggle('fast');
	//x.slideDown('fast');
	x.slideToggle('fast');
}

/*
function ocultar (){
	var x=$('#objetivo'); 
	//x.hide('fast');
	//x.fadeOut('slow');
	//x.fadeTo('fast','0.5')  // 50% desvanece 
	//x.slideUp('fast');

}*/
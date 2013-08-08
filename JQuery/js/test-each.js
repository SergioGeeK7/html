$(document).ready(function () {



$('h2').each(function (){


var contador=0;
this.style.color='red';
this.html('soy el h1 numero' + contador);
contador++;
});

});


/*

var x= $(document);
x.ready(inicio);

function inicio (){

	//$('h2').style.color='red';
	$('h2').css("color","red");
}
*/
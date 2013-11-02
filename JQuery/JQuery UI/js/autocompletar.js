var x;
x=$(document);
x.ready(inicio);

function inicio (){

	var posibilidades = ['carro','moto','bus','metro','a pie','en cicla'];

	var x=$('#completar')	;
	x.autocomplete({source:posibilidades});
}
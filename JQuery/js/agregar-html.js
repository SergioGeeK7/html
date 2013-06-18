var x=$(document);
x.ready(iniciar);

function iniciar (){

	var x=$('#boton1');
	x.click(mostar_html);
}


function mostar_html (){

	var x=$('#formulario');

	x.html('<form ><input type="text"><input type="button" value="puchale"></form> ');
}
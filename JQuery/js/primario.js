var x;
x=$(document);
x.ready(resaltar);

function resaltar (){

var x;
x=$('#boton');
x.click(resaltame);

}
function resaltame (){

var x;
x=$('.primario');

x.css('background-color','yellow');

}
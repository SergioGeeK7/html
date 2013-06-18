
var x;
x=$(document);
x.ready(initializar); // cuando este listo correre esta funcion


function initializar (){

var x;
x=$('#hola'); // con esto seleccionamos a todos los objetos que tengan la id hola
x.click(clickhecho);
}


function clickhecho (){

var x;
x=$('#hola');
// param nombredelapropiedad
// param valor
x.css('color','green');
x.css('background-color','yellow');
x.css('font-size','24px');
x.css('border','1px solid black');


}
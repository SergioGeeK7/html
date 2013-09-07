
var x;
x=$(document);
x.ready(initializar); // cuando este listo correre esta funcion


function initializar (){

var x;
x=$('.hola'); // con esto seleccionamos a todos los objetos que tengan la id hola
x.click(clickhecho);
}


function clickhecho (){



// param nombredelapropiedad
// param valor
$(this).css('color','green');
$(this).css('background-color','yellow');
$(this).css('font-size','24px');
$(this).css('border','1px solid black');


}
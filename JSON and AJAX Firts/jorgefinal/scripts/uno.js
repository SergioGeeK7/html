function hola(){

var n = document.f1.txtNombre.value;
var divError = document.getElementById("error");
var divRespuesta = document.getElementById("respuesta");


if(n.length==0){
divError.innerHTML="Digite nombre";
document.f1.txtNombre.focus();
}else{

peticion=new XMLHttpRequest();
peticion.open("GET", "json.txt", "true");
peticion.send();

peticion.onreadystatechange=function(){

if(peticion.readyState==4 && peticion.status==200){
//reponse Text
//divRespuesta.innerHTML=peticion.responseText;
////


///response XML
/*var xmlDoc= peticion.responseXML;
var txt="";

//DOM
var profes = xmlDoc.getElementsByTagName("profe");
for(i=0;i<profes.length;i++){
txt+=profes[i].childNodes[0].nodeValue+"<br/>";
}
divRespuesta.innerHTML=txt;
*/
//////

///response JSON
var objetoJson = JSON.parse(peticion.responseText);
divRespuesta.innerHTML= objetoJson.empleados[0].nombre+"--"+objetoJson.empleados[0].apellido;


//
////////
}//==4 & ==200
}//function anonima


}//else

}//hola
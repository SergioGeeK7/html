// //netscape core de firefox... netscape creador de javascript
// // ANDROID SDK MANAGER

// document.f1.txtnombre.value; // SE ESCALA POR NOMBRE
// navigator.history // saber la pagina anterior que visito
// document.write('holaaa');
// divError.innerHTML='Digite nombre';
// document.f1.txtnombre.focus();


function ajax (){

var div = document.getElementById("myDiv");

peticion = new XMLHttpRequest();
peticion.open('GET','metadata.xml',true); // asyncrono o no asyncrono
peticion.send();


peticion.onreadystatechange=function(){

	if (peticion.readyState==4 && peticion.status == 200) {

		div.innerHTML=peticion.responseText;
		var xmlDoc = peticion.responseXML;
		var txt="";


//DOOM

var sergio = xmlDoc.getElementsByTagName('sergio');
for (var i = sergio.length - 1; i >= 0; i--) {
	txt += sergio[i].childNodes[0].nodeValue + ' <br/>';

};

div.innerHTML=txt;

	}



	
}


}


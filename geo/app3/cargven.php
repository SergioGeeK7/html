<?php 

$dataj = $_POST['dataj'];
echo "<h1> Precionaste el vendedor ".$dataj['nombre']." </h1>";
$fotos = explode(",",$dataj['fotos']);


echo $dataj['nombre'];

?>

<style>

#slider{
	height: 150px;
	width: 150px;
}

#slider img{
	display: none;
}
#slider img:nth-child(1){
	display: block;
}

#next{
width: 0px;
height: 0px;
border-style: solid;
border-width: 15.5px 0 15.5px 46px;
border-color: transparent transparent transparent #007bff;
-webkit-transform:rotate(360deg);
border-style: inset;

}


</style>

<div id="slider">

<?php 
foreach ($fotos as $i) {
	echo "<img id='fotos'src='".$i."'>"; 
}
?>

</div>	<div id="next"></div>


Carnet : <input type="text" editable='false' readonly="readonly" value="<?php echo $dataj['carnet']; ?>"> 
<br>  Nombre  : <input type="text" editable='false' readonly="readonly" value="<?php echo $dataj['nombre']; ?>"> 
<br>  Calificacion <input type="range" value="0" min="0" max="10" step="1" onchange="cambioSlid(this.value)"/>
<span id="range">0</span>

<script>
function cambioSlid(val){
	document.getElementById("range").innerHTML=val;
}
</script>

<script>
var i = 0;
$(function main(){
	

	$('#next').click(function (){ cambiarSlider();	})

}) ();

function cambiarSlider(){
	
	i++;
	if(i == $("#slider img").size()){
		i = 0;
	}
	$("#slider img").hide();
	$("#slider img").eq(i).fadeIn("medium");
}
</script>
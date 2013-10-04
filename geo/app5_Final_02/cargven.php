<?php 

$dataj = $_POST['dataj'];
echo "<h1> Precionaste el vendedor ".$dataj['nombre']." </h1>";
$fotos = explode(",",$dataj['fotos']);




?>

<style>

#slider{
	height: 150px;
	width: 150px;
	position:relative; 
	padding-left:155px;

}

#slider #fotos{
	display: none;
	width:150px; 
	height:150px;
    position:absolute; 
    left:1px; 
    top:5px;

}

#slider #fotos:nth-child(1){
	display: inline-block;
}


</style>


<div id='slider'>
<?php 
foreach ($fotos as $i) {
	echo "<img id='fotos'src='".$i."'>"; 
}
?>

Carnet	:<input type="text" value="<?php echo $dataj['carnet']; ?>" readonly><br>
Nombre	:<input type="text" value="<?php echo $dataj['nombre']; ?>" readonly><br>
<img id='next' src="fotos/arrow.png" alt="">
</div>




<script>
var i = 0;
(function main(){
	

	$('#next').click(function (){ cambiarSlider();	});

}) ();

function cambiarSlider(){
	slider
	i++;
	if(i == $("#slider #fotos").size()){
		i = 0;
	}
	$("#slider #fotos").hide();
	$("#slider #fotos").eq(i).fadeIn("medium");
}
</script>
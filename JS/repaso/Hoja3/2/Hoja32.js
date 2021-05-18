addEventListener("load",inicio,false);
var contador = 1;
var contador2 = 1;
function inicio(){
	document.getElementById("b2").disabled = true;
	var alumnos = ["Cristian","Pablo","Alberto","Joseba","Carlos","Juan Carlos","Ana Maria","Victor"];
	var nuevo = new Array();
	var boton1 = document.getElementById("b1");
	boton1.addEventListener("click",function(){
		if(alumnos.length>0){
			var s,d;
			[s,d] = sorteo(alumnos,contador);
			contador++;
			alert("El nombre "+s+" y la posicion "+d);
		} else {
			var r = confirm("¿Desea volver a hacer el sorteo?");
			if(r==true){
				contador2++;
				alumnos.push("Cristian","Pablo","Alberto","Joseba","Carlos","Juan Carlos","Ana Maria","Victor");
				contador = 1;
			} else {
				document.getElementById("b1").disabled = true;
				document.getElementById("b2").disabled = false;
			}
		}
	},false);
	var boton2 = document.getElementById("b2");
	boton2.addEventListener("click",function(){
		alert("El numero de veces que se ha realizado a sido de "+contador2);
	},false);
}

function sorteo(array,contador){
	var numero = aleatorio(array);
	var nombre = array[numero];
	array.splice(numero,1);
	return [nombre,contador];
}

function aleatorio(array){
	return Math.floor(Math.random()*((array.length-1) - 0 + 1) + 0);
}
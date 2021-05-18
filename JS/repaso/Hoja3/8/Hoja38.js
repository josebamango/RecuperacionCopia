addEventListener("load",inicio,false);
function inicio(){
	var fechas = new Array();
	var fecha;
	var boton1 = document.getElementById("b1");
	boton1.addEventListener("click",function(){
		var A = document.getElementById("f").value;
		var f = new Date(A);
		var fecha = new Fechita(f);
		fechas.push(fecha);
		document.getElementById("f").value = "";
	},false);
	var boton2 = document.getElementById("b2");
	boton2.addEventListener("click",function(){
		uno(fechas);
	},false);
	var boton3 = document.getElementById("b3");
	boton3.addEventListener("click",function(){
		dos(fechas);
	},false);
	var boton4 = document.getElementById("b4");
	boton4.addEventListener("click",function(){
		tres(fechas);
	},false);
	var boton5 = document.getElementById("b5");
	boton5.addEventListener("click",borrado,false);
}

function uno(array){
	var seccion = document.createElement("section");
	for(var i=0;i<array.length;i++){
		var p = document.createElement("p");
		var tp = document.createTextNode("Fecha "+(i+1)+": "+array[i].ver());
		p.appendChild(tp);
		seccion.appendChild(p);
	}
	document.body.appendChild(seccion);
}

function dos(array){
	var sd = prompt("Introduce dias a sumar");
	for(var i=0;i<array.length;i++){
		array[i].sumadias(sd);
	}
}

function tres(array){
	var rm = prompt("Introduce meses a restar");
	for(var i=0;i<array.length;i++){
		array[i].restameses(rm);
	}
}

function borrado(){
	var seccion = document.querySelector("section");
	document.body.removeChild(seccion);
	document.getElementById("r2").innerHTML = " ";
}
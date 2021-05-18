addEventListener("load",inicio,false);
function inicio(){
	var arraya;
	var arrayb;
	var boton1 = document.getElementById("b1");
	boton1.addEventListener("click",function(){
		var aleA = aleatorio(3,6);
		var aleB = aleatorio(3,6);
		arraya = crear(aleA,aleB);
		arrayb = crear(aleA,aleB);
	},false);
	var boton2 = document.getElementById("b2");
	boton2.addEventListener("click",function(){
		mostrarB(arraya);
		mostrarB(arrayb);
	},false);
	var boton3 = document.getElementById("b3");
	boton3.addEventListener("click",borrar,false);
	var boton4 = document.getElementById("b4");
	boton4.addEventListener("click",function(){
		var arrayc = suma(arraya,arrayb);
		mostrarB(arrayc);
	},false);
	var boton5 = document.getElementById("b5");
	boton5.addEventListener("click",function(){
		var arrayd = resta(arraya,arrayb);
		mostrarB(arrayd);
	},false);
}

function aleatorio(min, max) {
	return Math.floor(Math.random()*(max - min + 1) + min);
}

function crear(x,y){
	var array = new Array();
	for(var i=0;i<x;i++){
		array[i] = new Array();
		for(var j=0;j<y;j++){
			array[i][j] = aleatorio(1,10);
		}
	}
	return array;
}

function mostrarB(array){
	var tabla = document.createElement("table");
	var tblBody = document.createElement("tbody");
	var tr = document.createElement("tr");
	tblBody.appendChild(tr);
	for (var i = 0; i < array.length; i++) {
		var hilera = document.createElement("tr");
		for (var j = 0; j < array[i].length; j++) {
			var celda = document.createElement("td");
			var textoCelda = document.createTextNode(array[i][j]);
			celda.appendChild(textoCelda);
			hilera.appendChild(celda);
		}
		tblBody.appendChild(hilera);
	}
	tabla.appendChild(tblBody);
	document.body.appendChild(tabla);
	tabla.setAttribute("border", "1");
}

function suma(arraya,arrayb){
	var arrayc = new Array();
	for(var i=0;i<arraya.length;i++){
		arrayc[i] = new Array();
		for(var j=0;j<arraya[i].length;j++){
			var n = arraya[i][j] + arrayb[i][j];
			arrayc[i][j] = n;
		}
	}
	return arrayc;
}

function resta(arraya,arrayb){
	var arrayc = new Array();
	for(var i=0;i<arraya.length;i++){
		arrayc[i] = new Array();
		for(var j=0;j<arraya[i].length;j++){
			var n = arraya[i][j] - arrayb[i][j];
			arrayc[i][j] = n;
		}
	}
	return arrayc;
}


function borrar(){
	var secion = document.querySelector("table");
	document.body.removeChild(secion);
}

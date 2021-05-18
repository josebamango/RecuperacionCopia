addEventListener("load",inicio,false);
function inicio(){
	var datos;
	var c;
	var dimension = new Array();
	var nombres = document.querySelectorAll("input[type=text]");
	var sueldos = document.querySelectorAll("input[step='0.01']");
	var antiguedades = document.querySelectorAll("input[name=A]");
	for(var i=0;i<antiguedades.length;i++){
		antiguedades[i].addEventListener("blur",function(){
			c = cambio(sueldos[this.id].value,antiguedades[this.id].value);
			sueldos[this.id].value = c;
		},false);
	}
	var boton1 = document.getElementById("b1");
	boton1.addEventListener("click",function(){
		for(var i=0;i<nombres.length;i++){
			datos = new Array(nombres[i].value,sueldos[i].value,antiguedades[i].value);
			dimension.push(datos);
		}
	},false);
	var boton2 = document.getElementById("b2");
	boton2.addEventListener("click",function(){
		mostrar(dimension);
	},false);
	var boton3 = document.getElementById("b3");
	boton3.addEventListener("click",borrar,false);
	var boton4 = document.getElementById("b4");
	boton4.addEventListener("click",function(){
		var m = media(dimension);
		document.getElementById("res").innerHTML = m;
	},false);
}

function cambio(sueldo,antiguedad){
	var p = parseInt(sueldo);
	if(p < 500 && antiguedad >= 10){
		p += (p * 20)/100;
	} else if(p < 500 && antiguedad < 10){
		p += (p * 5)/100;
	}
	return p;
}

function mostrar(array){
	var tabla = document.createElement("table");
	var tblBody = document.createElement("tbody");
	var tr = document.createElement("tr");
	var th1 = document.createElement("th");
	var th2 = document.createElement("th");
	var th3 = document.createElement("th");
	var tth1 = document.createTextNode("NOMBRE");
	var tth2 = document.createTextNode("SUELDO");
	var tth3 = document.createTextNode("ANTIGUEDAD");
	th1.appendChild(tth1);
	th2.appendChild(tth2);
	th3.appendChild(tth3);
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	tblBody.appendChild(tr);
	for (var i = 0; i < array.length; i++) {
		var hilera = document.createElement("tr");
		for (var j = 0; j < 3; j++) {
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

function media(array){
	var suma = 0;
	for(var i=0;i<array.length;i++){
		suma += parseInt(array[i][1]);
	}
	var media = suma / array.length;
	return media;
}

function borrar(){
	var tabla = document.querySelector("table");
	document.body.removeChild(tabla);
}
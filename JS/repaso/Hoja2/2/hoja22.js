addEventListener("load",inicio,false);
function inicio(){
	var empleados = new Array();
	var boton1 = document.getElementById("b1");
	boton1.addEventListener("click",function(){
		var cedula;
		var sexo;
		var trabaja;
		var sueldo;
		for(var i=0;i<50;i++){
			cedula = aleatorio(11111,99999);
			sexo = aleatorio(1,2);
			if(sexo==1){
				sexo = "Masculino";
			}else{
				sexo = "Femenino";
			}
			trabaja = aleatorio(1,2);
			if(trabaja==1){
				trabaja = "Trabaja";
			}else{
				trabaja = "NO trabaja";
			}
			if(trabaja == "Trabaja"){
				sueldo = aleatorio(300,3000);
			} else{
				sueldo = 0;
			}
			empleados[i] = [cedula,sexo,trabaja,sueldo];
		}
	},false);
	var boton2 = document.getElementById("b2");
	boton2.addEventListener("click",function(){
		mostrar(empleados);
		document.getElementById("res1").innerHTML = "El porcentaje de hombres es del "+hombres(empleados)+"%";
		document.getElementById("res2").innerHTML = "El porcentaje de mujeres es del "+mujeres(empleados)+"%";
		document.getElementById("res3").innerHTML = "El porcentaje de hombres que trabajan es del "+hombresB(empleados);
		document.getElementById("res4").innerHTML = "El porcentaje de mujeres que trabajan es del "+mujeresB(empleados);
	},false);
	var boton3 = document.getElementById("b3");
	boton3.addEventListener("click",borrar,false);
}

function aleatorio(min, max) {
	return Math.floor(Math.random()*(max - min + 1) + min);
}

function mostrar(array){
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

function hombres(array){
	var contador = 0;
	for(var i=0;i<array.length;i++){
		if(array[i][1]=="Masculino"){
			contador++;
		}
	}
	var resultado = (contador * 100)/array.length;
	return resultado.toFixed(2);
}

function mujeres(array){
	var contador = 0;
	for(var i=0;i<array.length;i++){
		if(array[i][1]=="Femenino"){
			contador++;
		}
	}
	var resultado = (contador * 100)/array.length;
	return resultado.toFixed(2);
}

function hombresB(array){
	var contador = 0;
	var sueldo = 0;
	for(var i=0;i<array.length;i++){
		if(array[i][1]=="Masculino" && array[i][2]=="Trabaja"){
			contador++;
			sueldo += array[i][3];
		}
	}
	var resultado = (contador * 100)/array.length;
	var total = sueldo / contador;
	return resultado.toFixed(2)+"% y sueldo promedio de: "+total.toFixed(2)+"€";
}

function mujeresB(array){
	var contador = 0;
	var sueldo = 0;
	for(var i=0;i<array.length;i++){
		if(array[i][1]=="Femenino" && array[i][2]=="Trabaja"){
			contador++;
			sueldo += array[i][3];
		}
	}
	var resultado = (contador * 100)/array.length;
	var total = sueldo / contador;
	return resultado.toFixed(2)+"% y sueldo promedio de: "+total.toFixed(2)+"€";
}

function borrar(){
	document.getElementById("res1").innerHTML = "";
	document.getElementById("res2").innerHTML = "";
	document.getElementById("res3").innerHTML = "";
	document.getElementById("res4").innerHTML = "";
	var secion = document.querySelector("table");
	document.body.removeChild(secion);
}

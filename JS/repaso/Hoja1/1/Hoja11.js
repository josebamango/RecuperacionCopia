addEventListener("load",inicio,false);
function inicio(){
	var se = document.getElementById("op");
	se.addEventListener("change",function(){
		var A = document.getElementById("n1").value;
		var B = document.getElementById("n2").value;
		var C = document.getElementById("op").value;
		var resultado = operar(A,B,C);
		document.getElementById("res").innerHTML = resultado;
	},false); 
	var boton1 = document.getElementById("b1");
	boton1.addEventListener("click",limpiar,false);
}

function operar(numero1,numero2,operacion){
	var total = 0;
	switch(operacion){
		case "Sumar":
			total = parseInt(numero1) + parseInt(numero2);
			break;
		case "Restar":
			total = parseInt(numero1) - parseInt(numero2);
			break;
		case "Multiplicar":
			total = parseInt(numero1) * parseInt(numero2);
			break;
		case "Dividir":
			total = parseInt(numero1) / parseInt(numero2);
			break;
	}
	if(isNaN(total)){
		total = 0;
	}
	return total;
}

function limpiar() {
	document.getElementById("n1").value ="";
	document.getElementById("n2").value ="";
	document.getElementById("res").innerHTML ="";
	document.getElementById("n1").focus();
}
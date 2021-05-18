addEventListener("load",inicio,false);
function inicio(){
	var boton1 = document.getElementById("b1");
	boton1.addEventListener("click",function(){
		var A = document.getElementById("fecha").value;
		var B = document.getElementById("dias").value;
		var C = document.getElementById("op").value;
		var u,n,o;
		[u,n,o] = sumarF(A,B,C);
		document.getElementById("res").value = u+"/"+n+"/"+o;
	},false);
}

function sumarF(fecha,dias,operacion){
	var d = parseInt(dias);
	var nfecha = new Date(fecha);
	if(operacion=="Aumentar"){
		nfecha.setDate(nfecha.getDate()+d);
	} else if(operacion=="Reducir"){
		nfecha.setDate(nfecha.getDate()-d);
	}
	return [nfecha.getDate(),nfecha.getMonth()+1,nfecha.getFullYear()];
}
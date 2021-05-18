addEventListener('load',inicio,false);

function inicio() {

	let comprobacion=document.getElementById('comprobacion');
	comprobacion.addEventListener('click',function(){
		var res =trimestral(document.getElementById('dia').value,
			document.getElementById('mes').value,
			document.getElementById('ano').value);
		document.getElementById("label").innerHTML =res		
	},false);
}

let trimestral=(dia,mes,ano)=>{
	let meses = new Array("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"); 
	let mensaje="octubre noviembre y diciembre son los padres"
	let numMes=0;
	for (var i = 0; i < meses.length; i++) {
		if (mes.toLowerCase()==mes[i]) {
			let numMes=i;
		}
	}
	let fecha=new Date(ano,numMes,dia);
	let numMes2=fecha.getMonth();
		
			if (numMes2>=0 && numMes2<=2) {
				mensaje="primer trimestre";
			}
			if (numMes2>=3 && numMes2<=5  ) {
				mensaje="segundo trimestre";
			}
			if (numMes2>=6 && numMes2<=8  ) {
				mensaje="tercero trimestre";
			}
		
	
	return mensaje
}
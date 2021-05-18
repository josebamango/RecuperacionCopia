addEventListener('load',inicio,false);

function inicio() {

	let comprobacion=document.getElementById('comprobacion');
	comprobacion.addEventListener('click',function(){
		var res =navidad(document.getElementById('fecha').value);
			document.getElementById("label").innerHTML =res
			
	},false);
}
let navidad=(fechanav)=>{
	 let fechanavidad =new Date(fechanav);
	 let mensaje="no es navidad"
	 
	dia=fechanavidad.getDate();
	mes=fechanavidad.getMonth()
	if (mes==11) {
		if (dia>=25 && dia<=31) {
			 mensaje="es navidad";
		}
	}
	return mensaje
}
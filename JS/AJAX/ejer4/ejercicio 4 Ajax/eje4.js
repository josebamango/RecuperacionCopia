addEventListener("load",inicio,false);

function inicio(){
	var botonEnviar = document.getElementById("enviar");
	
	botonEnviar.addEventListener("click",function(){
		let nombre = document.getElementById("nombre").value;
		let apellido = document.getElementById("apellido").value;
		let edad = parseInt(document.getElementById("edad").value);
		console.log(nombre.trim().length);
		if(nombre.trim().length>0 && apellido.trim().length>0 && !Number.isNaN(edad) ){
			//console.log();
			envioForm(nombre,apellido,edad);
		}else{
			document.getElementById("respuesta").innerHTML="ha introducido mal los datos";
		}
	},false);
}

function envioForm(nom,ape,ed){
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	} else if(window.ActiveXObject){
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	var datos = new FormData();
	datos.append('nombre', nom);
	datos.append('apellido', ape);
	datos.append('edad', ed);

	xhr.open ('POST', '4.php', true);
			
	xhr.send(datos);

	xhr.onreadystatechange = muestraContenido;

	function muestraContenido(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				//console.log(typeof(xhr.responseText));
				let jsonResponse = xhr.responseText;
				JsonPaises = JSON.parse(xhr.responseText);
				console.log(JsonPaises);
				let cad= "nombre: "+JsonPaises.nombre+", apellido: "+JsonPaises.apellido+", edad: "+JsonPaises.edad+", estado: "+JsonPaises.estado;
				document.getElementById('respuesta').innerHTML = cad;
			} else{
				alert("Código de error " + xhr.status);
			}
		}
	};
}
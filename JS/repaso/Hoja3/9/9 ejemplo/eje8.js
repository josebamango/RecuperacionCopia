//main
addEventListener("load",inicio,false);

var arrAutos = [];
var arrFotos = ["fotos/carreras.jpg","fotos/descapotable.jpg","fotos/turismo.jpg","fotos/camioneta.jpg"];
var pri = true;
var cocheSele=null;

function inicio(){
	var botonEnviar = document.getElementById("enviar");
	var botonRojo = document.getElementById("botAcel");
	var botonAumenta = document.getElementById("aumenta");
	var botonDisminu = document.getElementById("disminuye");
	
	botonEnviar.addEventListener("click",function(){
		let modelo = document.getElementById("seleAuto").value;
		let color = document.getElementById("color").value;
		let veloMax = document.getElementById("velMax").value;
		
		if(!Number.isNaN(parseInt(color)) || color.trim()=="" || Number.isNaN(parseInt(veloMax))){
			document.getElementById("respuesta").innerHTML="error al introducir datos";
		}else{
			let model="";
			if(modelo==0){
				model="carreras";
			}else if(modelo==1){
				model="descapotable";
			}else if(modelo==2){
				model="turismo";
			}else if(modelo==3){
				model="camioneta";
			}
			
			let coche = new auto(model,color,parseInt(veloMax),arrFotos[modelo]);
			arrAutos.push(coche);
			console.log(arrAutos);
			vizualizaAutos();
			document.getElementById("color").value="";
			document.getElementById("velMax").value="";
			document.getElementById("respuesta").innerHTML="";
		}
		
	},false);
	
	botonRojo.addEventListener("click",function(){
		if(cocheSele==null){
			document.getElementById("respuesta2").innerHTML="no ha seleccionado ningun coche";
		}else{
			
			arrAutos[cocheSele].arrancar();
			
			botonRojo.style.backgroundColor="green";
			//document.getElementById("respuesta2").innerHTML="";
			
		}
	},false);
	
	botonAumenta.addEventListener("click",function(){
		let vel = parseInt(document.getElementById("velocidad").value);
		if(cocheSele==null){
			document.getElementById("respuesta2").innerHTML="no ha seleccionado ningun coche";
		}else{
			if(!Number.isNaN(vel)){
				arrAutos[cocheSele].acelerar(vel);
			}else{
				arrAutos[cocheSele].acelerar(true);
			}
			velAct();
			document.getElementById("velocidad").value="";
		}
	},false);
	
	botonDisminu.addEventListener("click",function(){
		let vel = parseInt(document.getElementById("velocidad").value);
		if(cocheSele==null){
			document.getElementById("respuesta2").innerHTML="no ha seleccionado ningun coche";
		}else{
			if(!Number.isNaN(vel)){
				arrAutos[cocheSele].frenar(vel);
			}else{
				arrAutos[cocheSele].frenar(true);
			}
			velAct();
			document.getElementById("velocidad").value="";
			if(arrAutos[cocheSele].encendido==false){
				botonRojo.style.backgroundColor="red";
			}
		}
	},false);
}

function vizualizaAutos(){
	if(pri==false){
		let label = document.getElementById("graf");
		let canti = label.childNodes.length;
			
		for(i=canti;i > 0;i--){
			console.log(label.childNodes);
			if(label.childNodes[i-1].nodeName=="FIELDSET"){
				label.removeChild(label.childNodes[i-1]);
			}
				
		}
	}else{
		pri=false;
	}
	let label = document.getElementById("graf");
	let fiel = document.createElement("fieldset");
	let lege = document.createElement("legend");
	let tex = document.createTextNode("lista de coches ");
	lege.appendChild(tex);
	fiel.appendChild(lege);
	for(i=0;i<arrAutos.length;i++){
		let div = document.createElement("div");
		let img = document.createElement("img");
		img.setAttribute("src",arrAutos[i].imagen);
		div.setAttribute("id",i);
		div.appendChild(img);
		div.addEventListener("click",function(){
			cocheSele=this.id;
			let botonRojo = document.getElementById("botAcel");
			if(arrAutos[cocheSele].encendido==true){
				botonRojo.style.backgroundColor="green";
			}else{
				botonRojo.style.backgroundColor="red";
			}
			document.getElementById("respuesta2").innerHTML="coche Nº"+(parseInt(this.id)+1)+" seleccionado, datos: "+arrAutos[cocheSele].ver();
			velAct();
		},false);
		fiel.appendChild(div);
	}
	label.appendChild(fiel);
	
	
}

function velAct(){
	document.getElementById("velocidadAc").innerHTML="<br><h3>velocidad actual: "+arrAutos[cocheSele].verVelocidad()+"</h3>";
}






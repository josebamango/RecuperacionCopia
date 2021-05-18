//objeto auto

function auto(modelo,color,velocidadMaxima,imagen){
	this.modelo=modelo;
	this.color=color;
	this.velocidadMaxima=velocidadMaxima;
	this.velocidad=0;
	this.encendido=false;
	this.imagen=imagen;
	
	//metodos
	this.verVelocidad=metVelocidad;
	this.acelerar=metAcelera;
	this.frenar=metFrenar;
	this.arrancar=metArranca;
	this.ver=metVer;
	
}

function metVelocidad(){
	return this.velocidad;
}

function metAcelera(vel){
	if(this.encendido==true){
		if(vel==true && this.velocidad+10<=this.velocidadMaxima){
			this.velocidad+=10;
		}else if(this.velocidad+vel<=this.velocidadMaxima){
			this.velocidad+=vel;
		}
	}
}

function metFrenar(vel){
	if(this.encendido==true){
		if(vel==true){
			this.velocidad-=10;
		}else{
			this.velocidad-=vel;
		}
		if(this.velocidad<=0){
			this.velocidad=0;
			this.encendido=false;
		}
	}
}

function metArranca(){
	this.encendido=true;
}

function metVer(){
	return "modelo: "+this.modelo+", color: "+this.color+", velocidad maxima: "+this.velocidadMaxima;
}


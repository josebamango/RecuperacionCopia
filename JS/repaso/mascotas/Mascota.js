class Mascota{
	constructor(nombre,imagen,tope){
		this.nombre = nombre;
		this.imagen = imagen;
		this.tope = tope;
		this.hambre = 0;
	}
	
	comer(){
		this.hambre++;
	}
}
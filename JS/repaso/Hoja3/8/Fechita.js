class Fechita{
	constructor(fec){
		this.fecha = fec;
		this.dia = this.fecha.getDate();
		this.mes = this.fecha.getMonth();
		this.año = this.fecha.getFullYear();
	}
	
	sumadias(dias){
		this.fecha.setDate(this.fecha.getDate()+parseInt(dias));
	}
	
	restameses(meses){
		this.fecha.setMonth(this.fecha.getMonth()-parseInt(meses));
	}
	
	ver(){
		return this.fecha.getFullYear()+"-"+(this.fecha.getMonth()+1)+"-"+this.fecha.getDate();
	}
}
function Cadenita(texto){
	this.texto = texto;
	this.longitud = texto.length;

	//METODOS
	this.ristra = function(){
		var array = this.texto.split(" ");
		var resultado = 'PALABRAS INTRODUCIDAS \n';
		for (var i = 0; i < array.length ; i++) {
			resultado += 'Palabra ' + parseInt(i+1) + ': ' + array[i] + '\n';
		}
		return resultado;
	}

	
        this.reves = function()
	{
		let alReves = '';
		for(let i=this.texto.length -1; i>=0; i--)
		{
			alReves += this.texto[i];
		}
		return alReves;
	}

	this.buscar = function(palabra){
		var array = this.texto.split(" ");
		var indice = array.indexOf(palabra);
		if (indice > -1) {
			return true;
		}else{
			return false;
		}
	}

	this.mayus = function(){
		var array = this.texto.split(" ");
		for (var i = 0; i < array.length; i++) {
			array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
		}
		return array.join("-");
	}
}
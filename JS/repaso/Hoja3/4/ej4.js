addEventListener("load",inicio,false);
var array1=new Array();
var array2=new Array();
function inicio(){
	let boton=document.getElementById('arrays12');
	boton.addEventListener("click",function(){
		relleno(array1,array2)
		document.getElementById("label1").innerHTML ="array1 "+visualizar(array1);
	document.getElementById("label2").innerHTML ="array2 "+visualizar(array2);
	let array3=creacionDel3(array1,array2);
	document.getElementById("label3").innerHTML ="array3 "+visualizar(array3);
	},false);

	
	


}
let relleno=(array1,array2)=>{
	let longitud1=Math.random()*(20 - 1) + 1;
	let longitud2=Math.random()*(20 - 1) + 1;


	for (var i = 0; i < longitud1; i++) {
		array1.push(Math.random()*(50 - 1) + 1);
	}
	for (var i = 0; i < longitud2; i++) {
		array2.push(Math.random()*(50 - 1) + 1);
	}

}
let visualizar=array=>{
	let mensaje="";
	for (var i = 0; i < array.length; i++) {

		mensaje+=Math.floor(array[i])+" ";
	}
	return mensaje
}

let creacionDel3=(array1,array2)=>{
	let array3 = new Array();
	
	if (array1.length<array2.length) {
		//se suman los arrays

		for (var i = 0; i < array1.length; i++) {

			array3[i]=array1[i]+array2[i];
		}

		// se rellenan el array con los numeros restantes
		for (var i = array1.length; i<array2.length; i++) {
			array3[i]=array2[i];
		}

	}

	if (array1.length>array2.length) {

		for (var i = 0; i < array2.length; i++) {
			array3[i]=array1[i]+array2[i];
		}

		for (var i = array2.length; i<array1.length; i++) {
			array3[i]=array1[i];
		}
	}
	
return array3;
}
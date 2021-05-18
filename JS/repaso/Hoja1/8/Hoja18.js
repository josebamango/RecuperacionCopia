addEventListener("load",inicio,false);
function inicio(){
	while(true){
		var num = prompt("Introduce numero");
		if(!isNaN(num) && num != null && num !=''){
			if(num>=1 && num<=5){
				document.getElementById("res1").innerHTML = num;
				break;
			}
		}
	}
}

function validarNumerico(event){
	if(event.charCode >= 49 && event.charCode <= 53){
		return true;
	}
	return false;
}
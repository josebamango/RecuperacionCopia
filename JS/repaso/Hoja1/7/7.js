addEventListener('load', inicio, false);


 function inicio(){

        let boton=document.getElementById('boton');

        boton.addEventListener('click', function (){ 
        
            let valor1=document.getElementById('var1').value; 
            let valor2=document.getElementById('var2').value; 

            uno(valor1, valor2);
            dos(valor2);
            tres(valor1);
            cuatro(valor2, valor1);
        
          }, false);
        

};

 function uno(valor1, valor2) {
    if (valor1>valor2) {
               
        alert("El primer valor es mayor");
    
    } else {
    
        alert("El segundo valor es mayor");
    }
 }

 function tres(valor1) {
    if (valor1<0 || valor1!=0) {
               
        alert("La primera no es negativa o distinta de 0");
    
    } else {
    
        alert("La primera  es negativa ni distinta de 0");
    }
 }
 function dos(valor2) {
    if (valor2>0) {
               
        alert("La segunda es positiva");
    
    } else {
    
        alert("No es positiva");
    }
 }
 function cuatro(valor2, valor1) {
    if ((valor1+1)>=valor2) {
               
        alert("Al incrementar en uno, sigue siendo mayor o igual");
    
    } else {
    
        alert("Al incrementar en uno, sigue siendo menor");
    }
 }

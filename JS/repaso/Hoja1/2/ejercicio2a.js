addEventListener('load',inicio,false);

function inicio(){    
   
    var enviar = document.getElementById('enviar');
    enviar.addEventListener('click',contarNumeros,false);

}

function contarNumeros(){ 
    
    var div = document.getElementById('caja');
    var div2 = document.getElementById('caja2');
    
    var numero = document.getElementById('numero').value;

    var numeros_contados = numero.length;
    

    var texto = "";
    

    switch(numeros_contados){
        case 1:
           texto = "Contiene un número";
           break;
        case 2:
            texto ="Contiene dos números";
            break;
        case 3:
            texto = "Contiene tres números";
            break;
        default:
            texto = "no cumple los requisitos";
            break;
    }

    
    caja.innerHTML = texto;

    caja2.innerHTML = "Suma Total de los Dígitos :" + sumarDigitos(numero);
    
   
}

function sumarDigitos(numero){
    
    if(0<numero) {
        return (numero%10) + sumarDigitos(Math.floor(numero/10));
    }
    return numero;
      

}
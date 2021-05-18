addEventListener('load',inicio,false);

function inicio(){
    var enviar = document.getElementById('enviar');
    enviar.addEventListener('click',bucle,false);
    var caja = document.getElementById('caja');
    caja.hidden = true;
   
}

function bucle(){

    let numero = document.getElementById('numero').value;
    let caja_numero = document.getElementById('numero');
    let formulario = document.getElementById('formulario');
    
    
    console.log(numero);
    if(numero>=1 && numero<=5){
        
        formulario.hidden = true;
        caja.hidden = false;
        enviar.hidden = true;
    }else{
        caja_numero.focus();
        caja_numero.value = "";
        
    }
}
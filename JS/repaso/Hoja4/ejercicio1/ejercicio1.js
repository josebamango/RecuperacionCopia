addEventListener('load',inicio,false);

var array = [{}];



function inicio(){
    
    var enviar = document.getElementById('enviar');
    enviar.addEventListener('click',alta,false);
    
    var ver = document.getElementById('ver');
    ver.addEventListener('click',visualizar,false);

    var saldo_ricos = document.getElementById('saldo_ricos');
    saldo_ricos.addEventListener('click',verSaldoRicos,false);
    var saldo_pobres = document.getElementById('saldo_pobres');
    saldo_pobres.addEventListener('click',verSaldoPobres,false);
    var tramites = document.getElementById('tramites');
    tramites.addEventListener('click',tramitar,false);
}

function alta(){
    //traemos los valores
    var nombre = document.getElementById('nombre').value;
    var saldo_cuenta = document.getElementById('saldo').value;
    //pasamos de string a int el saldo
    var saldo = parseInt(saldo_cuenta);
    //creamos el numero de cuenta de manera aleatoria
    var numero_cuenta = aleatorio(1111111111,9999999999);
    //creamos el nuevo objeto usuario
    var nuevo_usuario = new ClienteBanco(nombre,saldo,numero_cuenta);
    
    array.push(nuevo_usuario);
    
    var nombre2 = document.getElementById('nombre');
    nombre2.value = "";
    nombre2.focus();
    var saldo_cuenta2 = document.getElementById('saldo');
    saldo_cuenta2.value = "";
}

function aleatorio(min,max){
    return parseInt(Math.random() * (max - min) + min);
}

function tramitar(){
    var contenedor = document.getElementById('contenedor');
    //creamos el input para añadir la cantidad
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("Introduzca la cantidad");
    var input = document.createElement('input');
    input.type = "number";
    input.setAttribute('id','cantidad');

    //creamos el select para los numeros de cuenta
    var texto2 = document.createTextNode('Seleccione el número de cuenta');
    var parrafo2 = document.createElement('p');

    var select = document.createElement('select');
    select.id = "num_cuenta";

    for(var i=1;i<array.length;i++){
        var option = document.createElement('option');
        option.setAttribute('value',array[i].numeroCuenta);
        option.innerHTML = array[i].numeroCuenta;
        
        select.appendChild(option);
    }

    parrafo.appendChild(texto);
    contenedor.appendChild(parrafo);
    
    contenedor.appendChild(input);
    parrafo2.appendChild(texto2);
    contenedor.appendChild(parrafo2);
    contenedor.appendChild(select);

    var botoningreso = document.createElement('input');
    botoningreso.type = 'button';
    botoningreso.setAttribute('value','Ingresar Dinero');
    botoningreso.setAttribute('id','ingresar');
    contenedor.appendChild(botoningreso);


    var botonRetiro = document.createElement('input');
    botonRetiro.type = 'button';
    botonRetiro.setAttribute('value','Retirar Dinero');
    botonRetiro.setAttribute('id','retirar');
    contenedor.appendChild(botonRetiro);

    var retirar = document.getElementById('retirar');
    retirar.addEventListener('click',quitar,false);
    var ingresar = document.getElementById('ingresar');
    ingresar.addEventListener('click',aumentar,false);
}

function quitar(){

    var cantidad = document.getElementById('cantidad').value;
    cantidad_add = parseInt(cantidad);
    var num_cuenta = document.getElementById('num_cuenta').value;

    for(var i=1;i<array.length;i++){
        if(array[i].numeroCuenta == num_cuenta){
            array[i].retirada(cantidad_add);
           
        }
    }
}

function aumentar(){
    var cantidad = document.getElementById('cantidad').value;
    cantidad_add = parseInt(cantidad);
    var num_cuenta = document.getElementById('num_cuenta').value;

    for(var i=1;i<array.length;i++){
        if(array[i].numeroCuenta == num_cuenta){
            array[i].ingreso(cantidad_add);
            
        }
    }
}

function visualizar(){
    var ricos = document.getElementById('ricos');
    var pobres = document.getElementById('pobres');
    var neutros = document.getElementById('neutros');
   
    var positivo = [];
    var negativo = [];
    var nulo = [];

    for(var i=0;i<array.length;i++){
      if(array[i].saldo > 0){
          positivo.push(array[i].ver());
      }else if(array[i].saldo < 0){
          negativo.push(array[i].ver());
      }else if(array[i].saldo == 0){
          nulo.push(array[i].ver());
      }
    }

    ricos.innerHTML = positivo;
    pobres.innerHTML = negativo;
    neutros.innerHTML = nulo;

    ricos.style.backgroundColor = "green";
    pobres.style.backgroundColor = "red";
    neutros.style.backgroundColor = "gray";
    
    
}

function verSaldoRicos(){
    var mostrar_saldo_ricos = document.getElementById('mostrar_saldo_ricos');
    var saldos = [];
    var saldoTotal = 0;
    for(var i=0;i<array.length;i++){
        if(array[i].saldo > 0 && array[i].saldo < 300000){
            saldoTotal += array[i].saldo; 
            saldos+= "<p>Nombre: " + array[i].nombre + " Saldo : " + array[i].saldo + "</p>";
        }else if(array[i].saldo >30000){
            var nuevo_saldo = (array[i].saldo*1.10).toFixed(2);
            
           saldos +="<p>Nombre: " + array[i].nombre + " Saldo : " + array[i].saldo + " Bonificacion: 10% Nuevo sado: " + nuevo_saldo + "</p>";
           saldoTotal += nuevo_saldo; 
        }
    }
    mostrar_saldo_ricos.innerHTML = saldos + "<p>Saldo Total: " + saldoTotal + "</p>";
}

function verSaldoPobres(){
    var mostrar_saldo_pobres = document.getElementById('mostrar_saldo_pobres');
    var saldos = [];
    var saldoTotal = 0;
    for(var i=0;i<array.length;i++){
        if(array[i].saldo <0){
            var nuevo_saldo = parseInt((array[i].saldo*1.10)).toFixed(2);
            saldos += "<p>Nombre: " + array[i].nombre + " Saldo : " + array[i].saldo + " Penalización: 5% Nuevo Saldo: " + nuevo_saldo + "</p>";
            saldoTotal -= nuevo_saldo;
        }
    }

    mostrar_saldo_pobres.innerHTML = saldos  + "<p>Saldo Total: -" + saldoTotal + "</p>";
}
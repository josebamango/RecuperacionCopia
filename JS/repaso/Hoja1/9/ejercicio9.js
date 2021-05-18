addEventListener('load',inicio,false);

function inicio(){
    let caja = document.getElementById('caja');
    let caja2 = document.getElementById('caja2');

    var nombres = ['Juan','Luis','Andrea','Pepa','Elvis'];
    var array = [];

    for(var i=0;i<nombres.length;i++){

        array.push([nombres[i],parseInt(Math.random() * (500-100)+100)]);
        
    }


    caja.innerHTML = "Sueldos entre 100 y 300 <br>" + sueldosMedios(array);
    caja2.innerHTML = "Sueldos superior a 300 <br>" + sueldosAltos(array);
    caja3.innerHTML = "Sueldo Total de todos los empleados <br>" + sueldoTotal(array);

}

function sueldosMedios(array){

    var mensaje = "";
    for(var i=0;i<array.length;i++){
        if(array[i][1]<=100 || array[i][1]<=300){
            mensaje += array[i] + "<br>";
        }
    }

    return mensaje;
}

function sueldosAltos(array){
    var mensaje = "";
    for(var i=0;i<array.length;i++){
        if(array[i][1]>300){
            mensaje += array[i] + "<br>";
        }
    }

    return mensaje;
}

function sueldoTotal(array){
    var sueldo = 0;
    for(var i=0;i<array.length;i++){
        sueldo += array[i][1];
    }
    return sueldo;
}
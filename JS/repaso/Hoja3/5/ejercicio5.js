addEventListener('load',inicio,false);

var array = [];
var left = '';
var topwindow = '';
var mywindow = "";
var intervalo = "";
var contador = 0

function inicio(){
    
    var enviar = document.getElementById('enviar');
    enviar.addEventListener('click',function(){
        almacenar(array);
        palabra.value = "";
        palabra.focus();
        
    },false);

    var final = document.getElementById('final');
    final.addEventListener('click',function(){
        mostrar(array);
    },false);

    left = (screen.width/2)-(300/2);
    topwindow = (screen.height/2)-(300/2);
    console.log('left: ',left)
    console.log('top: ',topwindow)
}

function almacenar(array){
    
    var palabra = document.getElementById('palabra').value;
    
    array.push(palabra);
    
    return array;
}

function mostrar(array){

    var primera_palabra = "<p>Primera palabra: " + array[0] + "</p>";
    var ultima_palabra = "<p>Ultima palabra: " + array[array.length -1] + "</p>";
    var num_palabras = "<p>Cuantas palabras existen: " + array.length + "</p>";
    var ordenar = "<p>Array ordenado alfabeticamente " + array.sort() + "</p>";

    mywindow = window.open('', '', 'width=300, height=300, top='+topwindow+', left=0, resizable=no');

    //var mywindow = window.open('', '', 'width=300, height=300');
    mywindow.document.write(primera_palabra,ultima_palabra,num_palabras,ordenar);
    
    intervalo= setInterval(moverVentana,20);

}



function moverVentana(){
    

    if(contador == left){
        clearInterval(intervalo)
    }else{
        if(mywindow) {
            mywindow.moveTo(contador,topwindow);
            mywindow.left = contador
            mywindow.focus();
            contador++;
        }
        
    }

    



}


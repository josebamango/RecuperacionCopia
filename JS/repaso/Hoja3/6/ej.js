addEventListener('load', inicio, false);

 
 function inicio(){

        let boton = document.getElementById('boton');
        
        boton.addEventListener('click', function (){ 
        
        let fecha1 = document.getElementById('fecha').value;
        let radios= document.querySelector('input[name=operacion]:checked').value;
        let num = document.getElementById('num').value;
        let numpar=parseInt(num);
      let p = document.getElementById('txt');
      
      p.innerHTML=fecha(fecha1, radios, numpar);

          }, false);
        
};

 function fecha(fecha, operacion, num) {
  let fe=new Date(fecha);
  
   for (let index = 0; index < operacion.length; index++) {
     if (operacion="suma") {
      fe.setDate(fe.getDate()+num);
     }else if (operacion="resta") {
      fe.setDate(fe.getDate()-num);  
     }
   }
   return fe;
  }
     
 
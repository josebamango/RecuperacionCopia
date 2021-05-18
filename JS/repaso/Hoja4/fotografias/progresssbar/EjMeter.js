addEventListener('load', inicio, false);

  // Variables globales
  var tiempoB;

  function inicio()
   {

      // Definir variables
      let barraProgreso = document.querySelector("#pBarraP");
      let arrayFotos = new Array();


      llenarArrayFotos(arrayFotos);

      // FUNCIONAMIENTO BARRA
      tiempoB = setInterval(function(){
                                        // Iniciamos el funcionamiento de la barra
                                        arrancarBarraP(barraProgreso);
                                      }, 550); 
      
                                      
      

   }

  function arrancarBarraP(barra)
   {
      // Si el valor de la barra es menor al máximo
      if (barra.value < barra.max)
       {
          // Aumentar el progreso d ela barra
          barra.value += 10; 
       }
      else
       {
          // Paramos la barra
          pararBarraP();

          // Eliminamos el nodo de la barra 
          document.body.removeChild(barra); 
       }
   }
  
  function pararBarraP()
   {
      clearInterval(tiempoB);
   }
   
  function llenarArrayFotos(arrayF)
   {
      let f1 = new Foto("1.jpg", "Conejo",)
      let f2 = new Foto("2.jpg", "Elefante" )
      let f3 = new Foto("3.jpg", "Luna roja")
      let f4 = new Foto("4.jpg", "Tormenta")
      let f5 = new Foto("5.jpg", "Rinoceronte")
      let f6 = new Foto("6.jpg", "Niño")
      let f7 = new Foto("7.jpg", "Niña")
      let f8 = new Foto("8.jpg", "Ranas")
      let f9 = new Foto("9.jpg", "Flamencos en la playa")

   }
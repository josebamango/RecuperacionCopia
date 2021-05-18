addEventListener('load', inicio, false);

  function inicio()
   {
      // Declarar array
      let arrayNumeros = new Array();

      // Declarar variables
      let cajaNumero = document.querySelector("#cNum");
      let cajaInfo = document.querySelector("#cInfo");
      let botonGuardarN = document.querySelector("#bGuardarN");
      let botonVisualizar = document.querySelector("#bVisualizarN"); 


      // EVENTOS
      botonGuardarN.addEventListener('click', function()
       {   
          if ( !isNaN( parseInt(cajaNumero.value) ) )
           {
              // Llenar array
              arrayNumeros.push( cajaNumero.value );

              // Limpiar la caja de entrada
              borrarCajaNumero(cajaNumero);
           }
          else
           {
              alert("Por favor, introduzca un número entero.");
              
              // Limpiar la caja de entrada
              borrarCajaNumero(cajaNumero);
           }

       }, false);

      botonVisualizar.addEventListener('click', function()
       {   
          if (arrayNumeros.length > 0)
           {    
              // Contadores
              let nPares = 0;
              let nInpares = 0;

              for (let n in arrayNumeros)
               {
                  if ( esPar(arrayNumeros[n]) )
                   {
                      nPares++;
                   }
                  else
                   {
                      nInpares++;
                   }
               }
              
              cajaInfo.innerHTML = `Números pares: <b>${nPares}</b><br>`;
              cajaInfo.innerHTML += `Números inpares: <b>${nInpares}</b>`;

              console.log(arrayNumeros);
           }
          else
           {
              alert("¡Error! No se puede visualizar ningún dato, ya que no se ha introducido ningún número.");
           }

       }, false);


   }

  
  function esPar(num)
   {  
      let par;

      if (num % 2 == 0)
       {
          par = true;
       }
      else
       {
          par = false;
       }

      return par;
   }

  function borrarCajaNumero(cajaN)
   {
      cajaN.value = "";
      cajaN.focus();
   }
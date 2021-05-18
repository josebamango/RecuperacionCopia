addEventListener('load', inicio, false);

  function inicio()
   {
      // Declarar variables
      let cajaTexto = document.querySelector("#cTexto");
      let labelResultado = document.querySelector("#lResultado");
      let botonEnviar  = document.querySelector("#bEnviar");
      let botonBorrar  = document.querySelector("#bBorrar");


      // EVENTOS
      botonEnviar.addEventListener('click', function()
       {   
          labelResultado.innerHTML = composicionCadena(cajaTexto.value);    
       }, false);

      botonBorrar.addEventListener('click', function()
       {   
          cajaTexto.value = "";
          labelResultado.innerHTML = "";
		  cajaTexto.focus();
       }, false);
    

   }
	
  // FUNCIONES
  function composicionCadena(cadenaT)
   {
      // Definir variables
      let mensaje = "";
      let cadenaMayus = cadenaT.toUpperCase();
      let cadenaMinus = cadenaT.toLowerCase(); 

      switch(true)
       {
          case (cadenaT == cadenaMayus):
            mensaje += `La cadena está compuesta solo por <b>mayúsculas.</b>`;
            break;
          case (cadenaT == cadenaMinus):
            mensaje += `La cadena está compuesta solo por <b>minúsculas.</b>`;
            break;
          default:
            mensaje += `La cadena está compuesta por una mezcla de mayúsculas y minúsculas.`
            break;
       }

      return mensaje;

   }
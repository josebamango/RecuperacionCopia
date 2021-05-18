  addEventListener('load', inicio, false);

  // Declarar array de habitaciones
  var arrayHabitaciones = new Array(
                                      new Array(6),
                                      new Array(6),
                                      new Array(6)
                                   );

  // Declarar variables
  var rutaImgs = "imágenes/perfíl/";

  function inicio()
   {
      // Definir variables
      let imagenesE = document.querySelectorAll("img[name='imgE']");
      let entradaFotografia = document.querySelector("#fotoP");

      // Definir botones
      let botonAsignarF = document.querySelector("#bAsignarF");
      let botonAltaP = document.querySelector("#bAltaP");
      let botonAplicarT = document.querySelector("#bAplicarT");

      // Definir select
      let selectPacienteF = document.querySelector("#sPacienteF");
      let selectTratamientoP = document.querySelector("#sTratamientoP");

      // Definir checkBoxs
      let checkBoxsTratamientos = document.querySelectorAll("#tratamientosP");


      // Definir contenedores de texto
      let imagenP = document.querySelector("#imgP");
      let labelPlantaP = document.querySelector("#plantaP");
      let labelHabitacionP = document.querySelector("#habitacionP");
      let labelCodigoP = document.querySelector("#codP");
      let labelTratamientoP = document.querySelector("#tratP"); 


      // EVENTOS
      
      // Asignar eventos a las imagenes
      for (let i=0; i<imagenesE.length; i++)
       {
          
          // Evento Clock
          imagenesE[i].addEventListener("click", function(){
            
            let planta = this.id.substring(0,1);
            let habitacion = this.id.substring(1,2);

            if ( typeof(arrayHabitaciones[planta-1][habitacion-1]) != "object" )
             {
                // Cambiar la foto a ocupada
                this.src = "imágenes/cama_ocupada.jpg";

                // Crear habitacion
                let h = new Habitacion(planta, habitacion);

                // Llenar el array
                arrayHabitaciones[planta-1][habitacion-1] = h;

                // Añadir option a 'selectPacienteF'
                añadirValorSelect(selectPacienteF, `${planta}${habitacion}`, h.codigoPaciente());

                // Añadir option a 'selectTratamientoP'
                añadirValorSelect(selectTratamientoP, `${planta}${habitacion}`, h.codigoPaciente());

             }
            else
             {
                
             }

            

          }, false);


          // Evento mouseover
          imagenesE[i].addEventListener("mouseover", function(){
            
            let planta = this.id.substring(0,1);
            let habitacion = this.id.substring(1,2);       
            let arrayRutaImg = this.src.split("/");

            // Borrar datos anteriores
            borrarDatosHabitacion(labelHabitacionP, imagenP, labelCodigoP, labelTratamientoP);

            if ( arrayRutaImg[arrayRutaImg.length-1] == "cama_ocupada.jpg" )
             {
                let habP = arrayHabitaciones[planta-1][habitacion-1];
                datosHabitacionOcupada(habP, labelPlantaP, labelHabitacionP, imagenP, labelCodigoP, labelTratamientoP);
             }
            else
             {
                datosHabitacionLibre(planta, habitacion, labelPlantaP, labelHabitacionP)
             }  
          

          }, false);
          
       }

      
      botonAsignarF.addEventListener("click", function(){

        let textoSeleccion = selectPacienteF.value;

        if (textoSeleccion != "...")
         {
            let arrayCodigoS = textoSeleccion.split("");
            
            if (entradaFotografia.value != "")
             {
                let arrayRutaImg = entradaFotografia.value.split("\\");

                // Asignar foto
                arrayHabitaciones[arrayCodigoS[0]-1][arrayCodigoS[1]-1].foto = arrayRutaImg[2];

                // Borrar input entrada fotografia
                entradaFotografia.value = "";
                
                // Restablecer select
                selectPacienteF.selectedIndex = "...";

             }
            else
             {
                alert("Por favor, selecciona una imágen de perfil.")
             }
         }
        else
         {
            alert("Selecciona una habitación válida para asignarle una fotografía al paciente.");
         }

        
      }, false);


      botonAltaP.addEventListener("click", function(){

        let textoSeleccion = selectPacienteF.value;

        if (textoSeleccion != "...")
         {
            let arrayCodigoS = textoSeleccion.split("");
            let textoCodP = arrayHabitaciones[arrayCodigoS[0]-1][arrayCodigoS[1]-1].codigoPaciente();
            let arrayCodP = textoCodP.substring(2, textoCodP.length).split("/");

            // Vaciar la habitación seleccionada
            arrayHabitaciones[arrayCodigoS[0]-1][arrayCodigoS[1]-1]  = undefined; 

            // Restablecer select
            selectPacienteF.selectedIndex = "...";

            // Cambiar imagen a vacia
            let imgP = document.querySelector(`img[id='${arrayCodP[0]}${arrayCodP[1]}']`);
            imgP.src = "imágenes/cama_libre.jpg";

            // Eliminar option 'sPacienteF'
            let optionP = document.querySelector(`#sPacienteF option[value='${arrayCodP[0]}${arrayCodP[1]}']`)
            selectPacienteF.removeChild(optionP);

            // Eliminar option 'sTratamientoP'
            let optionT = document.querySelector(`#sTratamientoP option[value='${arrayCodP[0]}${arrayCodP[1]}']`)
            selectTratamientoP.removeChild(optionT); 

         }
        else
         {
            alert("Selecciona una habitación válida para dar de alta al paciente.");
         }

        
      }, false);
      
      botonAplicarT.addEventListener("click", function(){

        let textoSeleccion = selectTratamientoP.value;

        if (textoSeleccion != "...")
         {
            let tratamientos;
            let arrayCodigoS = textoSeleccion.split("");

            console.log(arrayCodigoS);

            if (obtenerTMarcados(checkBoxsTratamientos).length > 0)
             {
                // Definir variables
                tratamientos = obtenerTMarcados(checkBoxsTratamientos);
                
                // Vaciar tratamientos si no lo están ya
                arrayHabitaciones[arrayCodigoS[0]-1][arrayCodigoS[1]-1].tratamientosPaciente = new Array();

                for(let tr in tratamientos)
                 {
                    arrayHabitaciones[arrayCodigoS[0]-1][arrayCodigoS[1]-1].asignarTratamiento(tratamientos[tr]);
                 }
                 
                // Borrar datos tratamientos
                borrarTMarcados(checkBoxsTratamientos);
                 
                // Restablecer select
                selectTratamientoP.selectedIndex = "...";
             }
            else
             {
                alert("No hay ningún tratamiento seleccionado.")
             } 
            
         }
        else
         {
            alert("Selecciona una habitación válida para aplicar un tratamiento al paciente.");
         }                                                      

      }, false);


   }

  
  // FUNCIONES
  function añadirValorSelect(select, valor, contenido)
   {
      // Crear el elemento 'option
      let etiqueta = document.createElement("option");
      // Añadir atributo 'value' a 'etiqueta'
      etiqueta.setAttribute("value", `${valor}`);
      // Crear un nodo de texto
      let texto = document.createTextNode(`${contenido}`);
      // Añadir el nodo texto como hijo del nodo 'etiqueta'
      etiqueta.appendChild(texto);
      // Añadir el nodo 'etiqueta' como hijo de 'select'
      select.appendChild(etiqueta);
   }

  
  function datosHabitacionOcupada(habitacionP, lPP, lHP, iP, cP, tP)
   {
      let h = habitacionP;  

      lPP.innerHTML = `<b>Planta: ${h.numPlanta}</b>`;
      lHP.innerHTML = `<b>Habitación: ${h.numHabitacion}</b>`;

      if (h.foto != null)
       {
          iP.src = rutaImgs + h.foto;
       }
      
      cP.innerHTML = `Código Paciente: ${h.codigoPaciente()}`;

      let tratamientos = h.tratamientosPaciente;
      
      if (h.tratamientosPaciente.length > 0)
       {
          let cadena = `<b>Tratamientos: </b> <br><br>`;

          for(let t in tratamientos)
           {
              cadena += `${tratamientos[t]} <br>`;
           }
          
          tP.innerHTML = cadena; 
       }
      
   }
  
  function datosHabitacionLibre(plantaP, habitacionP, lPP, lHP)
   {
      lPP.innerHTML = `<b>Planta: ${plantaP}</b>`;
      lHP.innerHTML = `<b>Habitación: ${habitacionP}</b>`;
   }

  function borrarDatosHabitacion(lHP, iP, cP, tP)
   {
      lHP.innerHTML = `<b>Habitación: </b>`;
      iP.src = "";
      cP.innerHTML = `Código Paciente: `;
      tP.innerHTML = `<b>Tratamientos: </b>`;
   }

  function obtenerTMarcados(checkBoxsT)
   {
      let arrayT = new Array();

      for (let i=0; i<checkBoxsT.length; i++)
       {
          if (checkBoxsT[i].checked)
           {
              arrayT.push(checkBoxsT[i].value); 
           }          
       }

      return arrayT;
   }

  function borrarTMarcados(checkBoxsT)
   {
      let arrayT = new Array();

      for(let i=0; i<checkBoxsT.length; i++)
       {
          checkBoxsT[i].checked = false;     
       }

      return arrayT;
   }
    
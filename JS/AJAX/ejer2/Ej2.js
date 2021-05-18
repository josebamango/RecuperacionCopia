addEventListener('load', inicio, false);

function inicio()
 {
    // Declarar input texto
    let cajaTexto = document.querySelector("#q");

    // Declarar label
    let labelResultado = document.querySelector("#lResultado");


    // EVENTOS
    cajaTexto.addEventListener('keyup', function()
     { 
        envioAjax();
     }, false);


    // FUNCIONES 
    function envioAjax()
     {
        let objetoAjax;
  
        if (window.XMLHttpRequest) 
         {
            objetoAjax = new XMLHttpRequest();
         } 
        else
         {
            if (window.ActiveXObject) 
             {
                objetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
             }
         }
        

        // Datos del formulario
        var datos = new FormData();
        datos.append('q', cajaTexto.value.trim());

        // Método open
        objetoAjax.open("POST", "2.php", true);

        // Método send
        objetoAjax.send(datos);    
        
        objetoAjax.onreadystatechange = mostrarRespuesta;

        function mostrarRespuesta()
         {
            if (objetoAjax.readyState == 4)
             {
                if (objetoAjax.status == 200)
                 {
                    // VALIDO
                    let respuestaTexto = objetoAjax.responseText;

                    // Pintar el resultado
                    labelResultado.innerHTML = `${respuestaTexto}`;

                 }
                else
                 {
                    console.log(`Codigo de error: ${objetoAjax.objetoAjax.status}`);       
                 }
             }
          
         } // Fin mostrarRespuesta()

  
     } // Fin envioAjax()

 }
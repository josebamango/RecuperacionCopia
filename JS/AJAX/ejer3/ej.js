/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
addEventListener('load', inicio, false);


function inicio() {
   
    let img = document.querySelectorAll('img');
    

    for (let i = 0; i < img.length; i++) {
        img[i].id=i+1;
        img[i].addEventListener('click', function (){ 
        envioForm(this.id);
        
          }, false);
        
        
    }
   
 }
    function envioForm(texto) {

        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();

        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        var ruta="meses.php";        

        url=ruta+"?"+"num="+texto;
           
        xhr.open('GET', url, true); 
        
        xhr.send(null);

        xhr.onreadystatechange = muestraContenido;

        function muestraContenido() {
            
            if (xhr.readyState == 4) {
                
                if (xhr.status == 200) {
                    let section=document.getElementById('p');
                    section.innerHTML=xhr.responseText;
                } else {
                    document.getElementById('p').value = "Codigo de error: " + xhr.status;
                }
            }
        }

    }


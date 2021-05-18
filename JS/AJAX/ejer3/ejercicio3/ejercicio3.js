addEventListener('load',inicio,false);

function inicio(){
    var body = document.body;
    var caja = document.createElement('div');
    caja.id="pintar";

        
    var imagenes = document.querySelectorAll('img');
    for(var i=0;i<imagenes.length;i++){
        imagenes[i].addEventListener('click',function(e){
            
                var x=e.clientX;
                var y = e.clientY;
                console.log(x + "/" + y);        
            
            let xhr = new XMLHttpRequest();
   
            let url = "meses.php?num="+this.id;
            
            xhr.open("GET",url,true);
            xhr.send(null);
            
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        
                    caja.innerHTML = xhr.responseText;
                    console.log(xhr.responseText);
                    console.log(x + "/" + y);   
                    caja.setAttribute('position','absolute');
                    caja.setAttribute('style',"top:"+y+"px; position:absolute; left: "+ x + "px;");
                    body.appendChild(caja);
                       
                        
                    }else{
                        console.log(xhr.status);
                        alert("Error" + xhr.status);
                    }
                }
            }
        },false);
        imagenes[i].addEventListener('mouseover',function(){
            caja.remove();
        })
    }
    
   
}
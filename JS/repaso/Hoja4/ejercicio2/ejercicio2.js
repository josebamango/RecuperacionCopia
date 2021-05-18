addEventListener('load',inicio,false);

var array = [];

function inicio(){
    var alta_escondido = document.getElementById('alta_escondido');
    alta_escondido.hidden = true;
    var infoTratamiento = document.getElementById('infoTratamiento');
    infoTratamiento.hidden = true;
    var escondido = document.getElementById('escondido');
    escondido.hidden = true;
    var alertas = document.getElementById('alertas');
    alertas.hidden = true;
    darIngreso();
    var alta = document.getElementById('alta');
    alta.addEventListener('click',darAlta,false);
    var tratamiento = document.getElementById('tratamiento');
    tratamiento.addEventListener('click',elegirTratamiento,false);
    var ver_tratamientos = document.getElementById('ver_tratamientos');
    ver_tratamientos.addEventListener('click',verTodosTratamientos,false);
    
}

function darIngreso(){
    
    var confirmar= document.getElementById('confirmar');
    var habitacion = document.querySelectorAll('img');
    var habitacion_sola = 0;
    var habitacion_elegida = 0;
    var planta = 0;
    
  
    for(var i=0;i<habitacion.length;i++){

        //evento click para elegir habitación
        habitacion[i].addEventListener('click',function(){
            escondido.hidden = false;
            
            habitacion_elegida = this.id;
            planta = habitacion_elegida.substr(0,1);            
            habitacion_sola = habitacion_elegida.substr(2,1);
                    

        },false);

        habitacion[i].addEventListener('mouseenter',function(){
            var informacion = document.getElementById('informacion');

            var plantaEncontrada = false;

            for(var i=0;i<array.length;i++){
                
                var plantaCompleta = array[i].nPlanta + "-" + array[i].nHabitacion;
                if(plantaCompleta == this.id){

                    verInfo = "La habitación " + array[i].nHabitacion + " de la planta " + array[i].nPlanta + " está ocupada por el paciente " + array[i].codPaciente;
                    
                    informacion.innerHTML = verInfo;
                    plantaEncontrada = true;
                }
                
            }

            if(!plantaEncontrada) {
                var habitacion_vacia = this.id;
                var planta_vacia = habitacion_vacia.substr(0,1);            
                var habitacion_sola_vacia = habitacion_vacia.substr(2,1);
                verInfo = "La habitación " + habitacion_sola_vacia + " de la planta " + planta_vacia + " está vacía";
                informacion.innerHTML = verInfo;
            }



        },false);
        
    
    };
    confirmar.addEventListener('click',function(){
        confirmarIngreso(habitacion_elegida,planta,habitacion_sola);
    },false);

   
    

}

function confirmarIngreso(habitacion_elegida,planta,habitacion_sola){

    var imagen_hab = document.getElementById(habitacion_elegida);
    imagen_hab.src = 'x.jpg'; 

    var codPaciente = aleatorio(7);
    var imagen = document.getElementById('foto'); 
    var foto = imagen.files[0].name;
    
    var nuevo_paciente = new Habitahos(planta,habitacion_sola,codPaciente,foto);
    console.log("entra objeto" + nuevo_paciente);
    array.push(nuevo_paciente);
    var alertas = document.getElementById('alertas');
    alertas.hidden = false;
    alertas.innerHTML = "Paciente " + codPaciente + " ha sido ingresada " + "<img src='" + foto + "'>";
    var escondido = document.getElementById('escondido');
    escondido.hidden = true;
}


function aleatorio(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function darAlta(){
    alta_escondido.hidden = false;
    var select = document.createElement('select');
    select.id = "codigoPaciente";
    for(var i=0;i<array.length;i++){
        var option = document.createElement('option');
        option.setAttribute('value',array[i].codPaciente);
        option.innerHTML = array[i].codPaciente;
        select.appendChild(option);
    }
    var pintar_select = document.getElementById('pintar_select');
    pintar_select.appendChild(select);
    
    
    var confirmarAlta = document.getElementById('confirmarAlta');
    confirmarAlta.addEventListener('click',function(){
       var plantaCompleta = 0;
        var codigoPaciente = document.getElementById('codigoPaciente').value;
        for(var i=0;i<array.length;i++){
            if(codigoPaciente == array[i].codPaciente){                
                plantaCompleta = array[i].nPlanta + "-" + array[i].nHabitacion;
                array.splice(i,1);
                
            }
                
        }
        var imagen_hab = document.getElementById(plantaCompleta);
        imagen_hab.src = 'casilla.png';
        alta_escondido.hidden = true; 
        select.remove();
        
        
    },false);
    
    

}

function elegirTratamiento(){
    var add_tratamiento = document.getElementById('add_tratamiento');
    add_tratamiento.hidden = true;
    
    var elegir_paciente = document.getElementById('elegir_paciente');

    infoTratamiento.hidden = false;
    var select = document.createElement('select');
    select.id = "codigoPaciente";
    for(var i=0;i<array.length;i++){
        var option = document.createElement('option');
        option.setAttribute('value',array[i].codPaciente);
        option.innerHTML = array[i].codPaciente;
        select.appendChild(option);
        
    }
    
    infoTratamiento.appendChild(select);

    elegir_paciente.addEventListener('click',guardarTratamiento,false);
    
   
    
    
    
}

function guardarTratamiento(){

    var add_tratamiento = document.getElementById('add_tratamiento');
    add_tratamiento.hidden = false;
    var paciente = document.getElementById('codigoPaciente').value;

    var fotoPaciente = document.getElementById('fotoPaciente');
    for(var i=0;i<array.length;i++){
        if(array[i].codPaciente == paciente){
            fotoPaciente.innerHTML = "<img src='" + array[i].foto + "'>";
        }
    }

    var tratamiento = ["Paracetamol","Ibuprofeno","Descanso","Nolotil"];

    var select2 = document.createElement('select');
    select2.id = "tratamiento_elegido";
    for(var i=0;i<tratamiento.length;i++){
        var option2 = document.createElement('option');
        option2.setAttribute('value',tratamiento[i]);
        option2.innerHTML = tratamiento[i];
        select2.appendChild(option2);
    }
    
    infoTratamiento.appendChild(select2);

    
    add_tratamiento.addEventListener('click',function(){
        var tratamiento_elegido = document.getElementById('tratamiento_elegido').value;
        console.log(tratamiento_elegido);
        var paciente = document.getElementById('codigoPaciente');
        if(!paciente) return;
        var paciente_value = paciente.value;
        for(var i=0;i<array.length;i++){
            if(array[i].codPaciente == paciente_value){
                array[i].asignarTratamiento(tratamiento_elegido);
                alert("Tratamiento asignado correctamente");
            }
        }
        infoTratamiento.hidden = true;
        paciente.remove();
        select2.remove();
        
    },false);

   
}

function verTodosTratamientos(){
    var verTratamientos = document.getElementById('verTratamientos');
    var array_tratamientos = [];
    for(var i=0;i<array.length; i++){
        array_tratamientos += "<p>Codigo Paciente: " + array[i].codPaciente + " Tratamiento: " + array[i].infoTratamientos();
    }

    verTratamientos.innerHTML = array_tratamientos;
}


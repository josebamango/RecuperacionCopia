class Habitahos{
    constructor(nPlanta,nHabitacion,codPaciente,foto){
        this.nPlanta = nPlanta;
        this.nHabitacion = nHabitacion;
        this.codPaciente = codPaciente;
        this.foto = foto;
        this.tratamientos = [];
    }

    info(){
        return "Codigo: " + this.codPaciente + "Planta: " + this.nPlanta + " Habitacion: " + this.nHabitacion + this.foto ;
    }
    
    infoTratamientos(){
        var cadena = "";
        for(var i=0;i<this.tratamientos.length;i++){
             cadena += this.tratamientos[i] + " ";
        }
        return cadena;
    }

    asignarTratamiento(tratamiento){
        this.tratamientos.push(tratamiento);
    }

    
}
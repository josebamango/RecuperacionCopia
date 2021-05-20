class Habitahos {
    constructor(Nhabitacion, estado, fechaEntrada, fechaSalida, dni) {
        this.Nhabitacion = Nhabitacion;
        this.estado = false;
        this.fechaEntrada = fechaEntrada;
        this.fechaSalida = fechaSalida;
        this.dni = dni;
    }


    ver() {
        return "El cliente con DNI: " + this.dni;
    }


}
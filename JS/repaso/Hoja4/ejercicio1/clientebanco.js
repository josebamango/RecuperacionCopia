class ClienteBanco{

    constructor(nombre,saldo,numeroCuenta){
        this.numeroCuenta = numeroCuenta;
        this.nombre = nombre;
        this.saldo = saldo;
    }

    ingreso(cantidad){
        
        this.saldo = (this.saldo + cantidad);
        
    }
    
    retirada(cantidad){
        
        this.saldo = (this.saldo - cantidad);
        
    }
    ver(){

        return "Nombre: " + this.nombre + "<p>Número de Cuenta : " + this.numeroCuenta + "</p><p> Saldo: " + this.saldo + "</p>";
    }

    
}
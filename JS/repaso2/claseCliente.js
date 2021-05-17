function Cliente(numero, nombre, saldo) {
    this.numero = numero;
    this.nombre = nombre;
    this.saldo = saldo;
    this.ingreso=ingreso;
    this.retirada=retirada;
    this.visualizar = mostrar;

}

function mostrar() {
    return `Numero=${this.numero}\nNombre=${this.nombre}\nAño=${this.año}\nSaldo=${this.saldo}`
}

function ingreso(aumento) {
    return this.saldo + aumento;
}

function retirada(decenso) {
    return this.saldo - decenso;
}

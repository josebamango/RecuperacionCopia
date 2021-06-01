function Cliente(nombre, telefono, cp, email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.cp = cp;
    this.email=email;
    this.visualizar = mostrar;

}

function mostrar() {
    return `Nombre=${this.nombre}\nTelefono=${this.telefono}\nCP=${this.cp}\nEmail=${this.email}`
}


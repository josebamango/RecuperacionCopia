function Listado(producto, mercado, ciudad) {
    this.producto = producto;
    this.mercado = mercado;
    this.ciudad = ciudad;
    this.visualizar = visualizar;
}

function visualizar() {
    return `<p>Listado: ${this.producto}</p><p>Mercado: ${this.mercado}</p><p>Ciudad: ${this.ciudad}</p>`;
}
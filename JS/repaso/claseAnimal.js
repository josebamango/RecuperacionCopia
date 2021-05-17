function Libro(titulo, autor, año, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
    this.visualizar = mostrar;
    this.getAutor = getAutor;

}

function mostrar() {
    return `Título=${this.titulo}\nAutor=${this.autor}\nAño=${this.año}\nGénero=${this.genero}`
}

function getAutor(){
    return this.autor;
}
<?php
require_once "Producto.php";
require_once "Alimentacion.php";
require_once "Electronica.php";
require_once "Categoria.php";


class Database
{
    private static $instance = null;
    const DSN = "mysql:host=localhost;dbname=dwes_supermercado";
    const USERNAME = "root";
    const PASSWORD = "";

    private function __construct()
    {
    }

    public static function getInstance(): Database
    {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    private function getConexion(): PDO
    {
        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
        return new PDO(
            self::DSN,
            self::USERNAME,
            self::PASSWORD,
            $opciones
        );
    }

    public function getProductos()
    {
        return array_merge($this->getAlimentacion(), $this->getElectronica());
    }

    public function getAlimentacion()
    {
        $conexion = $this->getConexion();
        $sql = /** @lang MariaDB */
            "SELECT p.codigo, p.precio, p.nombre, p.categoria, a.mes_caducidad, 
                a.anio_caducidad, c.id, c.nombre FROM productos p inner join alimentacion a on p.codigo = a.id_alimentacion 
                inner join categorias c on p.categoria = c.id";
        $consulta = $conexion->query($sql);
        $consulta->bindColumn(1, $id);
        $consulta->bindColumn(2, $precio);
        $consulta->bindColumn(3, $nombreProducto);
        $consulta->bindColumn(4, $idCategoria);
        $consulta->bindColumn(5, $mes);
        $consulta->bindColumn(6, $anio);
        $consulta->bindColumn(7, $nombreCategoria);
        while ($fila = $consulta->fetch(PDO::FETCH_BOUND)) {
            $datos[] = new Alimentacion($id, $precio, $nombreProducto, new Categoria($idCategoria, $nombreCategoria), $mes, $anio);
        }
        return $datos;
    }

    public function getElectronica()
    {
        $conexion = $this->getConexion();
        $sql = /** @lang MariaDB */
            "SELECT p.codigo, p.precio, p.nombre, p.categoria, e.plazo_garantia, 
                c.id, c.nombre FROM productos p inner join electronica e on p.codigo = e.id_electronica 
                inner join categorias c on p.categoria = c.id";
        $consulta = $conexion->query($sql);
        $consulta->bindColumn(1, $id);
        $consulta->bindColumn(2, $precio);
        $consulta->bindColumn(3, $nombreProducto);
        $consulta->bindColumn(4, $idCategoria);
        $consulta->bindColumn(5, $plazo);
        $consulta->bindColumn(6, $nombreCategoria);
        while ($fila = $consulta->fetch(PDO::FETCH_BOUND)) {
            $datos[] = new Electronica($id, $precio, $nombreProducto, new Categoria($idCategoria, $nombreCategoria), $plazo);
        }
        return $datos;
    }

    public function getCategorias()
    {
        $conexion = $this->getConexion();
        $sql = /** @lang MariaDB */
            "SELECT id, nombre from categorias";
        $consulta = $conexion->query($sql);
        $consulta->bindColumn(1, $id);
        $consulta->bindColumn(2, $nombre);
        while ($fila = $consulta->fetch(PDO::FETCH_BOUND)) {
            $datos[] = new Categoria($id, $nombre);
        }
        return $datos;
    }

    public function getProductosByCategoria($idCategoria)
    {
        $conexion = $this->getConexion();
        $sql = /** @lang MariaDB */
            "SELECT p.codigo, p.precio, p.nombre, c.id idCategoria, c.nombre nombreCategoria FROM productos p INNER JOIN categorias c on p.categoria = c.id WHERE c.id = ?";
        $consulta = $conexion->prepare($sql);
        $consulta->bindParam(1, $idCategoria);
        $consulta->execute();
        $consulta->bindColumn(1, $id);
        $consulta->bindColumn(2, $precio);
        $consulta->bindColumn(3, $nombreProducto);
        $consulta->bindColumn(4, $idCategoria);
        $consulta->bindColumn(5, $nombreCategoria);
        while ($fila = $consulta->fetch(PDO::FETCH_BOUND)) {
            $datos[] = new Producto($id, $precio, $nombreProducto, new Categoria($idCategoria, $nombreCategoria));
        }
        return $datos;
    }

}
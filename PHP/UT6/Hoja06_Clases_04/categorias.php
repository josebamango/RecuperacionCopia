<?php
require_once "Database.php";
$categorias = Database::getInstance()->getCategorias();
if (isset($_POST["enviar"])) {
    $productos = Database::getInstance()->getProductosByCategoria($_POST["categorias"]);
}

?>

<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="" method="post">
    <select name="categorias">
        <?php foreach ($categorias as $categoria) : ?>
        <option value="<?= $categoria->getId()?>" <?php  ?> ><?= $categoria->getNombre()?></option>
        <?php endforeach;?>
    </select>
    <input type="submit" name="enviar" value="Enviar">
</form>
<?php if (isset($_POST["enviar"])): ?>
    <table>
        <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoria</th>
        </tr>
        <?php foreach ($productos as $producto) : ?>
            <tr>
                <td><?= $producto->getCodigo() ?></td>
                <td><?= $producto->getNombre() ?></td>
                <td><?= $producto->getPrecio() ?></td>
                <td><?= $producto->getCategoria() ?></td>
            </tr>
        <?php endforeach;?>
    </table>
<?php endif ?>

</body>
</html>

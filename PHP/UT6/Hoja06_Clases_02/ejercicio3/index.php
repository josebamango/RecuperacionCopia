<?php
require_once "Familia.php";
require_once "Urgencia.php";

$fam1 = new Familia("Daniel", 35, "mañana", 5);
$fam2 = new Familia("Joseba", 70, "tarde", 8);
$fam3 = new Familia("Karla", 20, "mañana", 15);

$urg1 = new Urgencia("Alvaro", 33, "tarde", "CI");
$urg2 = new Urgencia("Marcos", 63, "tarde", "CI");
$urg3 = new Urgencia("Ivan", 44, "tarde", "CI");

$medicos = array($fam1, $fam2, $fam3, $urg1, $urg2, $urg3);

mostrarMedicosSenior($medicos);

/**
 * @param array $medicos
 */
function mostrarMedicosSenior(array $medicos): void
{
    $n = 0;
    foreach ($medicos as $medico) {

        $n += $medico->mostrarSeniorTarde();
    }
    echo "Medicos de mas de 60 y de tarde: " . $n;
}

?>
<!doctype html>
<html lang="en">
<head>
    <title>Medicos</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
<div class="container">
    <form action="" method="post">
        <div class="form-group">
            <label for="pacientes">Numero Pacientes</label>
            <input type="number" class="form-control" name="pacientes" id="pacientes"
                   placeholder="Introducir numero de pacientes">
        </div>
        <button type="submit" name="mostrar" class="btn btn-primary">Mostrar</button>
    </form>
    <?php
    if (isset($_POST["mostrar"])) {
        foreach ($medicos as $medico) {
            if ($medico instanceof Familia && $medico->getNumPacientes() >= $_POST["pacientes"]) {
                $medico->mostrarDatos();
            }
        }
    }
    ?>
</div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>
</html>
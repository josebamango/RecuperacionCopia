<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="{{url("/assets/bootstrap/css/bootstrap.min.css")}}" rel="stylesheet">
    <link rel="stylesheet" href="{{url("/assets/css/estilo.css")}}">
    <script type="text/javascript" src="{{url("/assets/js/jquery-3.5.1.min.js")}}"></script>
    <script type="text/javascript" src="{{url("/assets/js/jquery-ui.js")}}"></script>
    <link rel="stylesheet" href="{{url("/assets/css/jquery-ui.css")}}">
    <title>@yield("titulo")</title>
</head>
<body>
@include("layouts.partials.navbar")

<div class="container-fluid">
    @yield("contenido")
</div>

<script src="{{url("/assets/bootstrap/js/bootstrap.min.js")}}"></script>
</body>
</html>

@extends("layouts.master.master")

@section("titulo")
    {{$animal->especie}}
@endsection

@section("contenido")
    <div class="row container">

        <div class="col-sm-3"><img class="img-fluid rounded-circle" src="{{asset("storage/img")}}/{{$animal->imagen}}"
                                   alt="imagen de {{$animal->especie}}"></div>
        <div class="col-sm-9">
            <div class="row">
                @if(session("mensaje"))
                    <h3>{{session("mensaje")}}</h3>
                @endif
                <h1>{{$animal->especie}} ({{$animal->getedad()}} años)</h1>
            </div>
            <div class="row">
                <h5>Peso:</h5>
                <p>{{$animal->peso}} kg</p>
            </div>
            <div class="row">
                <h5>Altura:</h5>
                <p>{{$animal->altura}} cm</p>
            </div>
            <div class="row">
                <h5>Descripción:</h5>
                <p>{{$animal->descripcion}}</p>
            </div>
            <div class="row">
                <h5>Revisiones:</h5>
                <ul>
                @foreach($animal->revisiones as $revision)
                    <li>{{$revision->fecha}}: {{$revision->descripcion}}</li>
                @endforeach
                </ul>
            </div>
            <div class="row d-inline">
                <a href="{{route('animales.edit' , $animal)}}"><input class="btn btn-danger" type="button" value="Editar"></a>
                <a href="{{route('revisiones.create' , $animal)}}"><input class="btn btn-success" type="button" value="Añadir Revision"></a>
                <a href="{{route('animales.index')}}"><input class="btn btn-dark" type="button" value="Volver al listado"></a>
            </div>
        </div>
    </div>
@endsection

@extends("layouts.master")

@section("titulo")
    Inicio
@endsection

@section("contenido")
    <div class="row">
        @foreach( $animales as  $animal )
            <div class="col-xs-12 col-sm-6 col-md-4 mb-4">
                <div class="card text-white bg-info" style="width: auto;">
                    <a href="{{ route('animales.show' , $animal->id) }}">
                        <img class="card-img-top" src="/storage/images/{{$product->image}}"
                             style="height:400px"/>
                    </a>
                    <div class="card-body">
                        <h4 class="card-title text-center">{{$animal->especie}}</h4>
                    </div>
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item">Alimentacion: {{$animal->alimentacion}}</li>
                        <li class="list-group-item">Peso: {{$animal->peso}}kg</li>
                        <li class="list-group-item">Altura: {{$animal->altura}}cm</li>
                    </ul>
                </div>
            </div>
        @endforeach
    </div>
@endsection



@extends("layouts.master")

@section("titulo")
    Inicio
@endsection

@section("contenido")
    <div class="row">
        @foreach( $animales as  $animal )
            <div class="col-xs-12 col-sm-6 col-md-4 mb-4">
                <div class="card text-white bg-info" style="width: 21rem;">
                    <a href="{{ route('animales.show' , $animal)}}">
                        <img class="card-img-top" src="{{asset('assets/imagenes/')}}/{{$animal->imagen}}"
                             style="height:200px"/>
                    </a>
                    <div class="card-body">
                        <h4 class="card-title text-center">{{$animal->especie}}</h4>
                    </div>
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item">Alimentacion: {{$animal->alimentacion}}</li>
                        <li class="list-group-item">Peso: {{$animal->peso}}kg</li>
                        <li class="list-group-item">Altura: {{$animal->estatura}}cm</li>
                    </ul>
                </div>
            </div>
        @endforeach
    </div>
@endsection



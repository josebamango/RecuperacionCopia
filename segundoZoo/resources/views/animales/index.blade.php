@extends("layouts.master.master")

@section("titulo")
    Listado animales
@endsection

@section("contenido")
    <div class="row">
        @foreach($animales as $clave => $animal)
            <div class="card m-1 bg-light border-secondary" style="width: 18rem;">
                <img class="card-img-top" src="{{asset("storage/img")}}/{{$animal->imagen}}" alt="Imagen de {{$animal->especie}}">
                <div class="card-body">
                    <h3 class="card-title">{{$animal->especie}}</h3>
            {{--        <h5>Nº Revisiones: {{count($animal->revisiones)}}</h5>
                    <h5>Cuidadores:</h5>
                    <ul>
                        @foreach($animal->cuidadores as $cuidador)
                            <li>{{$cuidador->nombre}}</li>
                        @endforeach
                    </ul>--}}
                    <a href="{{ route('animales.show' , $animal) }}" class="btn btn-primary">Más información</a>
                </div>
            </div>
        @endforeach
    </div>
@endsection

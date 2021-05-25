@extends('layouts.master')
@section('titulo')
    Zoológico
@endsection
@section('contenido')
    <div class="row">
        @foreach( $arrayAnimales as $clave => $animal )
            <div class="col-xs-12 col-sm-6 col-md-4 ">
                <a href="{{ route('animales.show' , $clave ) }}">
                    <img src="{{$animal['imagen']}}" style="height:200px"/>
                    <h4 style="min-height:45px;margin:5px 0 10px 0">
                        {{$animal['especie']}}
                    </h4>
                </a>
            </div>
        @endforeach
    </div>
@endsection

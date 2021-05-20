@extends("layouts.master.master")

@section("titulo")
    Crear Revision
@endsection

@section("contenido")
    <div class="row">
        <div class="offset-md-3 col-md-6">
            <div class="card">
                <div class="card-header text-center">Crear revision de {{$animal->especie}}</div>
                <div class="card-body"
                     style="padding:30px">
                    <form action="{{route("revisiones.store")}}" method="post">
                        @csrf
                        <input type="hidden" name="animal_id" value="{{$animal->id}}" >
                        <div class="form-group">
                            <label for="fecha">Fecha: </label>
                            <input type="date" name="fecha" id="fecha" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="descripcion">Descripcion:</label>
                            <textarea name="descripcion" id="descripcion" cols="30" rows="10" class="form-control" required></textarea>
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-success" style="padding:8px 100px;margin-top:25px;">
                                Crear Revision
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

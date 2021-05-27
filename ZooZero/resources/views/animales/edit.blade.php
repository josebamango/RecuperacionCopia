@extends("layouts.master")

@section("titulo")
    Editar animal
@endsection

@section("contenido")
    <div class="row">
        <div class="offset-md-3 col-md-6">
            <div class="card">
                <div class="card-header text-center">Editar animal</div>
                <div class="card-body"
                     style="padding:30px">
                    <form action="{{route("animales.update", $animal)}}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method("put")
                        <div class="form-group">
                            <label for="especie">Especie</label>
                            <input type="text" name="especie" id="especie" class="form-control" required
                                   value="{{$animal->especie}}">
                        </div>
                        <div class="form-group">
                            <label for="peso">Peso: </label>
                            <input type="number" step="any" class="form-control" name="peso" value="{{$animal->peso}}"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="altura">Altura: </label>
                            <input type="number" step="any" class="form-control" name="altura"
                                   value="{{$animal->altura}}"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="fechaNacimiento">Fecha de nacimiento: </label>
                            <input type="date" class="form-control" name="fechaNacimiento"
                                   value="{{$animal->fechaNacimiento}}"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="alimentacion">Tipo de alimentación: </label>
                            <input type="text" class="form-control" name="alimentacion"
                                   value="{{$animal->alimentacion}}"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="descripcion">Descripción:</label>
                            <textarea name="descripcion"
                                      id="descripcion"
                                      class="form-control"
                                      rows="3">{{$animal->descripcion}}</textarea>
                        </div>
                        <div class="form-group">
                            <label for="imagen">Imagen:</label>
                            <input type="file" class="form-control" name="imagen">
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-success" style="padding:8px 100px;margin-top:25px;">
                                Editar
                                animal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

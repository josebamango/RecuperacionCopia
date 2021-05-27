@extends("layouts.master")

@section("titulo")
    Crear Animal
@endsection

@section("contenido")
    <div class="row">
        <div class="offset-md-3 col-md-6">
            <div class="card">
                <div class="card-header text-center">Añadir animal</div>
                <div class="card-body"
                     style="padding:30px">
                    <form action="{{route("animales.store")}}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="especie">Especie</label>
                            <input type="text" name="especie" id="especie" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="peso">Peso: </label>
                            <input type="number" step="any" class="form-control" name="peso" required>
                        </div>
                        <div class="form-group">
                            <label for="altura">Altura: </label>
                            <input type="number" step="any" class="form-control" name="altura" required>
                        </div>
                        <div class="form-group">
                            <label for="fechaNacimiento">Fecha de nacimiento: </label>
                            <input type="date" class="form-control" name="fechaNacimiento" required>
                        </div>
                        <div class="form-group">
                            <label for="alimentacion">Tipo de alimentación: </label>
                            <input type="text" class="form-control" name="alimentacion" required>
                        </div>
                        <div class="form-group">
                            <label for="descripcion">Descripción:</label>
                            <textarea name="descripcion"
                                      id="descripcion"
                                      class="form-control"
                                      rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="imagen">Imagen:</label>
                            <input type="file" class="form-control" name="imagen">
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-success" style="padding:8px 100px;margin-top:25px;">
                                Añadir
                                animal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

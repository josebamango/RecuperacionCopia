  function Habitacion(numPlanta, numHabitacion)
   {
      this.numPlanta = numPlanta;
      this.numHabitacion = numHabitacion;
      this.codigoPaciente = function()
                              {
                                return "P " + this.numPlanta + "/" + this.numHabitacion;   
                              };
      this.foto;
      this.tratamientosPaciente = new Array();
      this.info = info;
      this.asignarTratamiento = añadirT;
   }

	function info()
	 {
	 	  return "Número de Planta: " + this.numPlanta + ", Número de Habitación: " + this.numHabitacion + ", Código Paciente: " + this.codigoPaciente();
	 }

  function añadirT(TipoTratamiento)
   {
      this.tratamientosPaciente.push(TipoTratamiento);
   }       
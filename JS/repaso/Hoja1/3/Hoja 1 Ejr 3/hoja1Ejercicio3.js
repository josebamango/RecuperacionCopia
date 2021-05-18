addEventListener('load', inicio, false);
var arrayCandidatos = new Array();

function inicio()
{
	let botonInforme = document.getElementById('informe');
	let botonVerTodos = document.getElementById('verTodos');

	botonInforme.addEventListener('click', function()
	{
		generarInforme();
	}, false);

	botonVerTodos.addEventListener('click', function()
	{
		if(arrayCandidatos.length > 0)
		{
			todosCandidatos();
		}
		else
		{
			alert('No hay informes de candidatos');
		}
	}, false);
}

function generarInforme()
{
	let nombre = document.getElementById('nomCandidato').value;
	let realizadas = document.getElementById('realizadas').value;
	let correctas = document.getElementById('correctas').value;

	if(!verificarCandidato(nombre))
	{
		capacitacion(nombre, realizadas, correctas);
	}
	else
	{
		alert('El candidato ya existe');
	}
}

function verificarCandidato(nombre)
{
	let encontrado = false;
	if(arrayCandidatos.length > 0)
	{
		for (let i in arrayCandidatos)
		{
			if(arrayCandidatos[i][0] == nombre)
			{
				encontrado = true;
			}
		}
	}
	return encontrado;
}

function verificarNumero(num)
{
	let valido = true;
	if(isNaN(num))
	{
		valido = false;
		alert(`${num} no es di tipo numérico`);
	}
	return valido;
}

function capacitacion(candidato, num1, num2)
{
	let todosValidos = false;

	if(candidato && verificarNumero(num1) && verificarNumero(num2))
	{
		let int1 = parseInt(num1);
		let int2 = parseInt(num2);
		if(int2 <= int1)
		{
			todosValidos = true;
			let nivel = '';
			let porcentaje = ((int2*100)/int1).toFixed(2);
			if(porcentaje >= 90)
			{
				nivel = 'Superior';
			}
			else if(porcentaje >= 75 && porcentaje < 90)
			{
				nivel = 'Medio'
			}
			else if(porcentaje >= 50 && porcentaje <75)
			{
				nivel = 'Bajo';
			}
			else
			{
				nivel = 'Fuera de nivel';
			}
			let nuevoCandidato = [candidato, nivel, `${porcentaje}%`];
			document.getElementById('resInforme').value = `Nivel: ${nivel} - Porcentaje: ${porcentaje}%`;
			arrayCandidatos.push(nuevoCandidato);
		}
		else
		{
			alert('Las preguntas correctas no pueden ser mayores que las realizadas');
		}
	}
	else
	{
		alert('Datos incorrectos');
	}
	return todosValidos;
}

function todosCandidatos()
{
	let mensaje = '<table><tr><th>Nombre</th><th>Nivel</th><th>Porcentaje</th></tr>';
	for(let i in arrayCandidatos)
	{
		mensaje += '<tr>';
		for(let j in arrayCandidatos[i])
		{
			mensaje += `<td>${arrayCandidatos[i][j]}</td>`;
		}
		mensaje += '</tr>';
	}
	mensaje += '</table>';
	document.getElementById('todos').innerHTML = mensaje;
}

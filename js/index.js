document.addEventListener("DOMContentLoaded", function () {
    const formularioAlumnos = document.getElementById("formularioAlumnos");
    const resultadosElement = document.getElementById("resultados");
    const historialBtn = document.getElementById("historialBtn");
    const historialContainer = document.getElementById("historialContainer");

    formularioAlumnos.addEventListener("submit", function (event) {
        event.preventDefault();  //Esto evita que el formulario se envie y se refresque la pagina

        //Variables que se utilizarán en gran mayoria del codigo
        const nombre = document.getElementById("nombreAlumnos").value;
        const calificacion1 = parseFloat(document.getElementById("calificacion1Alumnos").value);
        const calificacion2 = parseFloat(document.getElementById("calificacion2Alumnos").value);
        const materia = document.getElementById("materiaAlumnos").value;

        //Esto funcionaria en el caso de que el numero ingresado no este entre 0 y 10
        if (isNaN(calificacion1) || isNaN(calificacion2) || calificacion1 < 0 || calificacion1 > 10 || calificacion2 < 0 || calificacion2 > 10) {
            mostrarError("Las calificaciones ingresadas no son válidas. Por favor, ingrese valores entre 0 y 10.");
            return;
        }

        //En caso de que el nombre sea otra cosa distinta a un nombre:
        if (siEsUnNumero(nombre)) {
            mostrarError("El nombre ingresado no es válido. Por favor, ingrese un nombre válido.");
            return;
        }

        //En caso de que la materia sea otra cosa distinta a una materia:
        if (siEsUnNumero(materia)) {
            mostrarError("La materia ingresada no es válida. Por favor, ingrese un nombre que corresponda a una materia.");
            return;
        }

        const promedio = (calificacion1 + calificacion2) / 2;
        const condicion2 = condicion(promedio);

        //Esto va a limpiar el contenido anterior en caso de que haya resultados previos
        resultadosElement.innerHTML = "";

        //Muestra los resultados de los promedios
        const estudianteResult = document.createElement("p");
        estudianteResult.textContent =
            "El estudiante " +
            nombre +
            " obtuvo un Promedio de: " +
            promedio +
            ", en la materia " +
            materia +
            ", por lo tanto su condición actual es: " +
            condicion2;

        resultadosElement.appendChild(estudianteResult);

        //Esto va a guardar los resultados en el local storage
        const estudiantesGuardados = JSON.parse(localStorage.getItem("estudiantes")) || [];
        const nuevoEstudiante = {
            nombre,
            promedio,
            materia,
            condicion2,
        };
        estudiantesGuardados.push(nuevoEstudiante);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantesGuardados));

        //Esto va a limpiar los campos del formulario
        document.getElementById("nombreAlumnos").value = "";
        document.getElementById("calificacion1Alumnos").value = "";
        document.getElementById("calificacion2Alumnos").value = "";
        document.getElementById("materiaAlumnos").value = "";
    });

    //Aplicando una libreria (sweet alert), y ademas aplicando operadores ternarios
    function condicion(promedio) {
        const mensaje = promedio >= 6
            ? {
                icon: 'success',
                title: '¡APROBADO!',
                text: 'El estudiante ha sido aprobado con éxito.',
            }
            : {
                icon: 'error',
                title: 'DESAPROBADO',
                text: 'El estudiante no ha alcanzado el promedio mínimo para aprobar.',
            };

        Swal.fire(mensaje);

        return promedio >= 6 ? "APROBADO" : "DESAPROBADO";
    }

    //Esta funcion se utiliza para mostrar el historial de promedios, en caso de que no haya, indica que "No existe"
    function mostrarHistorial() {
        const estudiantesGuardados = JSON.parse(localStorage.getItem("estudiantes")) || [];

        if (estudiantesGuardados.length === 0) {
            historialContainer.textContent = "No existe ningún promedio aún en el historial.";
            return;
        }

        historialContainer.innerHTML = ""; // Esto va a limpiar contenido anterior

        const historialHeader = document.createElement("h2");
        historialHeader.textContent = "El historial de promedios se ve a continuación:";  //Creando algunos estilos a traves del archivo JS
        historialHeader.style.fontSize = "16px";
        historialHeader.style.textAlign = "center";
        historialHeader.style.margin = "10px 0";
        historialContainer.appendChild(historialHeader);

        estudiantesGuardados.forEach(estudiante => {
            const historialItem = document.createElement("p");
            historialItem.textContent =
                "El estudiante " +
                estudiante.nombre +
                " obtuvo un Promedio de: " +
                estudiante.promedio +
                ", en la materia " +
                estudiante.materia +
                ", con condición: " +
                estudiante.condicion2;

            historialContainer.appendChild(historialItem);
        });
    }

    historialBtn.addEventListener("click", function () {
        historialContainer.innerHTML = ""; // Esto va a limpiar el contenido anterior
        mostrarHistorial();
    });

    //Este evento sirve para mostrar el historial al cargar la página si se tocó el input Historial de promedios
    if (localStorage.getItem("estudiantes")) {
        historialBtn.addEventListener("click", function () {
            mostrarHistorial();
        });
    }
});

function condicion(promedio) {
    if (promedio >= 6) {
        return "APROBADO";
    } else {
        return "DESAPROBADO";
    }
}

function siEsUnNumero(value) {
    return !isNaN(value);
}

function mostrarError(message) {
    const errorElement = document.createElement("p");
    errorElement.textContent = message;
    errorElement.style.color = "red";
    resultadosElement.innerHTML = ""; //Esto va a limpiar los resultados anteriores
    resultadosElement.appendChild(errorElement);
}
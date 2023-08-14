document.addEventListener("DOMContentLoaded", function () {
    const formularioAlumnos = document.getElementById("formularioAlumnos");
    const resultadosElement = document.getElementById("resultados");

    formularioAlumnos.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe y refresque la página

        const nombre = document.getElementById("nombreAlumnos").value;
        const calificacion1 = parseFloat(document.getElementById("calificacion1Alumnos").value);
        const calificacion2 = parseFloat(document.getElementById("calificacion2Alumnos").value);

        //En caso de que no sea un numero:
        if (isNaN(calificacion1) || isNaN(calificacion2) || calificacion1 < 0 || calificacion1 > 10 || calificacion2 < 0 || calificacion2 > 10) {
            mostrarError("Las calificaciones ingresadas no son válidas. Por favor, ingrese valores entre 0 y 10.");
            return;
        }
        //En caso de que el nombre sea otra cosa distinta a un nombre:
        if (siEsUnNumero(nombre)) {
            mostrarError("El nombre ingresado no es válido. Por favor, ingrese un nombre válido.");
            return;
        }

        const promedio = (calificacion1 + calificacion2) / 2;
        const condicion2 = condicion(promedio);

        // Limpia el contenido anterior en caso de que haya resultados previos
        resultadosElement.innerHTML = "";

        // Mostrar los resultados en el elemento "resultados"
        const estudianteResult = document.createElement("p");
        estudianteResult.textContent =
            "El estudiante " +
            nombre +
            " obtuvo un Promedio de: " +
            promedio +
            ", por lo tanto su condición actual es: " +
            condicion2;

        resultadosElement.appendChild(estudianteResult);

        // Guardar los resultados en el Local Storage
        const estudiantesGuardados = JSON.parse(localStorage.getItem("estudiantes")) || [];
        const nuevoEstudiante = {
            nombre,
            promedio,
            condicion2,
        };
        estudiantesGuardados.push(nuevoEstudiante);
        localStorage.setItem("estudiantes", JSON.stringify(estudiantesGuardados));
    });
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
    resultadosElement.innerHTML = ""; // Limpiar resultados anteriores
    resultadosElement.appendChild(errorElement);
}

let cantidadAlumnos = 0

do{
    cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"))
} while (isNaN(cantidadAlumnos)) 

function condicion(promedio){

    //Si el promedio es mayor a 6, devolvemos promedio y aprobado
    if (promedio >= 6){
        return "APROBADO"
    }

    //Si el promedio es menor a 6, devolvemos promedio y desaprobado
    else{
        return "DESAPROBADO"
    }
} 

for (let i = 1; i <= cantidadAlumnos; i++){

//Pedimos que ingrese el nombre del estudiante
let nombre = prompt("Ingrese el nombre del alumno")

//Pedimos que ingrese la nota 1 del estudiante
let nota1 = 0
do{
    nota1 = parseInt(prompt("Ingrese la nota 1 del estudiante"))
} while (isNaN(nota1) || nota1 <= 0 || nota1 > 10) 

//Pedimos que ingrese la nota 2 del estudiante
let nota2 = 0
do{
    nota2 = parseInt(prompt("Ingrese la nota 2 del estudiante "))
} while (isNaN(nota2) || nota2 <= 0 || nota2 > 10) 

//calculamos el promedio aca directamente y le pasamos como parametro a la funcion, solo el promedio
let promedio = (nota1 + nota2) / 2

//llamamos a la funcion y le pasamos los parametros de nota1 y nota2, pero como la funcion nos retorna 2 valores, guardamos esos 2 valores en 2 variables e igualamos a la funcion
let condicion2 = condicion(promedio)

console.log ("El estudiante " +  nombre + ", obtuvo un promedio de " + promedio + " por lo que su condición actual es: " + condicion2 + ".")

}
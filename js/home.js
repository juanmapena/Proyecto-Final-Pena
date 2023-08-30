const navbar = document.getElementById('navbar');
const menuIcono = document.querySelector('.menuIcono');

// Crea el array de anclas y sus nombres
const anclas = [
  { name: 'Home', link: "home.html" },
  { name: 'Calculadora', link: "index.html" }];

// Crea elementos de lista y anclaje y agrega al navbar
anclas.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = item.name;
  a.href = item.link;
  li.appendChild(a);
  navbar.appendChild(li);
})


// Esto seria el codigo para el boton que despliega anclas
menuIcono.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


//Utilizando javascript asincronico a traves de una API de un sitio web, donde se realiza una busqueda de universidades Estado Unidenses.

document.addEventListener("DOMContentLoaded", function () {
  const contenidoContainer = document.getElementById("contenidoContainer");

  const apiKey = "fWawPzVS8CHL4t8r692J68VULDN2C2WFqlA2Aebi"; // Se reemplaza el apyKey que la misma api me pide para hacer peticiones
  const apiUrl = `https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${apiKey}&school.degrees_awarded.highest=bachelors`;

  // Se crea un elemento h1 para mostrar la informacion
  const tituloElement = document.createElement("h1");
  tituloElement.textContent = "Luego de graduarte en Borcelle Academy, únete a nuestras mejores universidades del país";
  tituloElement.style.color = "white";
  tituloElement.style.textAlign = "center";
  tituloElement.style.fontSize = "24px";
  tituloElement.style.marginBottom = "20px";
  contenidoContainer.appendChild(tituloElement);

  //Se realiza la busqueda a traves del metodo fetch
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const parrafosContainer = document.createElement("div");
          parrafosContainer.style.display = "flex";  //manipulando estilos desde Javascript
          parrafosContainer.style.justifyContent = "flex-end";
          parrafosContainer.style.alignItems = "flex-start";
          parrafosContainer.style.flexWrap = "wrap"; 
          parrafosContainer.style.marginRight = "20px";

          data.results.forEach(institucion => {
              const institucionElement = document.createElement("p");
              institucionElement.textContent = " | " + institucion.school.name;
              institucionElement.style.color = "white";
              institucionElement.style.fontSize = "18px";
              institucionElement.style.margin = "5px 10px";
              parrafosContainer.appendChild(institucionElement);
          });

          contenidoContainer.appendChild(parrafosContainer);
      })
      .catch(error => {
          console.error("Error al cargar los datos:", error);
      });
});


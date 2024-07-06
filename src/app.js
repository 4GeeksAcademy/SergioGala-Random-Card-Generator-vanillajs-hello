// Arreglos para los valores de las cartas y los palos
const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const suits = ["&hearts;", "&diams;", "&clubs;", "&spades;"];

// Variables globales
let intervalId; // ID del intervalo para la generación automática
let cardCount = 0; // Contador de cartas generadas

// Función para generar una carta aleatoria
function generateRandomCard() {
  const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  const isRedSuit = randomSuit === "&hearts;" || randomSuit === "&diams;";
  const suitClass = isRedSuit ? "red" : "";

  // Las variables del palo (${randomSuit}) pueden ser suprimidas si se desea, ya que solo son necesarias para aplicar clases dinámicas de estilo
  const cardHtml = `
    <div class="card">
      <div class="top-left suit ${suitClass}">${randomSuit}</div>
      <div class="top-right suit ${suitClass}">${randomSuit}</div> 
      <div class="rank">${randomRank}</div>
      <div class="bottom-left suit ${suitClass}">${randomSuit}</div>
      <div class="bottom-right suit ${suitClass}">${randomSuit}</div>
    </div>
  `;

  // Agregar la carta al contenedor
  document.getElementById("cardContainer").innerHTML += cardHtml;

  // Incrementar el contador de cartas
  cardCount++;

  // Si hemos generado 5 cartas, detener el intervalo
  if (cardCount === 5) {
    clearInterval(intervalId);
  }
}

// Función para iniciar/detener la generación automática de cartas
function toggleAutoGenerate() {
  const button = document.getElementById("toggleButton");

  // Si el intervalo está activo, detenerlo
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    button.textContent = "La big blind se lleva el bote ";
  } else {
    // Iniciar la generación automática cada 5 segundos
    intervalId = setInterval(generateRandomCard, 5000);
    button.textContent =
      "Crupier para ya de tirar cartas pls(En el primer ciclo tira 5 max)luego el bucle se puede volver a lanzar para que sea";
  }
}

// Asignar evento click al botón
document
  .getElementById("toggleButton")
  .addEventListener("click", toggleAutoGenerate);

// Función para generar una sola carta aleatoria
function generateSingleCard() {
  const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const suitClass =
    randomSuit === "&hearts;" || randomSuit === "&diams;" ? "red" : "";

  const cardHtml = `
    <div class="card">
      <div class="top-left suit ${suitClass}">${randomSuit}</div>
      <div class="rank">${randomRank}</div>
      <div class="bottom-right suit ${suitClass}">${randomSuit}</div>
      <div class="top-right suit ${suitClass}">${randomSuit}</div>
      <div class="bottom-left suit ${suitClass}">${randomSuit}</div>
    </div>
  `;

  // Agregar la carta al contenedor
  document.getElementById("cardContainer").innerHTML += cardHtml;
}

// Asignar evento click al botón para generar una carta aleatoria
document
  .getElementById("randomButton")
  .addEventListener("click", generateSingleCard);

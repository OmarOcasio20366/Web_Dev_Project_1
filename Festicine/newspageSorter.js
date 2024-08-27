/// JavaScript function para el sorter de las noticias
function filterCards(tag) {
  // Hide all cards
  const cards = document.querySelectorAll(".card-wrap");// Escoge todas las cartas
  cards.forEach((card) => card.classList.add("hiddenSort"));// Les anade esta clase para esconderlas

  // Show cards with the selected tag
  const filteredCards = document.querySelectorAll(
    `.card-wrap[data-tag="${tag}"]`// busca las cartas que lleven el tag seleccionado para mostrar
  );
  filteredCards.forEach((card) => card.classList.remove("hiddenSort"));// y las muestra quitandole la clase para esconder
}

function showAllCards() {
  // Show all cards
  const cards = document.querySelectorAll(".card-wrap");
  cards.forEach((card) => card.classList.remove("hiddenSort"));
}

// JavaScript function para el dropdown del mobile
function handleDropdownChange() {
  // Get the selected value
  let selectedValue = document.getElementById("dropdownSelect").value;

  // Perform any actions based on the selected value
  if (selectedValue === "showAll") {
    showAllCards();
  } else {
    filterCards(selectedValue);
  }
}

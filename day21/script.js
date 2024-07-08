const suggestions = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Grape",
  "Grapefruit",
  "Guava",
  "Kiwi",
  "Lemon",
  "Lime",
  "Lychee",
  "Mango",
  "Melon",
  "Orange",
  "Papaya",
  "Peach",
  "Pineapple",
  "Plum",
  "Raspberry",
  "Strawberry",
  "Watermelon",
];

function showSuggestions(value) {
  const suggestionsContainer = document.getElementById("suggestions");
  suggestionsContainer.innerHTML = "";
  if (value.length > 0) {
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(value.toLowerCase())
    );
    filteredSuggestions.forEach((suggestion) => {
      const suggestionDiv = document.createElement("div");
      suggestionDiv.textContent = suggestion;
      suggestionDiv.onclick = () => {
        document.getElementById("search-input").value = suggestion;
        suggestionsContainer.innerHTML = "";
        suggestionsContainer.classList.remove("active");
      };
      suggestionsContainer.appendChild(suggestionDiv);
    });
    suggestionsContainer.classList.add("active");
  } else {
    suggestionsContainer.classList.remove("active");
  }
}

document.addEventListener("click", (e) => {
  if (!document.querySelector(".search-container").contains(e.target)) {
    document.getElementById("suggestions").classList.remove("active");
  }
});

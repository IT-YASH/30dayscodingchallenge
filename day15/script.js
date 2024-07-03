document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearBtn");
  const optionsContainer = document.getElementById("optionsContainer");
  const options = optionsContainer.querySelectorAll(".option");
  const selectedOptions = document.getElementById("selectedOptions");

  searchInput.addEventListener("click", () => {
    optionsContainer.style.display = "block";
    filterOptions(searchInput.value);
  });

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    filterOptions(filter);
    clearBtn.style.display = searchInput.value ? "block" : "none";
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    optionsContainer.style.display = "none";
    filterOptions("");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedDiv = document.createElement("div");
      selectedDiv.textContent = option.textContent;
      selectedDiv.classList.add("selected-option");
      selectedOptions.appendChild(selectedDiv);

      optionsContainer.style.display = "none";

      searchInput.value = "";
      clearBtn.style.display = "none";
      filterOptions("");

      selectedDiv.addEventListener("click", () => {
        selectedOptions.removeChild(selectedDiv);
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !searchInput.contains(event.target) &&
      !optionsContainer.contains(event.target)
    ) {
      optionsContainer.style.display = "none";
    }
  });

  function filterOptions(filter) {
    options.forEach((option) => {
      if (option.textContent.toLowerCase().includes(filter)) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  }
});

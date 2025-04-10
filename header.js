document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header")

  // Carrega o arquivo header.html dinamicamente
  fetch("header.html")
    .then((res) => res.text())
    .then((html) => {
      header.innerHTML = html

      // Inicializa os eventos após o header ser carregado
      inicializarEventos()
    })
})

function inicializarEventos() {
  // Garante que os dropdowns se ajustem ao tamanho da viewport
  const dropdowns = document.querySelectorAll(".dropdown")
  dropdowns.forEach((dropdown) => {
    dropdown.style.maxWidth = "100%"
  })

  const searchInput = document.getElementById("search-input")
  const searchButton = document.getElementById("search-button")
  const searchResults = document.getElementById("search-results")
  const categoriesButton = document.getElementById("toggle-categories")
  const categoriesDropdown = document.getElementById("categories-dropdown")
  const electronicsButton = document.getElementById("toggle-electronics")
  const electronicsDropdown = document.getElementById("electronics-dropdown")

  // Verifica se os elementos de busca estão presentes
  if (!searchInput || !searchButton || !searchResults) return

  // Lida com a funcionalidade de busca
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim()
    if (query) {
      searchResults.textContent = `Você buscou por '${query}'`
      searchResults.classList.remove("hidden")
    } else {
      searchResults.textContent = "Por favor, insira um termo de busca."
      searchResults.classList.remove("hidden")
    }
  })

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value.trim()
      if (query) {
        searchResults.textContent = `Você buscou por '${query}'`
        searchResults.classList.remove("hidden")
      } else {
        searchResults.textContent = "Por favor, insira um termo de busca."
        searchResults.classList.remove("hidden")
      }
    }
  })

  document.addEventListener("click", (event) => {
    // Oculta os resultados de busca se clicar fora
    if (
      !searchResults.contains(event.target) &&
      !searchInput.contains(event.target) &&
      !searchButton.contains(event.target)
    ) {
      searchResults.classList.add("hidden")
    }
  })

  // Lida com o dropdown de categorias
  if (categoriesButton && categoriesDropdown) {
    categoriesButton.addEventListener("click", () => {
      categoriesDropdown.classList.toggle("hidden")
    })

    document.addEventListener("click", (event) => {
      // Oculta o dropdown de categorias se clicar fora
      if (
        !categoriesDropdown.contains(event.target) &&
        !categoriesButton.contains(event.target)
      ) {
        categoriesDropdown.classList.add("hidden")
      }
    })
  }

  // Lida com o dropdown de eletrônicos
  if (electronicsButton && electronicsDropdown) {
    electronicsButton.addEventListener("click", () => {
      electronicsDropdown.classList.toggle("hidden")
    })

    document.addEventListener("click", (event) => {
      // Oculta o dropdown de eletrônicos se clicar fora
      if (
        !electronicsDropdown.contains(event.target) &&
        !electronicsButton.contains(event.target)
      ) {
        electronicsDropdown.classList.add("hidden")
      }
    })
  }
}

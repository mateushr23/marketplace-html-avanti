document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll("[id^='carousel']")

  carousels.forEach((carousel) => {
    fetch("carousel.html")
      .then((res) => res.text())
      .then((html) => {
        carousel.innerHTML = html

        // Inicializa a funcionalidade do carrossel após o carregamento
        initializeCarousel(carousel)
      })
  })
})

function initializeCarousel(carouselElement) {
  const prevButton = carouselElement.querySelector("#prev-page")
  const nextButton = carouselElement.querySelector("#next-page")
  const paginationDots = carouselElement.querySelector("#pagination")
  const carouselGrid = carouselElement.querySelector(".relative > .grid")

  const products = Array.from(carouselGrid.children) // Obtém todos os cartões de produto
  const itemsPerPage = window.innerWidth < 768 ? 2 : 5 // Ajusta o número de itens por página para telas menores
  const totalPages = Math.ceil(products.length / itemsPerPage)

  let currentPage = 0

  function updateCarousel() {
    // Exibe apenas os produtos da página atual
    products.forEach((product, index) => {
      const start = currentPage * itemsPerPage
      const end = start + itemsPerPage
      product.style.display = index >= start && index < end ? "block" : "none"
    })

    // Atualiza os pontos de paginação
    paginationDots.innerHTML = "" // Limpa os pontos existentes
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("button")
      dot.className = `h-2.5 w-2.5 rounded-full ${
        i === currentPage ? "bg-[#005cff]" : "bg-[#dddddd]"
      }`
      dot.setAttribute("aria-label", `Ir para a página ${i + 1}`)
      dot.addEventListener("click", () => {
        currentPage = i
        updateCarousel()
      })
      paginationDots.appendChild(dot)
    }
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      currentPage = (currentPage - 1 + totalPages) % totalPages
      updateCarousel()
    })
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      currentPage = (currentPage + 1) % totalPages
      updateCarousel()
    })
  }

  // Inicializa o carrossel
  updateCarousel()
}

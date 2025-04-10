document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-section")

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.getAttribute("data-section")
      const content = document.getElementById(section)
      const isExpanded = !content.classList.contains("hidden")

      // Recolher todas as seções
      document
        .querySelectorAll(".section-content")
        .forEach((el) => el.classList.add("hidden"))
      document.querySelectorAll(".toggle-section i").forEach((icon) => {
        icon.classList.remove("icon-caret-up")
        icon.classList.add("icon-caret-down")
      })

      // Expandir a seção clicada, se ela não estiver expandida
      if (!isExpanded) {
        content.classList.remove("hidden")
        button.querySelector("i").classList.remove("icon-caret-down")
        button.querySelector("i").classList.add("icon-caret-up")
      }
    })
  })
})

const toggleButton = document.querySelector(".nav__toggle")
const navMenu = document.querySelector(".nav__menu")
const navLinks = document.querySelectorAll(".nav__link")

toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active")
    })
})
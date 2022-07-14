const navbarMenu = document.querySelector(".navbar-menu");
const container = document.querySelector(".container");


navbarMenu.addEventListener("click",() => {
    container.classList.toggle("active");
});
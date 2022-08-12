const toggleBars = document.querySelector(".dropdown__toggle");
const navBar = document.querySelector(".side__navbar");

toggleBars.addEventListener('click', () => {
    navBar.classList.toggle('show');
} );
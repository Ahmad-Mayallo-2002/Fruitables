// Start Preloading
const loading = document.querySelector(".loading-parent");
window.addEventListener("load", () => {
    loading.style.display = "none";
});
// End Preloading
// Start Navbar
const dropDownButton = document.querySelector(".drop-down-button");
const dropDown = document.querySelector(".menu");
const barX = document.querySelector(".bar-x");
const bar = document.querySelector(".bar-x i:first-of-type");
const xMark = document.querySelector(".bar-x i:last-of-type");
const mainLinks = document.querySelector(".main-links");
const navBarTwo = document.querySelector("nav:last-of-type");

dropDownButton.addEventListener("click", () => {
    dropDown.classList.toggle("show-drop-down");
})

barX.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("bar-x-effect");
    bar.classList.toggle("bar-effect");
    xMark.classList.toggle("x-effect");
    mainLinks.classList.toggle("show-links");
})

window.addEventListener("scroll", () => {
    if (window.scrollY >= 58) {
        navBarTwo.classList.add("box-shadow");
    } else {
        navBarTwo.classList.remove("box-shadow");
    }
})
// End Navbar
// Start Contact
const emailInput = document.querySelector('[type="email"');
emailInput.addEventListener("focus", (e) => e.currentTarget.classList.add("email-box-shadow"));
emailInput.addEventListener("blur", (e) => e.currentTarget.classList.remove("email-box-shadow"));
// End Contact
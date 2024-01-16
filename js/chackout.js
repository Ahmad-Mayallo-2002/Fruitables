const colOne = document.querySelector(".col-one");
const colTwo = document.querySelector(".col-two");

window.addEventListener("load", () => {
    if (window.innerWidth <= 991) {
        colOne.classList.replace("col-6", "col-12");
        colTwo.classList.replace("col-6", "col-12");
    } else {
        colOne.classList.replace("col-12", "col-6");
        colTwo.classList.replace("col-12", "col-6");
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth <= 991) {
        colOne.classList.replace("col-6", "col-12");
        colTwo.classList.replace("col-6", "col-12");
    } else {
        colOne.classList.replace("col-12", "col-6");
        colTwo.classList.replace("col-12", "col-6");
    }
})
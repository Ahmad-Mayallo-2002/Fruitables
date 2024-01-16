const minusButtons = document.querySelectorAll(".body > div .minus");
const plusButtons = document.querySelectorAll(".body > div .plus");
const handleButtons = document.querySelectorAll(".body i");
const price = document.querySelectorAll(".body .price");
const quantity = document.querySelectorAll(".body .quantity");
const total = document.querySelectorAll(".body .total");

plusButtons.forEach(
    (plus, index) => {
        plus.onclick = function() {
            quantity[index].innerHTML = +quantity[index].innerHTML + 1
            total[index].innerHTML = `${parseInt(quantity[index].innerHTML) * parseInt(price[index].innerHTML)}$`;
        }
    }
)

minusButtons.forEach(
    (minus, index) => {
        minus.onclick = function() {
            quantity[index].innerHTML == 1 ? false : quantity[index].innerHTML = +quantity[index].innerHTML - 1;
            total[index].innerHTML = `${parseInt(quantity[index].innerHTML) * parseInt(price[index].innerHTML)}$`;
        }
    }
)


handleButtons.forEach(
    (handle, index) => {
        handle.onclick = function() {
            quantity[index].innerHTML = 1
            total[index].innerHTML = "3$"
        }
    }
)
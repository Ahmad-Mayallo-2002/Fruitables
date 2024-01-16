const progress = document.querySelector(".col-one input[type='range']");
const progressValue = document.querySelector(".col-one .value");
const category = document.querySelector(".col-one .category");
const features = document.querySelector(".col-one .features");
const feature = document.querySelector(".col-one .features .feature");
const counterP = document.querySelector(".col-two .cart .more p");
const buttons = document.querySelectorAll(".col-two .cart .more button");
const finalPrice = document.querySelector(".col-two .cart .more .final-price");
const descRevButtons = document.querySelectorAll(".col-two .description-reviews .select button");
const allActive = document.querySelectorAll(".col-two .description-reviews .all");
const originPrice = parseInt(finalPrice.innerHTML);
const descriptionTable = document.querySelector(".col-two .description-reviews table tbody");
const categoryData = [
    {
        name: "Apples",
        number: "3",
    },
    {
        name: "Oranges",
        number: "5",
    },
    {
        name: "Straweberry",
        number: "2",
    },
    {
        name: "Banana",
        number: "8",
    },
    {
        name: "Pumbkin",
        number: "5"
    },
];
const featuresData = [
    {
        img: "../img/featur-1.jpg",
        head: "Apple",
        price: "1.99$",
        discount: "2.99$",
    },
    {
        img: "../img/featur-2.jpg",
        head: "Strawberry",
        price: "2.99$",
        discount: "4.99$",
    },
    {
        img: "../img/featur-3.jpg",
        head: "Broccoli",
        price: "3.99$",
        discount: "6.99$",
    },
];
const tableData = [
    ["weight", "1kg"],
    ["Country of Origin", "Agro Farm"],
    ["Quality", "Organic"],
    ["Check", "Healthy"],
    ["Min Weight", "250kg"]
]
progress.addEventListener("input", () => progressValue.innerHTML = progress.value);

categoryData.forEach(
    data => {
        const { name, number } = data;
        category.innerHTML +=
            `
            <div class="text">
                <div class="category-name">
                    <i class="fa-solid fa-apple-whole"></i>
                    ${name}
                </div>
                <span class="number">(${number})</span>
            </div>
        `
    }
);

featuresData.forEach(
    data => {
        const { img, head, price, discount } = data;
        features.innerHTML +=
            `
        <div class="feature">
            <div class="image">
                <img src="${img}" alt="${head}" />
            </div>
            <div class="content">
                <div class="head">${head}</div>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <div class="price-1">
                        ${price}
                    </div>
                    <div class="price-2">
                        ${discount}
                    </div>
                </div>
            </div>
        </div>
        `;
    }
);

buttons[0].onclick = function() {
    if (parseInt(counterP.innerHTML) === 0) {
        return false;
    } else {
        counterP.innerHTML = parseInt(counterP.innerHTML) - 1;
        finalPrice.innerHTML = originPrice * counterP.innerHTML;
    }
}

buttons[1].onclick = function() {
    counterP.innerHTML = parseInt(counterP.innerHTML) + 1;
    finalPrice.innerHTML = originPrice * counterP.innerHTML;
}

tableData.forEach(
    array => {
        descriptionTable.innerHTML +=
        `
            <tr>
                <td>${array[0]}</td>
                <td>${array[1]}</td>
            </tr>
        `
    }
);

descRevButtons.forEach(
    element => {
        element.addEventListener("click", () => {
            descRevButtons.forEach(one => one.classList.remove("button-active"));
            element.classList.add("button-active");
            allActive.forEach(one => one.classList.toggle("section-none"));
        })
    }
)

const colOne = document.querySelector(".col-one");
const colTwo = document.querySelector(".col-two");

window.addEventListener("load", () => {
    if (window.innerWidth <= 991) {
        colOne.classList.replace("col-4", "col-12");
        colTwo.classList.replace("col-8", "col-12");
    } else {
        colOne.classList.replace("col-12", "col-4");
        colTwo.classList.replace("col-12", "col-8");
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth <= 991) {
        colOne.classList.replace("col-4", "col-12");
        colTwo.classList.replace("col-8", "col-12");
    } else {
        colOne.classList.replace("col-12", "col-4");
        colTwo.classList.replace("col-12", "col-8");
    }
})
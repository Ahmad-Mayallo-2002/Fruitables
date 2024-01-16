// Start Fruits Shop
const shopInput = document.querySelector(".fruits-shop .form-group form input");
const category = document.querySelector(".col-one .category");
const progress = document.querySelector(".col-one input[type='range']");
const progressValue = document.querySelector(".col-one .value");
const features = document.querySelector(".col-one .features");
const feature = document.querySelector(".col-one .features .feature");
const products = document.querySelectorAll(".col-two .products [class|='products']");
const productsFruits = document.querySelector(".col-two .products .products-fruits");
const productsVegetables = document.querySelector(".col-two .products .products-vegetables");
const productsMeat = document.querySelector(".col-two .products .products-meat");
const productsBread = document.querySelector(".col-two .products .products-bread");
const productsPagination = document.querySelectorAll(".col-two .products .pagination span");
const productsPaginationIconsNext = document.querySelector(".col-two .products .pagination #next");
const productsPaginationIconsprev = document.querySelector(".col-two .products .pagination #prev");
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
const productsFruitsData = [
    {
        img: "../img/fruite-item-1.jpg",
        head: "Orange",
        price: "1.99$"
    },
    {
        img: "../img/fruite-item-2.jpg",
        head: "Raspberries",
        price: "2.99$"
    },
    {
        img: "../img/fruite-item-3.jpg",
        head: "Banana",
        price: "3.99$"
    },
    {
        img: "../img/fruite-item-4.jpg",
        head: "Peach",
        price: "4.99$"
    },
    {
        img: "../img/fruite-item-5.jpg",
        head: "Grapes",
        price: "5.99$"
    },
    {
        img: "../img/fruite-item-6.jpg",
        head: "Apples",
        price: "6.99$"
    },
];
const productsVegetablesData = [
    {
        img: "../img/vegetable-item-1.jpg",
        head: "Tomato",
        price: "1.99$",
    },
    {
        img: "../img/vegetable-item-2.jpg",
        head: "Broccoli",
        price: "2.99$",
    },
    {
        img: "../img/vegetable-item-3.png",
        head: "Banana",
        price: "3.99$",
    },
    {
        img: "../img/vegetable-item-4.jpg",
        head: "Pepper",
        price: "4.99$",
    },
    {
        img: "../img/vegetable-item-5.jpg",
        head: "Potato",
        price: "5.99$",
    },
    {
        img: "../img/vegetable-item-6.jpg",
        head: "Vegetable",
        price: "6.99$",
    },
];
const productsMeatData = [
    {
        img: "../img/meat-1.jpg",
        head: "Meat",
        price: "1.99$",
    },
    {
        img: "../img/meat-2.jpg",
        head: "Meat",
        price: "2.99$",
    },
    {
        img: "../img/meat-3.jpg",
        head: "Meat",
        price: "3.99$",
    },
    {
        img: "../img/meat-4.jpg",
        head: "Meat",
        price: "4.99$",
    },
    {
        img: "../img/meat-5.jpg",
        head: "Meat",
        price: "5.99$",
    },
    {
        img: "../img/meat-5.jpg",
        head: "Meat",
        price: "5.99$",
    }
];
const productsBreadData = [
    {
        img: "../img/bread-1.jpg",
        head: "Bread",
        price: "1.99$"
    },
    {
        img: "../img/bread-2.jpg",
        head: "Bread",
        price: "2.99$"
    },
    {
        img: "../img/bread-3.jpg",
        head: "Bread",
        price: "3.99$"
    },
    {
        img: "../img/bread-4.jpg",
        head: "Bread",
        price: "4.99$"
    },
    {
        img: "../img/bread-5.jpg",
        head: "Bread",
        price: "5.99$"
    },
    {
        img: "../img/bread-6.jpg",
        head: "Bread",
        price: "6.99$"
    },
]

shopInput.addEventListener("focus", () => shopInput.classList.add("box-shadow-input"));
shopInput.addEventListener("blur", () => shopInput.classList.remove("box-shadow-input"));

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

progress.addEventListener("input", () => progressValue.innerHTML = progress.value);

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

productsFruitsData.forEach(
    data => {
        const { img, head, price } = data;
        productsFruits.innerHTML +=
            `
                <div class="card">
                    <div class="image"><img src="${img}" alt="${head}" /></div>
                    <div class="content p-1">
                        <h4>${head}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates rem tempore libero quas blanditiis ab maiores harum commodi provident.</p>
                        <div class="cart">
                            <p>${price}</p>
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
    }
);

productsVegetablesData.forEach(
    data => {
        const { img, head, price } = data;
        productsVegetables.innerHTML +=
            `
                <div class="card">
                    <div class="image"><img src="${img}" alt="${head}" /></div>
                    <div class="content p-1">
                        <h4>${head}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates rem tempore libero quas blanditiis ab maiores harum commodi provident.</p>
                        <div class="cart">
                            <p>${price}</p>
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
    }
);

productsMeatData.forEach(
    data => {
        const { img, head, price } = data;
        productsMeat.innerHTML +=
            `
                <div class="card">
                    <div class="image"><img src="${img}" alt="${head}" /></div>
                    <div class="content p-1">
                        <h4>${head}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates rem tempore libero quas blanditiis ab maiores harum commodi provident.</p>
                        <div class="cart">
                            <p>${price}</p>
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
    }
);

productsBreadData.forEach(
    data => {
        const { img, head, price } = data;
        productsBread.innerHTML +=
            `
                <div class="card">
                    <div class="image"><img src="${img}" alt="${head}" /></div>
                    <div class="content p-1">
                        <h4>${head}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates rem tempore libero quas blanditiis ab maiores harum commodi provident.</p>
                        <div class="cart">
                            <p>${price}</p>
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            `;
    }
);

function settingPreviousElement() {
    products.forEach(product => product.classList.add("non-active"));
    productsPagination[index].classList.remove("active-indicator");
}

function settingNextElement() {
    products[index].classList.replace("non-active", "grid-product");
    productsPagination[index].classList.add("active-indicator");
}

function goNext() {
    if (index == productsPagination.length - 1) {
        settingPreviousElement();
        index = 0;
        settingNextElement();
    } else {
        settingPreviousElement();
        index++;
        settingNextElement();
    }
}

function goPrev() {
    if (index == 0) {
        settingPreviousElement();
        index = productsPagination.length - 1;
        settingNextElement();
    } else {
        settingPreviousElement();
        index--;
        settingNextElement();
    }
}

let index = 0;
productsPaginationIconsNext.addEventListener("click", goNext);
productsPaginationIconsprev.addEventListener("click", goPrev);

function switchProducts() {
    index = 0;
    products.forEach(product => product.classList.add("non-active"));
    productsPagination[index].classList.remove("active-indicator");
    products[index].classList.replace("non-active", "grid-product");
    productsPagination[index].classList.add("active-indicator");
}

productsPagination.forEach(
    (one, indexTwo) => {
        one.addEventListener("click", (e) => {
            productsPagination.forEach(one => one.classList.remove("active-indicator"));
            e.currentTarget.classList.add("active-indicator");
            index = indexTwo - 1;
            indexTwo == 0 ? switchProducts() : goNext();
        })   
    }
)
// End Fruits Shop

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
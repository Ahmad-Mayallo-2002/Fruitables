// Start Landing
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const sliderTrack = document.querySelector(".slider-track");
const figures = document.querySelectorAll(".landing figure");
const figureOne = document.querySelector("figure:first-of-type");
const figureTwo = document.querySelector("figure:last-of-type");

next.addEventListener("click", () => {
    figures.forEach(value => value.classList.toggle("opacity-1"));
})

prev.addEventListener("click", () => {
    figures.forEach(value => value.classList.toggle("opacity-1"));
})

function autoPlay() {
    const auto = setInterval(() => {
        figures.forEach(value => value.classList.toggle("opacity-1"));
    },2000)
    window.auto = auto;
}

sliderTrack.addEventListener("mouseenter", () => {
    clearInterval(auto);
})
sliderTrack.addEventListener("mouseleave", () => {
    autoPlay();
})


autoPlay();

// End Landing
// Start Features
const features = document.querySelector(".features .container");
fetch("../js/data.json").then(e => e.json()).then(
    data => {
        let dData = data.features;
        dData.forEach(
            (data) => {
                const {icon, text, description} = data;
                features.innerHTML += `
                <div class="feature">
                    <i class="${icon} flex-center"></i>
                    <h5>${text}</h5>
                    <p>${description}</p>
                </div>
                `;
            }
        )
    }
).catch(error => {
    console.log(error);
})
// End Features
// Start Products
const products = document.querySelector(".products .container .my-products");
const buttons = document.querySelectorAll(".products .container .head ul li");

fetch("../js/data.json").then(data => data.json())
.then(
    data => {
        const {Filter} = data;
        Filter.forEach(
            (data) => {
                const {head, image, type} = data;
                products.innerHTML += 
                `
                <div class="${head} card" data-name="${type}">
                    <div class="image">
                        <img src="${image}" alt="${head}" />
                    </div>
                    <div class="content">
                        <h3>${head}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div class="price-cart">
                            <p>$4.99/kg</p>
                            <a href="#">
                                <i class="fa-solid fa-bag-shopping"></i>
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
                `;
            }
        )
    }
).then(
    e => {
        const cards = document.querySelectorAll(".products .container .my-products .card");
        buttons.forEach(
            element => {
                element.addEventListener("click", () => {
                    cards.forEach(
                        card => {
                            if (element.dataset.filter == card.dataset.name || element.classList.contains("all") == true) {
                                card.classList.remove("filter-products")
                                
                            } else {
                                card.classList.add("filter-products")
                            }
                        }
                    )
                })
            }
        )
    }
).catch(error => console.log(error));
buttons.forEach(
    element => {
        element.addEventListener("click", (current) => {
            buttons.forEach(e => e.classList.remove("active"));
            element.classList.remove("active");
            current.currentTarget.classList.add("active");
        })
    }
)

// End Products
// Start Details
const dataDetails = [
    {
        name: "apple",
        image: "../img/featur-1.jpg",
        head: "Fresh Apples",
        description: "20% OFF"
    },
    {
        name: "strawberry",
        image: "../img/featur-2.jpg",
        head: "Tasty Fruits",
        description: "Free delivery"
    },
    {
        name: "broccoli",
        image: "../img/featur-3.jpg",
        head: "Exotic Vegitable",
        description: "Discount 30$"
    }
]
const details = document.querySelector(".details .container .details-content");
dataDetails.forEach(
    value => {
        const {name, image, head, description} = value;
        details.innerHTML += `
        <div class="${name} card">
            <img src="${image}" alt="${name}" />
            <div class="text">
                <div class="content">
                    <h2>${head}</h2>
                    <p>${description}</p>
                </div>
            </div>
        </div>
        `
    }
)
// End Detail
// Start Organic
const organicData = [
    {
        name: "Cherry Tomato",
        price: "$4.99 / kg",
        image: "../img/vegetable-item-1.jpg"
    },
    {
        name: "Banana",
        price: "$7.99 / kg",
        image: "../img/vegetable-item-2.jpg"
    },
    {
        name: "Bell Papper",
        price: "$7.99 / kg",
        image: "../img/vegetable-item-3.png"
    },
    {
        name: "Potatoes",
        price: "$4.99 / kg",
        image: "../img/vegetable-item-4.jpg"
    },
    {
        name: "Broccoli",
        price: "$4.99 / kg",
        image: "../img/vegetable-item-5.jpg"
    },
    {
        name: "Parsely",
        price: "$4.99 / kg",
        image: "../img/vegetable-item-6.jpg"
    },
]
const organic = document.querySelector(".organic .container .content .swiper-wrapper");

for(let i = 0;i <= 1;i++) {
    organicData.forEach(
        data => {
            const {image, name, price} = data;
            organic.innerHTML+= `
                <div class="card">
                    <div class="image">
                        <img src="${image}" alt="${name}" />
                    </div>
                    <div class="text">
                        <h3>${name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nostrum.</p>
                    </div>
                    <div class="cart">
                        <p class="price">${price}</p>
                        <a href="#">
                            <i class="fa-solid fa-bag-shopping"></i>
                            Add to Cart
                        </a>
                    </div>
                </div>
            `;
        }
    )
}
// End Organic

// Start Seller
const seller = document.querySelector(".seller .container .seller-products");
const organicProducts = document.querySelector(".seller .container .organic-products");
const sellerData = [
    {
        head: "Organic Orange",
        image: "../img/best-product-1.jpg",
        price: "3$"
    },{
        head: "Organic Red Mulberry",
        image: "../img/best-product-2.jpg",
        price: "4$"
    },{
        head: "Organic Banana",
        image: "../img/best-product-3.jpg",
        price: "5$"
    },{
        head: "Organic Peach",
        image: "../img/best-product-4.jpg",
        price: "6$"
    },{
        head: "Organic Grapes",
        image: "../img/best-product-5.jpg",
        price: "7$"
    },{
        head: "Organic Apple",
        image: "../img/best-product-6.jpg",
        price: "8$"
    },
]
sellerData.forEach(
    data => {
        const {head, image, price} = data;
        seller.innerHTML += 
        `
            <div class="product">
                <div class="image">
                    <img src="${image}" alt="${head}" />
                </div>
                <div class="content">
                    <h4>${head}</h4>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price">${price}</div>
                    <a href="">
                        <i class="fa-solid fa-bag-shopping"></i>
                        Add to Cart
                    </a>
                </div>
            </div>
        `
    }
)

for(let i = 0;i <= 3;i++) {
    const sellerObjects = sellerData[i];
    const {head, image, price} = sellerObjects;
            organicProducts.innerHTML += 
        `
        <div class="card">
            <div class="image">
                <img src="${image}" alt="${head}" />
            </div>
            <div class="content">
                <h4>${head}</h4>
                <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">${price}</div>
                <a href="">
                    <i class="fa-solid fa-bag-shopping"></i>
                    Add to Cart
                </a>
            </div>
        </div>
        `
}

// End Seller
// Start Quality
const quality = document.querySelector(".quality .container");
const qualityData = [
    {
        head: "SATISFIED <br /> CUSTOMERS",
        number: "1963"
    },    
    {
        head: "QUALITY OF <br /> SERVICE",
        number: "99%"
    },    
    {
        head: "QUALITY <br /> CERTIFICATES",
        number: "33"
    },    
    {
        head: "AVAILABLE <br /> PRODUCTS",
        number: "789"
    },
]
qualityData.forEach(
    data => {
        const {head, number} = data;
        quality.innerHTML += 
        `
            <div class="qual">
                <i class="fa-solid fa-users"></i>
                <h4>${head}</h4>
                <p>${number}</p>
            </div>
        `
    }
)
// End Quality
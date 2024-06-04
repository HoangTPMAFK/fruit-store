const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuPopup = document.querySelector("#mobile-menu-popup");
const cartPopup = document.querySelector("#cart-popup");
const cartBtn = document.querySelector("#cart-btn");
const closeCartBtn = document.querySelector('#close-cart-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const groceriesContainer = document.querySelector("#groceries-container");
const groceriesSort = document.querySelector("#groceries-sort");
const fruitsContainer = document.querySelector("#fruits-container");
const fruitsSort = document.querySelector("#fruits-sort");
const shoppingList = document.querySelector("#shopping-list");
const totalBill = document.querySelector("#total-bill");
const totalBillPopup = document.querySelector("#total-bill-popup")
cartBtn.addEventListener("click", () => {
    cartPopup.classList.toggle("hidden");
})
closeCartBtn.addEventListener("click", () => {
    cartPopup.classList.toggle("hidden");
})
mobileMenu.addEventListener("click", () => {
    mobileMenuPopup.classList.toggle("hidden");
})
closeMenuBtn.addEventListener("click", () => {
    mobileMenuPopup.classList.toggle("hidden");
})
const fruits = [{
    name: "Cà rốt",
    img: "/build/img/carrot.png",
    price: 20000
}, {
    name: "Cà chua",
    img: "/build/img/tomato.png",
    price: 17000
}, {
    name: "Xà lách",
    img: "/build/img/salad.png",
    price: 50000
},{
    name: "Mướp đắng",
    img: "/build/img/bittermelon.png",
    price: 20000
}, {
    name: "Khoai tây",
    img: "/build/img/potato.png",
    price: 25000
}, {
    name: "Khoai lang",
    img: "/build/img/sweetpotato.png",
    price: 27000
}, {
    name: "Dưa hấu",
    img: "/build/img/watermelon.png",
    price: 12000
}, {
    name: "Cam Vinh",
    img: "/build/img/orange.png",
    price: 10000
}];
const groceries = [{
    name: "Cà rốt",
    img: "/build/img/carrot.png",
    price: 20000
}, {
    name: "Cà chua",
    img: "/build/img/tomato.png",
    price: 17000
}, {
    name: "Xà lách",
    img: "/build/img/salad.png",
    price: 50000
}, {
    name: "Mướp đắng",
    img: "/build/img/bittermelon.png",
    price: 20000
}, {
    name: "Khoai tây",
    img: "/build/img/potato.png",
    price: 25000
}, {
    name: "Khoai lang",
    img: "/build/img/sweetpotato.png",
    price: 27000
}, {
    name: "Dưa hấu",
    img: "/build/img/watermelon.png",
    price: 12000
}, {
    name: "Cam Vinh",
    img: "/build/img/orange.png",
    price: 10000
}, {
    name: "Nước cam",
    img: "/build/img/orangejuice.png",
    price: 12000
}, {
    name: "Nước ép cà chua",
    img: "/build/img/tomatojuice.png",
    price: 15000
}, {
    name: "Nước ép dưa hấu",
    img: "/build/img/watermelonjuice.png",
    price: 15000
}, {
    name: "Nước ép cà rốt",
    img: "/build/img/carrotjuice.png",
    price: 15000
}];
let tempShoppingCart = localStorage.getItem("shoppingCart") ? JSON.parse(localStorage.getItem("shoppingCart")) : [];
console.log(tempShoppingCart);
let s = ``;
if (groceriesSort !== null) {
    groceriesSort.addEventListener("change", () => {
        if (groceriesSort.value == "sort1") {
            groceries.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }
        if (groceriesSort.value == "sort2") {
            groceries.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
                if (fa < fb) {
                    return 1;
                }
                if (fa > fb) {
                    return -1;
                }
                return 0;
            });
        }
        if (groceriesSort.value == "sort3") {
            groceries.sort((a, b) => {
                return a.price - b.price;
            });
        }
        if (groceriesSort.value == "sort4") {
            groceries.sort((a, b) => {
                return b.price - a.price;
            });
        }
        displayGroceries();
    })
}
function displayGroceries() {
    s = '';
    groceries.forEach(item => {
        s = s + `<div class="w-1/2 md:w-1/3 lg:w-1/4">
        <div class="group py-2">
            <img class="w-full hover:blur-md aspect-square" src="${item.img}">
            <div class="group-hover:block hidden relative left-1/2 bottom-6 w-fit -translate-x-1/2 h-0" onclick="addToCart(event, groceries)">
                <i class="fa-solid fa-cart-shopping hover:text-white hover:bg-green-400 p-2"></i>
            </div>
        </div>
        <div class="text-center">
            <a href="">
                <div class="text-2xl font-semibold">${item.name}</div>
            </a>
            <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="font-semibold">${item.price} VND</div>
        </div>
    </div>`
    })
    if (groceriesSort !== null) groceriesContainer.innerHTML = s;
}
displayGroceries();
if (fruitsSort !== null) {
    fruitsSort.addEventListener("change", () => {
        if (fruitsSort.value == "sort1") {
            fruits.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }
        if (fruitsSort.value == "sort2") {
            fruits.sort((a, b) => {
                let fa = a.name.toLowerCase();
                let fb = b.name.toLowerCase();
                if (fa < fb) {
                    return 1;
                }
                if (fa > fb) {
                    return -1;
                }
                return 0;
            });
        }
        if (fruitsSort.value == "sort3") {
            fruits.sort((a, b) => {
                return a.price - b.price;
            });
        }
        if (fruitsSort.value == "sort4") {
            fruits.sort((a, b) => {
                return b.price - a.price;
            });
        }
        displayFruits();
    })
}
function displayFruits() {
    s = '';
    fruits.forEach(item => {
        s = s + 
    `<div class="w-1/2 md:w-1/3 lg:w-1/4">
        <div class="group py-2">
            <img class="w-full hover:blur-md aspect-square" src="${item.img}">
            <div class="group-hover:block hidden relative left-1/2 bottom-6 w-fit -translate-x-1/2 h-0" onclick="addToCart(event, fruits)">
                <i class="fa-solid fa-cart-shopping hover:text-white hover:bg-green-400 p-2"></i>
            </div>
        </div>
        <div class="text-center">
            <a href="">
                <div class="text-2xl font-semibold">${item.name}</div>
            </a>
            <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="font-semibold">${item.price} VND</div>
        </div>
    </div>`
    })
    if (fruitsSort !== null) fruitsContainer.innerHTML = s;
}
displayFruits();
function addToCart(event, arr) {
    let itemName = event
    .currentTarget
    .parentNode
    .parentNode
    .getElementsByTagName("div")[3]
    .textContent;
    let index = -1;
    let i = 0;
    for (let i = 0; i < tempShoppingCart.length; i++) {
        if (tempShoppingCart[i].name === itemName) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        arr.forEach(item => {
            if (item.name === itemName) {
                let name = item.name;
                let img = item.img;
                let price = item.price;
                let quantity = 1;
                tempShoppingCart.push({
                    name, img, price, quantity
                })
            }
        })
    }
    console.log(tempShoppingCart);
    displayInCart();
    calculateTotalBill();
    localStorage.setItem("shoppingCart", JSON.stringify(tempShoppingCart));
}
function displayInCart() {
    s = '';
    tempShoppingCart.forEach(item => {
        s = s + 
    `<div class="flex flex-row justify-between">
        <div class="flex flex-row gap-4">
            <img src="${item.img}" class="w-20 h-20">
            <div>
                <div class="text-3xl">${item.name}</div>
                <div>Giá: ${item.price} VND</div>
            </div>
        </div>
        <div>
            <button class="bg-slate-200 p-2" onclick="removeOneQuantity(event)">-</button>
            <input type="text" value="${item.quantity}" class="w-10 h-10">
            <button class="bg-slate-200 p-2" onclick="addOneQuantity(event)">+</button>
            <button class="ml-6 bg-red-200 p-2" onclick="removeItemFromCart(event)">x</button>
        </div>
    </div>`;
    });
    shoppingList.innerHTML = s;
}
displayInCart();
function calculateTotalBill() {
    let sum = 0;
    tempShoppingCart.forEach(item => {
        sum = sum + Number(item.price) * Number(item.quantity);
    })
    totalBill.textContent = sum + " VND";
    totalBillPopup.textContent = sum + " VND";
}
calculateTotalBill();
function removeOneQuantity(event) {
    let quantity = event.currentTarget.parentNode.getElementsByTagName("input")[0].value;
    let itemName = event.currentTarget.parentNode.parentNode.getElementsByTagName("div")[2].textContent;
    if (quantity > 1) {
        quantity--;
        event.currentTarget.parentNode.getElementsByTagName("input")[0].value = quantity;
        tempShoppingCart.forEach(item => {
            if (item.name === itemName) {
                item.quantity = quantity;
            }
        })
        localStorage.setItem("shoppingCart", JSON.stringify(tempShoppingCart));
        console.log(tempShoppingCart);
    }
    calculateTotalBill();
}
function addOneQuantity(event) {
    let quantity = event.currentTarget.parentNode.getElementsByTagName("input")[0].value;
    let itemName = event.currentTarget.parentNode.parentNode.getElementsByTagName("div")[2].textContent;
    quantity++;
    event.currentTarget.parentNode.getElementsByTagName("input")[0].value = quantity;
    tempShoppingCart.forEach(item => {
        if (item.name === itemName) {
            item.quantity = quantity;
        }
    })
    localStorage.setItem("shoppingCart", JSON.stringify(tempShoppingCart));
    console.log(tempShoppingCart);
    calculateTotalBill();
}
function removeItemFromCart(event) {
    let itemName = event.currentTarget.parentNode.parentNode.getElementsByTagName("div")[2].textContent;
    tempShoppingCart = tempShoppingCart.filter(item => {
        return item.name !== itemName;
    })
    localStorage.setItem("shoppingCart", JSON.stringify(tempShoppingCart));
    displayInCart();
    calculateTotalBill();
}
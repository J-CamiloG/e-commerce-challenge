// MENU
let menuIcon = document.getElementById('hamburger');
let menu = document.querySelector('.menu');
let bodyOpacity = document.querySelector('.body_opacity');

function menuOpener() {
    let visibleMenu = menu.getAttribute('menu-visibility');
    if (visibleMenu === 'false') {
        menu.setAttribute('menu-visibility', 'true');
        menu.setAttribute('aria-expanded', 'true');
        menuIcon.setAttribute('src', 'images/icon-close.svg');
        bodyOpacity.setAttribute('opacity-visibility', 'true');

    } else if (visibleMenu === 'true') {
        menu.setAttribute('menu-visibility', 'false');
        menu.setAttribute('aria-expanded', 'false');
        menuIcon.setAttribute('src', 'images/icon-menu.svg');
        bodyOpacity.setAttribute('opacity-visibility', 'false');
    }
};


menuIcon.addEventListener('click', menuOpener); 

// LEFT / RIGHT ARROWS
let imgSelector = document.querySelector('.img_container');
let leftArrow = document.getElementById('left');
let rightArrow = document.getElementById('right');
let i = 1;

function moveRight() {
    i++;
    imgSelector.setAttribute('select', i);
    if (imgSelector.getAttribute('select') > 4) {
        imgSelector.setAttribute('select', 1);
        i = 1;
    }
};

i = 1;
function moveLeft() {
    i--;
    imgSelector.setAttribute('select', i);
    if (imgSelector.getAttribute('select') < 1) {
        imgSelector.setAttribute('select', 4);
        i = 4;
    }
};

rightArrow.addEventListener('click', moveRight);

leftArrow.addEventListener('click', moveLeft);

// LEFT / RIGHT ARROWS

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
let quantity = document.querySelector('.quantity');

function substraction() {
    quantity.textContent--;
    if (quantity.textContent < 0){
        quantity.textContent = 0;
        i = 0;
    }
};

function addition() {
    quantity.textContent++;
    if (quantity.textContent > 10){
        quantity.textContent = 10;
        i = 10;
    }
};

minus.addEventListener('click', substraction);

plus.addEventListener('click', addition);

// DELETE BASKET PRODUCT
let cartChild = document.querySelector('.cart_quantity');
let deleteItem = document.querySelector('.delete');
let deleted = false;

deleteItem.addEventListener('click', () => {
    deleted = true;
    cartChild.classList.add('hide');
    productBasket.classList.add('hide');
    emptyBasket.classList.remove('hide');
})

// CLICK ADD TO CART

const addToCartBtn = document.querySelector('.addtocart_btn');

let added = false;
function addToCart() {
    added = true;
    deleted = false;
    cartChild.textContent = quantity.textContent;
    if (cartChild.textContent === '0') {
        cartChild.classList.add('hide');
    } else {
        cartChild.classList.remove('hide');
    }
};


addToCartBtn.addEventListener('click', addToCart);

// BASKET
const cart = document.querySelector('.cart');
const basket = document.querySelector('.basket');

let emptyBasket = document.querySelector('.empty_basket');
let productBasket = document.querySelector('.basket_products_wrapper');

function showCart() {
    if (basket.getAttribute('basket-visibility') === 'false') {
        basket.setAttribute('basket-visibility', 'true');
    } else if (basket.getAttribute('basket-visibility') === 'true') {
        basket.setAttribute('basket-visibility', 'false');  
    }

    if (added === true && deleted === false) {
        if (cartChild.textContent === '0') {
            emptyBasket.classList.remove('hide');
            productBasket.classList.add('hide');
        } else if (cartChild.textContent > '0') {
            emptyBasket.classList.add('hide');
            productBasket.classList.remove('hide');
            let productQuantity = document.querySelector('.product_quantity');
            productQuantity.innerHTML = `$125.00 x ${cartChild.textContent}`;
            let productTotal = document.querySelector('.product_total');
            productTotal.innerHTML = '$' + 125 * cartChild.textContent + '.00';
        }
    } else {
        emptyBasket.classList.remove('hide');
        productBasket.classList.add('hide');
    }
}

cart.addEventListener('click', showCart);

// THUMBNAIL CLICK


const thumbnail = document.querySelectorAll('thumbnail_container');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');

img1.addEventListener('click', () => {
    let img = document.querySelector('.shoes_img1');
    img.setAttribute('src', 'images/image-product-1.jpg');
})

img2.addEventListener('click', () => {
    let img = document.querySelector('.shoes_img1');
    img.setAttribute('src', 'images/image-product-2.jpg');
})

img3.addEventListener('click', () => {
    let img = document.querySelector('.shoes_img1');
    img.setAttribute('src', 'images/image-product-3.jpg');
})

img4.addEventListener('click', () => {
    let img = document.querySelector('.shoes_img1');
    img.setAttribute('src', 'images/image-product-4.jpg');
})



// KEYDOWN
document.body.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Enter':
            addToCart();
            break;
        case '-':
            substraction();
            break;
        case '+':
            addition();
            break;
    }
})

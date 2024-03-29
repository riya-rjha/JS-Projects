const wishlistButtons = document.querySelectorAll('.wishlist');
const count = document.querySelector('.wishlistCount');
const popUp = document.querySelector('.popUp');
const text = document.getElementById('wish-text');
let idx = parseInt(count.innerHTML);
const addedShoes = new Set();

wishlistButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const shoeContainer = e.target.closest('.addItems');
        const shoeName = shoeContainer.querySelector('h2').textContent;
        if (!addedShoes.has(shoeName)) {
            const item = `${shoeName}`;
            text.classList.add('text-enlarge');
            text.innerHTML += `<div>${item}</div>`;
            addedShoes.add(shoeName);
            idx++;
            count.innerHTML = idx;
        }
    });
});

const fav = document.getElementById('wishIcon');
fav.addEventListener('click', () => {
    if (popUp.style.visibility === 'visible') {
        popUp.style.visibility = 'hidden';
    } else {
        popUp.style.visibility = 'visible';
    }
});

const cartBtn = document.querySelectorAll('.cart');
const cartPopUp = document.querySelector('.cartPopUp');
const cartText = document.getElementById('cart-text');
const addedShoesToCart = new Set();

cartBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        const cartContainer = e.target.closest('.addItems');
        const shoeName = cartContainer.querySelector('h2').textContent;
        const shoeCost = cartContainer.querySelector('p').textContent;
        if (!addedShoesToCart.has(shoeName)) {
            const item = `${shoeName} - Cost : ${shoeCost}`;
            cartText.classList.add('text-enlarge');
            cartText.innerHTML += `<div>${item}</div>`;
            addedShoesToCart.add(shoeName);
        }
    });
});

const cart = document.getElementById('cartIcon');
cart.addEventListener('click', () => {
    if (cartPopUp.style.visibility === 'visible') {
        cartPopUp.style.visibility = 'hidden';
    } else {
        cartPopUp.style.visibility = 'visible';
    }
});


const wishlistButtons = document.querySelectorAll('.wishlist');
const count = document.querySelector('.wishlistCount');
const popUp = document.querySelector('.popUp');
const text = document.getElementById('wish-text');
let idx = parseInt(count.innerHTML);
const addedFlowers = new Set();

wishlistButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const flowerContainer = e.target.closest('.addItems');
        const flowerName = flowerContainer.querySelector('h2').textContent;
        if (!addedFlowers.has(flowerName)) {
            const item = `${flowerName}`;
            text.classList.add('text-enlarge');
            text.innerHTML += `<div>${item}</div>`;
            addedFlowers.add(flowerName);
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
const addedFlowersToCart = new Set();

cartBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        const cartContainer = e.target.closest('.addItems');
        const flowerName = cartContainer.querySelector('h2').textContent;
        const flowerCost = cartContainer.querySelector('p').textContent;
        if (!addedFlowersToCart.has(flowerName)) {
            const item = `${flowerName} - Cost : ${flowerCost}`;
            cartText.classList.add('text-enlarge');
            cartText.innerHTML += `<div>${item}</div>`;
            addedFlowersToCart.add(flowerName);
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

let plusProduct = document.querySelectorAll('.product__quantity-control_inc');
let minusProduct = document.querySelectorAll('.product__quantity-control_dec');
let quantityOfGoods = document.querySelectorAll('.product__quantity-value');
let product = document.querySelectorAll('.product');
let basketButton = document.querySelectorAll('.product__add');
let cartProducts = document.querySelector('.cart__products');
let productImg = document.querySelectorAll('.product__image');

product.forEach((link) => {
    let id = link.dataset.id - 1;
    plusProduct[id].addEventListener('click', () => {
        quantityOfGoods[id].innerHTML++;
    })

    minusProduct[id].addEventListener('click', () => {
        if(quantityOfGoods[id].innerHTML <= 1){
            return;
        } else {
            quantityOfGoods[id].innerHTML--;
        }
    })

    basketButton[id].addEventListener('click', (b) => {

        let cartProduct = document.createElement('div');
        let cartImage = productImg[id].cloneNode(false);
        let cartQuantityOfGoods = document.createElement('div');
        let cart = document.querySelectorAll('.cart__product');

        cartProduct.classList.add('cart__product');
        cartProduct.dataset.id = link.dataset.id;
        cartImage.classList.replace('product__image', 'cart__product-image');
        cartQuantityOfGoods.classList.add('cart__product-count');
        cartQuantityOfGoods.innerHTML = quantityOfGoods[id].innerHTML;
        let productInCard = Array.from(cart).find(el => el.dataset.id === cartProduct.dataset.id);
        
        if(productInCard){
            productInCard.lastChild.innerHTML = Number(productInCard.lastChild.innerHTML) + Number(cartQuantityOfGoods.innerHTML);
        } else {
            cartProducts.insertAdjacentElement('beforeend', cartProduct);
            cartProduct.insertAdjacentElement('afterbegin', cartImage)
            cartProduct.insertAdjacentElement('beforeend', cartQuantityOfGoods);
        }
    })
})
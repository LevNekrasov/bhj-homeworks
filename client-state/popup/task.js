let modal = document.querySelector('.modal');

if(!localStorage.popup) {
    modal.classList.add('modal_active');
}

document.querySelector('.modal__close').addEventListener('click', () => {
    modal.classList.remove('modal_active');
    localStorage.setItem('popup', true);
})
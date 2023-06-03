let book = document.querySelector('.book');
let buttonsSize = document.querySelectorAll('.font-size');
let fontBig = document.querySelector('.font-size_big');
let fontNormal = document.querySelector('.font-size_active');
let fontSmall = document.querySelector('.font-size_small');

buttonsSize.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        link.classList.add('font-size_active');
    })
})

fontBig.addEventListener('click', () => {
    book.classList.remove('book_fs-small');
    book.classList.add('book_fs-big');
})

fontNormal.addEventListener('click', () => {
    book.classList.remove('book_fs-big', 'book_fs-small');
})

fontSmall.addEventListener('click', () => {
    book.classList.remove('book_fs-big');
    book.classList.add('book_fs-small');
})
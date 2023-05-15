let tab = document.querySelectorAll('.tab');
let tabActive = document.querySelector('.tab_active')
let tabContent = document.querySelectorAll('.tab__content');

tab.forEach((el, index) => {
    el.addEventListener('click', () => {
        tab.forEach(el => el.classList.remove('tab_active'));
        tabContent.forEach(el => el.classList.remove('tab__content_active'))
        tab[index].classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active')
    })
})
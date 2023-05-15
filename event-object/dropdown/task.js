let dropdown = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownLink = document.querySelectorAll('.dropdown__link')
let links = document.querySelectorAll('.dropdown__link')

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

dropdown.addEventListener('click',() => {
    dropdownList.classList.toggle('dropdown__list_active');
})

dropdownLink.forEach((el, index) => {
    el.addEventListener('click', () => {
        dropdown.innerHTML = dropdownLink[index].innerHTML;
        dropdownList.classList.toggle('dropdown__list_active');
    });
})
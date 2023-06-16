const item = document.querySelector('.item');
const loader = document.querySelector('.loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();
xhr.onload = () => {
    console.log(xhr)
    if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        let valute = xhr.response.response.Valute;

        for (var el in valute){
            let valuteName = valute[el].CharCode;
            let valuteValue = valute[el].Value;

            let newItem = item.cloneNode(false)
            items.insertAdjacentElement('beforeend', newItem);

            let itemCode = document.createElement('div');
            itemCode.classList.add('item__code');
            itemCode.innerHTML = valuteName;
            newItem.insertAdjacentElement('beforeend', itemCode);

            let itemValue = document.createElement('div');
            itemValue.classList.add('item__value');
            itemValue.innerHTML = valuteValue;
            newItem.insertAdjacentElement('beforeend', itemValue);

            let itemCurrency = document.createElement('div');
            itemCurrency.classList.add('item__currency');
            itemCurrency.innerHTML = 'руб.';
            newItem.insertAdjacentElement('beforeend', itemCurrency);
        }

        loader.classList.remove('loader_active');
        }
}
let progress = document.getElementById('progress')

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 1){
            progress.value = 0.25;
        }
        if(xhr.readyState === 2){
            progress.value = 0.5;
        }
        if(xhr.readyState === 3){
            progress.value = 0.75;
        }
        if(xhr.readyState === 4){
            progress.value = 1;
        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')

    let formData = new FormData(document.getElementById('form'))

    xhr.send(formData)
})
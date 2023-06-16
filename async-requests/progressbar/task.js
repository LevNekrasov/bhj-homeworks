let progress = document.getElementById('progress')

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    };

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')

    let formData = new FormData(document.getElementById('form'))

    xhr.send(formData)
})
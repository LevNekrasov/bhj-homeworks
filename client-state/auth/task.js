const signinForm = document.getElementById('signin__form');
let welcome = document.querySelector('.welcome')

if(localStorage.id){
    document.querySelector('.signin').classList.remove('signin_active')
    welcome.classList.add('welcome_active');
    document.getElementById('user_id').innerHTML = localStorage.id
}

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.responseType = 'json';
    let formData = new FormData(signinForm);
    xhr.send(formData);
    xhr.onload = () => {
        if (!xhr.response.success) {
            alert(`Неверный логин/пароль`);
        } else {
            document.querySelector('.signin').classList.remove('signin_active')
            welcome.classList.add('welcome_active');
            document.getElementById('user_id').innerHTML = xhr.response.user_id;
            localStorage.setItem('id', xhr.response.user_id)
        }
    }
})



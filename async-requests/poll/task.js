let pollTitle = document.querySelector('.poll__title');
let pollAnswers = document.querySelector('.poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();
xhr.onload = () => {
    let poll = xhr.response.data;
    pollTitle.innerHTML = poll.title;

    let answerOptions = poll.answers;
    answerOptions.forEach((el) => {
        let answerButton = document.createElement('button');
        answerButton.classList.add('poll__answer');
        answerButton.innerHTML = el;
        pollAnswers.insertAdjacentElement('beforeend', answerButton);
    })

    let button = document.querySelectorAll('.poll__answer');
    button.forEach((el) => {
        el.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
            location.reload();
        })
    })
}
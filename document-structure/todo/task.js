let tasksInput = document.querySelector('.tasks__input');
let button = document.querySelector('.tasks__add');

button.addEventListener('click', (event) => {
    event.preventDefault();
    let task = document.createElement('div');
    let taskTitle = document.createElement('div');
    let remove = document.createElement('a');
    task.classList.add('task');
    task.insertAdjacentElement('beforeend', taskTitle);
    document.querySelector('.tasks__list').insertAdjacentElement('afterbegin', task);
    task.insertAdjacentElement('beforeend', remove)
    tasksInput.value = '';
    taskTitle.innerHTML = tasksInput.value;
    taskTitle.classList.add('task__title');
    remove.classList.add('task__remove');
    remove.innerHTML = '&times;';
    remove.href = '#'
    remove.addEventListener('click', () => {
        task.remove();
    })
})
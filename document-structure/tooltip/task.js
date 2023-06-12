let tooltip = document.querySelectorAll('.has-tooltip');

tooltip.forEach((link) => {
    let el = document.createElement('div');
    el.innerHTML = link.title;
    el.classList.add('tooltip');
    link.insertAdjacentElement('afterend', el);
        
    link.addEventListener('click', (event) => {
        event.preventDefault();
        el.classList.add('tooltip_active');
        el.style.left = event.clientX + 'px';
        el.style.top = event.clientY + 'px';
        link.onmouseleave = () => {
            el.classList.remove('tooltip_active');
        }
    })
})
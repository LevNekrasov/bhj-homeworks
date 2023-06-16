let textarea = document.getElementById('editor');

textarea.textContent = localStorage.text

textarea.addEventListener('input', () => {
    localStorage.setItem('text', textarea.value)
})
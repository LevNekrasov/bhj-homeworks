let textarea = document.getElementById('editor');

// localStorage.setItem('text', textarea.value)
let localStorage = localStorage.getItem('text');

textarea.textContent = localStorage

textarea.addEventListener('input', () => {
    // textarea.innerHTML = textarea.value;
    // localStorage.setItem('text', textarea.value)
    console.log(textarea.value)
})
// localStorage.setItem('text', textarea.value)
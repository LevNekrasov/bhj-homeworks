let reveal = document.querySelectorAll('.reveal');

function isVisible(){
    reveal.forEach((el) => {
        let { top, bottom } = el.getBoundingClientRect()
        if(bottom > 0 && top < window.innerHeight){
            el.classList.add('reveal_active')
        }
        else{
            el.classList.remove('reveal_active')
        }
    })
}

window.addEventListener('scroll', isVisible);
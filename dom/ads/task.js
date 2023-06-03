let rotator = document.querySelectorAll('.rotator__case');
let i = 0;

setInterval(() => {
    let oldElement = i - 1;
    if(i > 0){
        rotator[oldElement].classList.remove('rotator__case_active');
    }
    if(i >= rotator.length){
        rotator[oldElement].classList.remove('rotator__case_active');
        i = 0;
    }
    rotator[i].classList.add('rotator__case_active');
    rotatorActive = document.querySelector('.rotator__case_active');
    console.log(rotatorActive.dataset);
    rotatorActive.style.color = rotatorActive.dataset.color;
    i++;
}, 1000);



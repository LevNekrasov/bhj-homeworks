let hours = 0;
let minutes = 0;
let seconds = 20;
let number = document.getElementById('timer')
let message = 'Котика в студию??';
let timer = setInterval(()=>{
    seconds--;
    console.log(minutes + ':' + seconds);
    let count = String(hours).padStart(2,'0') + ':' + String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0');
    number.innerHTML = count;
    if(minutes == 0 && seconds == 0 && hours == 0){
        result = window.confirm(message)
        location.assign('https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fwebpulse.imgsmail.ru%2Fimgpreview%3Fmb%3Dwebpulse%26key%3Dpulse_cabinet-image-e2b39b59-0e87-47de-9c5c-c2c5183b2dce&lr=50&pos=2&rpt=simage&text=котики')
        clearInterval(timer)
    }
    if (seconds == 0 ) {
        minutes--;
        seconds = 60;
        
    }
    if(minutes < 0){
        hours--;
        minutes = 59;
        }
}, 1000)
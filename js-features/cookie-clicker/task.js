let cookie = document.getElementById('cookie');
let number = 0;
let lastClick = 0;
cookie.onclick = function(){
    number++;
    cookie.width = 220;
    let date = new Date();
    let time = date.getTime();
    let clickSecond = (1 / ((time - lastClick) / 1000)).toFixed(2);
    document.getElementById('clicker__Second').innerHTML = clickSecond;
    lastClick = time;
    document.getElementById('clicker__counter').innerHTML = number;
}
setInterval(()=>{
    cookie.width = 200;
}, 150)
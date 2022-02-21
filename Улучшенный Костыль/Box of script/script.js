function alert1() {
    alert('Резюме отправлено в загрузки')
}
let download_rezum = document.querySelector('.download_rezum');
download_rezum.addEventListener('click', alert1);



function alert2() {
    alert('Посетить сайт на данный момент нельзя')
}
let btn = document.querySelector('.btn');
btn.addEventListener('click', alert2);


function alert3() {
    alert('Письмо отправлнено мне на почту')
}
let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', alert3);



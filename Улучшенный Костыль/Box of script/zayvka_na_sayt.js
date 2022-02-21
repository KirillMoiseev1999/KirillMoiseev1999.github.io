let sum1 = document.querySelector('.sum1');
let sum2 = document.querySelector('.sum2');
let sum3 = document.querySelector('.sum3');
let al =document.querySelector('.alert');

const price=750;
let result=0;

al.addEventListener('click', go)

function go(){
    alert('Заявка отправлена !')
}

let radio1 = document.getElementsByName('group1');
for(let i=0; i<radio1.length;i++){
    radio1[i].onchange = testRadio1;
}
function testRadio1(){
 sum=this.value;
sum1.innerHTML=sum*price+'p.';
}


let radio2 = document.getElementsByName('group2');
for(let i=0; i<radio2.length;i++){
    radio2[i].onchange = testRadio2;
}
function testRadio2(){
    sum=this.value;
    sum2.innerHTML=sum*price+'p.';
}


let radio3 = document.getElementsByName('group3');
for(let i=0; i<radio3.length;i++){
    radio3[i].onchange = testRadio3;
}
function testRadio3(){
    sum=this.value;
    sum3.innerHTML=sum*price+'p.';
}


















// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let btn3 = document.querySelector('.btn3');

// let btn4 = document.querySelector('.btn4');
// let btn5 = document.querySelector('.btn5');
// let btn6 = document.querySelector('.btn6');

// let btn7 = document.querySelector('.btn7');
// let btn8 = document.querySelector('.btn8');
// let btn9 = document.querySelector('.btn9');













// btn1.addEventListener('click',schet)
// btn2.addEventListener('click',schet)
// btn3.addEventListener('click',schet)

// btn4.addEventListener('click',schet)
// btn5.addEventListener('click',schet)
// btn6.addEventListener('click',schet)

// btn7.addEventListener('click',schet)
// btn8.addEventListener('click',schet)
// btn9.addEventListener('click',schet)












// function low_price(){
//     value_low=1;
// }
// function medium_price(){
//     value_low=2;
// }
// function height_price(){
//     value_low=3;
// }


// function low_price(){
//     value_medium=1;
//     console.log(price*(value_low+value_medium+value_height))
// }
// function medium_price(){
//     value_medium=2;
// }
// function height_price(){
//     value_medium=3;
// }


// function low_price(){
//     value_height=1;
//     console.log(price*(value_low+value_medium+value_height))
// }
// function medium_price(){
//     value_height=2;
//     console.log(price*(value_low+value_medium+value_height))
// }
// function height_price(){
//     value_height=3;
//     console.log(price*(value_low+value_medium+value_height))
// }
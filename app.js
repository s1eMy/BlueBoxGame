let button = document.querySelector('#button');
let box = document.querySelectorAll('.box');
let title = document.querySelector('.title')
let blue = 'rgb(0, 0, 255)';

for (let i = 0; i < 6; i++){
    box[i].addEventListener('click', () => {
        box[i].classList.toggle('chooseBox');
    })

    box[i].style.background = getRandomColor();
}

if ([...box].find((el) => el.style.background !== blue)){

    for (let i = 0; i < 3; i++){
        box[getRandomBox()].style.background = blue
    }
}

function getRandomColor(){
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16)
   
    while(color.length < 6) {
        color = "0" + color
    }

    return "#" + color
}

function getRandomBox(){
    let num = Math.floor(Math.random() * 10 )
    if (num > 5){
        num = 1
    }
    return num
}

let positive = []

function checkBlueBox(){
    positive = []
    box.forEach((element) =>{
        if(element.style.background == blue){
            positive.push(element)
        }
    })
    return positive
}

function checkSelectedBox(){
    checkBlueBox()
    let quality = [];
    box.forEach((element) =>{
        if(element.className == 'box chooseBox'){
            quality.push(element)
        }
    })
    if(quality.length > positive.length){
        alert('Только синие!')
    }
    if(quality.every((el) =>{
        if(el.style.background == blue){
            return true
        }else{
            title.innerText = 'Выберите СИНИЕ квадраты'
        }
    }) && quality.length == positive.length){
        title.innerText = 'Молодец'
        setTimeout(() => {
            window.location.reload()
        }, 1500);
    }
}

button.addEventListener('click', checkSelectedBox)


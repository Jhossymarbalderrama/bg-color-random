const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const title_nav = document.querySelector(".nav-title");

document.getElementById("btn-hex").style.backgroundColor = "#6e6e6e";

btn.addEventListener('click', function (){
    setColorDOM();
})

function getRandomNumber(len){
    return Math.floor(Math.random() * len);
}

function getRandomColor(){
    let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = "#";

    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber(hex.length)];
    }

    return hexColor;
}

function setColorDOM(){
    let colorRandom = getRandomColor()
    document.body.style.backgroundColor = colorRandom;
    color.textContent = colorRandom;
    title_nav.style.color = colorRandom;
    // color.style.color = colorRandom;
}

setColorDOM();
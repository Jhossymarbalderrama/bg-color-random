const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const title_nav = document.querySelector(".nav-title");
document.getElementById("btn-rgba").style.backgroundColor = "#6e6e6e";

btn.addEventListener('click', function(){    
    setColorDOM();
});


function getRandomNumber(){
    return Math.floor(Math.random() * 255);
}

function getColorRandom(){
    return `rgba(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
}

function setColorDOM(){
    colorRandom = getColorRandom();
    document.body.style.backgroundColor = colorRandom;
    color.textContent = colorRandom;
    title_nav.style.color = colorRandom;
    // color.style.color = colorRandom;
}

setColorDOM();
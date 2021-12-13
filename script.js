
// Typewriting module for MAIN
const mainMessage = document.querySelector('.main-message');

let message = ['Take a look at my projects'];
let textPosition = 0;
let speed = 100;


const typewritter = () => {
    document.querySelector('.main-message').innerHTML = message[0].substring(0, textPosition) + '<span>\u25ae</span>';
    if(textPosition++ != message[0].length) {
        setTimeout(typewritter, speed) 
    }
}

window.addEventListener('load', typewritter);



// get Elements from DOM

const mainImg = document.querySelector('#imgChange');
const start = mainImg.src = '';
const htmlDescription = document.querySelector('.html-description');
const messageMain = document.querySelector('.main-img');

// Mouse Over & Mouse Out functions

const mouseOver = (imgSrc) => {
    mainMessage.style.display = 'none';
    mainImg.src = imgSrc;
    messageMain.style.display = 'flex';
    mainImg.style.display = 'inline-flex';
    htmlDescription.style = 'width: 35%; margin: 3em 2.5em;font-size: 2.5em;line-height: 1.5;text-align: left';
    htmlDescription.style.display = 'block'

}

const mouseOut = () => {
    mainMessage.style.display = 'block';
    mainImg.src = start;
    mainImg.style.display = 'none';
    messageMain.style.display = 'block';
    mainImg.style.display = 'none';
    htmlDescription.style.display = 'none';
}

// HTML Project Button
const htmlButtonIn = () => mouseOver('img/main-img.jpg');
const htmlButtonOut = () => mouseOut();

// CSS Project Button
const cssButtonIn = () => mouseOver('img/css-img.jpeg');
const cssButtonOut = () => mouseOut();

// JavaScript Button 
const jsButtonIn = () => mouseOver('img/js-img.jpg');
const jsButtonOut = () => mouseOut();












// const bounding = messageMain.getBoundingClientRect();

// Display element when in viewport
// window.addEventListener('scroll', function () {
//    const clientHeight = document.documentElement.clientHeight;
//    const messageMainY = messageMain.getBoundingClientRect().y;
//
//    if (clientHeight > messageMainY) {
//        typewritter();
//   }
//})


// Change Img onButton Hover



/* 
htmlBtn.addEventListener('onmouseenter', () => {
    mainImg.style.display = 'visible';
    mainMessage.style.display = 'none'; 
    mainImg.src = hover
});
htmlBtn.addEventListener('onmouseleave', () => {
    mainImg.style.display = 'none';
    mainMessage.style.display = 'visible'; 
    mainImg.src = start;
});

*/







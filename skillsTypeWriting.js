
const skillsDescription = document.querySelector('.skills-description');

let skillsMessage = ['This are my simple skills that I used in order to build the ThinQ project, my first project'];
let skillsTextPosition = 0;
let skillsSpeed = 100;


const skillsTypewritter = () => {
    document.querySelector('.skills-description').innerHTML = skillsMessage[0].substring(0, skillsTextPosition) + '<span>\u25ae</span>';
    if(skillsTextPosition++ != skillsMessage[0].length) {
        setTimeout(skillsTypewritter, skillsSpeed) 
    }
}

window.addEventListener('load', skillsTypewritter);



// MISSION modify
const missionModifAlgorithmsPage = () => {
    let getLogo = document.querySelector('.logo');
    let getParagraph = document.querySelector('.presentation-text');
    

    getLogo.style.display = 'none';
    getParagraph.innerHTML = 'Algorithms';
    let paragraphStyle = `
    font-size: 3em;
    text-align: left;
    letter-spacing: 5.2px;
    font-weight: bold;
    line-weight: 0;
    margin: 1em 0 0 0;
    `
    getParagraph.style = paragraphStyle;

    let missionDivStyle = `
    width: 100%;
    background-image: url(./img/projects-img.png);
    background-position: center;
    background-size: cover;
    height: 20em;
    padding: 4em 0em 0 0em;
    `
    getMissionDiv.style = missionDivStyle;

    let getLinkToHomePage = document.querySelector('.link');
    let getAFromLink = document.querySelector('.link-a');

    let style = `
    display: block;
    text-align: left;
    margin-left: 6em;
    width: 10rem;
    color: white;
    margin-top: 0;
    `

    let linkAStyle = `
    cursor: pointer;
    color:white;
    text-decoration: none`;
    

    getLinkToHomePage.style = style;
    getAFromLink.style = linkAStyle;
    getAFromLink.addEventListener('mouseenter', (event) => {
        event.target.style.color = 'rgb(212, 158, 88)';
    });
    getAFromLink.addEventListener('mouseout', (event) => {
        event.target.style.color = 'white';
    });
}



// create Paragraph with back button
const createPAlgorithmsPage = () => {

////// MAIN SECTION ///////

// remove div with background IMG
let getBackgroundImg = document.querySelector('.moving-img1');

const removeImg = () => {
    let removeBackImgDiv = getBackgroundImg;
    removeBackImgDiv.remove();
}

removeImg();

// Create Div for Projects Title
const createDiv = () => {
    let createDiv = document.createElement('div');
    createDiv.setAttribute('id', 'backTextDiv');
    getMainSection.insertBefore(createDiv, getMainSection.firstChild); 

    let backTextDivStyle = `
    padding: 6em 0 0 0;`

    createDiv.style = backTextDivStyle;
}
createDiv();

// create Back Paragraph
const createParagraph = () => {
    let createBackP = document.createElement('p');
    createBackP.setAttribute('id', 'backText');
    let createText = document.createTextNode('ALGORITHMS');
    createBackP.appendChild(createText);
    document.querySelector('#backTextDiv').appendChild(createBackP);

    let styleBackText = `
    font-weight: bold;
    margin: 3em auto 0px;
    text-align: center;
    font-size: 5em;
    -webkit-text-fill-color: rgb(255, 255, 255);
    -webkit-text-stroke: 0px rgb(0, 0, 0);
    opacity: 0.04;`

    createBackP.style = styleBackText;
}
createParagraph();

// Create Front Paragraph
const createParagraph2 = () => {
    let createFrontP = document.createElement('p');
    createFrontP.setAttribute('id', 'frontParagrapgh');
    let createTextForFrontP = document.createTextNode('Leave all to Algorithms');
    createFrontP.appendChild(createTextForFrontP);
    document.querySelector('#backTextDiv').appendChild(createFrontP);

    let styleFrontText = `
    margin: 0 auto;
    text-align: center;
    z-index: 1;
    margin-top: -2.3em;
    font-size: 1.8em;
    font-weight: bold;`

    createFrontP.style = styleFrontText;
}
createParagraph2();

// Delete Projects Visualize Section
const removePresentationDiv = () => {
    let removeDiv = document.querySelector('.main-img');
    removeDiv.remove();
    let removeDivBtn = document.querySelector('.div-btn');
    removeDivBtn.remove();

// Delete Skills section
    let removeImgMoving2 = document.querySelector('.moving-img2');
    removeImgMoving2.remove();
    let removeSills = document.querySelector('section');
    removeSills.remove();

// Delete Contact Div
    let removeContactDiv = document.querySelector('.contact-img');
    removeContactDiv.remove();
}
removePresentationDiv();

// Create Div Projects
const createDivMain = () => {
    let mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');
    document.querySelector('.main').appendChild(mainDiv);

    let mainDivStyle = `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10em 0;`

    mainDiv.style = mainDivStyle;
}
createDivMain();

const createImg = () => {
    let backImg = document.createElement('img');
    backImg.setAttribute('id', 'backImg');
    document.querySelector('#mainDiv').appendChild(backImg);
    backImg.src = './img/algorithmsM-img.jpg';

    let backImgStyle = `
    width: 100%;
    position: relative;
    object-position: center;
    opacity: .5;
    height: 35em;
    object-fit: cover`

    backImg.style = backImgStyle;
}
createImg();

const createDivLeft = () => {
    let leftDiv = document.createElement('div');
    leftDiv.setAttribute('id', 'leftDiv');
    document.querySelector('#mainDiv').appendChild(leftDiv);

    let leftDivStyle = `
    position: absolute;
    margin-top: 5em;
    width: 50%;
    margin-left: 4em;`

    leftDiv.style = leftDivStyle;

    let leftH = document.createElement('h2');
    leftH.setAttribute('id', 'leftH');
    let leftHText = document.createTextNode('About Project');
    leftH.appendChild(leftHText);
    document.querySelector('#leftDiv').appendChild(leftH);

    let leftHStyle = `
    font-weight: 800;
    font-size: 2em;`

    leftH.style = leftHStyle;

    let leftParagraph = document.createElement('p');
    leftParagraph.setAttribute('id', 'leftParagraph');
    let paragraphText = document.createTextNode('Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.');
    leftParagraph.appendChild(paragraphText);
    document.querySelector('#leftDiv').appendChild(leftParagraph);

    let leftParagraphStyle = `
    line-height: 1.7;
    text-align: justify;`

    leftParagraph.style = leftParagraphStyle
}
createDivLeft();

const createDivRight = () => {
    let rightDiv = document.createElement('div');
    rightDiv.setAttribute('id', 'rightDiv');
    document.querySelector('#mainDiv').appendChild(rightDiv)

    let rightDivStyle = `
    position: absolute;
    margin-top: 8em;
    width: 30%;
    text-align: left;
    left: 60%;`

    rightDiv.style = rightDivStyle;
}

createDivRight();

const mainSectionModify = () => {
    let mainStyle = `
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    justify-content: center;
    height: 40em;
    padding: 5em 0 10em 0;`

    getMainSection.style = mainStyle;
}
mainSectionModify();

const modifyFormsDiv = () => {
    let getForms = document.querySelector('.forms-div');

    let formsStyle = `
    padding-top: 3em;`

    getForms.style = formsStyle;
};

modifyFormsDiv();

const addTable = () => {
    let fristColumn = ["Location:", "Technology:", "Team Lead:", "Field:", "Value"];
    let secondColumn = ["Timisoara", "Blockchain", "Albert Camus", "Algorithms", "$221.000"];

    let items = [fristColumn, secondColumn];

    let tableDiv = document.getElementById('rightDiv');
    let table = document.createElement('table');
    table.setAttribute('id', 'table');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    table.appendChild(tbody);

    //create header
    tbody.appendChild(tr);

    let heading = ['Clients:', 'AIPSS'];

    let tdStyle = `
    border-bottom: 1px solid #efefef`;

    for(let col = 0; col<heading.length; col++){
        let th = document.createElement('th');
        th.style.width = '75px';
        th.appendChild(document.createTextNode(heading[col]));
        tr.appendChild(th);

        th.style = tdStyle;
    }

    for (let f = 0; f<fristColumn.length; f++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        td1.appendChild(document.createTextNode(fristColumn[f]));
        td2.appendChild(document.createTextNode(secondColumn[f]));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);


        td1.style = tdStyle;
        td2.style = tdStyle;
    }

    tableDiv.appendChild(table);

    let tableStyle = `
    margin: 0 auto;
    line-height: 2;
    width: 80%;
    background-color: white;
    height: 21em;
    padding: 1.5em;
    color: black;`



    table.style = tableStyle;
    
}
addTable();

}
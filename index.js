// Write your code here!
const newMain = document.querySelector("main#main");
newMain.remove();
//creates a new h1
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'JOJO is the champion';

document.body.appendChild(newHeader);
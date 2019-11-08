//----------------STATES------------------------//
var num;
var col = document.getElementById('start');
col.style.backgroundColor = 'green'
console.log(num)
//----------------CACHE-------------------------//
var displayEl = document.querySelector('h1 span');
//----------------EVENT LISTENERS---------------//
document.getElementById('start').addEventListener('click', function() {
    num = num+1;
    render();
    console.log(num)
});
//---------------LEVEL FUNCTIONS-------------------//
function lvlOne(){
    var col = document.getElementById('start');
    if (num === 1) {
        message.textContent = 'LEVEL 1: Where to start...?';
        start.innerHTML = '404 ERROR: btn disabled...';
        col.style.backgroundColor = 'red'
        document.getElementById('start').disabled = true;
    }
};
function lvlTwo() {
    if (num === 2 && col.style.backgroundColor === 'green') {
        message.textContent = 'LEVEL 2: Are we there yet...?';
        start.innerHTML = 'Start: Red? Why no Green?!';
        document.getElementById('start').disabled = false;
    } 
    if (num === 2 && col.style.backgroundColor === 'red') {
        message.textContent = 'LEVEL 2: Are we there yet...?';
        start.innerHTML = 'Start: Red? Why no Green?!';
        document.getElementById('start').disabled = true;
    } 
};
function lvlThree(){
    if (num === 3) {
        message.textContent = 'LEVEL 3: Ghost button!';
        start.innerHTML = 'WhooOOooOOO!';
        document.getElementById('start').style.opacity = 0.4;
        document.getElementById('start').style.backgroundColor = 'green';
        document.getElementById('start').disabled=false;
    }
};
function endFunction(){
    if (num === 4) {
        message.textContent = 'Yay! NOW you can start!';
        start.innerHTML = 'END...';
        document.getElementById('start').style.opacity = 1;
        document.getElementById('start').disabled = true;
    }
};
//-----------------CHATBOT/TERMINAL----------------//
function textBox() {
    var li = document.createElement('li');
    var ul = document.getElementById('myUl');
    var input = document.getElementById('input');
    li.setAttribute('id', input.value);
    li.appendChild(document.createTextNode('USER: ' + input.value));
    ul.appendChild(li);
    eval(input.value)
};
//---------------RENDER/INIT---------------------//
function init(){
    num = 0;
    render();
}
function render() {
    displayEl.textContent = num;
    lvlOne(); 
    lvlTwo();
    lvlThree();
    endFunction()
} 
init();
//----------------END------------------------------//

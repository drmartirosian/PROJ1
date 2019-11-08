//----------------STATES------------------------//
var num;
//----------------CACHE-------------------------//
var displayEl = document.querySelector('h1 span');
//----------------EVENT LISTENERS---------------//
document.getElementById('start').addEventListener('click', function() {
    num = num+1;
    render();
});
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
//---------------LEVEL FUNCTIONS-------------------//
function lvlOne(){
    if (num === 1) {
        message.textContent = 'LEVEL 1: Where to start...?';
        start.innerHTML = '404 ERROR: btn disabled...';
        document.getElementById('start').disabled = true;
    }
};
function lvlTwo(){
    if (num === 2) {
        message.textContent = 'LEVEL 2: Green, Not Red!';
        start.innerHTML = '>:(';
        document.getElementById('start').style.backgroundColor = 'red';
    }
};
function lvlThree(){
    if (num === 3) {
        document.getElementById('start').disabled=false;
        message.textContent = 'LEVEL 3: DOH!';
        start.innerHTML = 'START GAME!';
        document.getElementById('start').style.opacity = 0.4;
    }
};
function endFunction(){
    if (num === 4) {
        message.textContent = 'Yay! NOW you can start!';
        start.innerHTML = 'END...';
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
//----------------END------------------------------//

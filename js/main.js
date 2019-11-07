//----------------STATES------------------------//
var num;
//----------------CACHE-------------------------//
var displayEl = document.querySelector('h1 span');
//----------------EVENT LISTENERS---------------//
document.querySelector('button').addEventListener('click', function() {
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
        // console.log('LVL1 FIRED');
        message.textContent = 'LEVEL 1: Where to start...?';
        start.innerHTML = '404 ERROR: Btn disabled...';
        document.getElementById('start').style.opacity = 0.4;
        document.getElementById('start').disabled = true;
    }
};
function lvlTwo(){
    if (num === 2) {
        // console.log('LVL2 FIRED');
        message.textContent = 'LEVEL 2: Make it stop...';
        start.innerHTML = 'DOH!';
        document.getElementById('start').style.opacity = 1;
    }
};
function lvlThree(){
    if (num === 3) {
        // console.log('LVL3 FIRED');
        message.textContent = 'LEVEL 3: *imagine message here*';
        start.innerHTML = 'START GAME!';
    }
};
//-----------------CHATBOT/TERMINAL----------------//
//APPEND USER COMMUNICATIONS
function textBox() {
    var li = document.createElement('li');
    var ul = document.getElementById('myUl');
    var input = document.getElementById('input');
    li.setAttribute('id', input.value);
    li.appendChild(document.createTextNode('USER: ' + input.value));
    ul.appendChild(li);
    //SEND TO REAL CONSOLE...
    eval(input.value)
    // console.log(`this is the code as a string ${input.value}`);
};
//----------------END------------------------------//
function endFunction(){
    if (num === 4) {
        message.textContent = 'YAY! Now we can start the game!';
        start.innerHTML = 'START GAME!';
        // console.log('GAME END');
    }
};
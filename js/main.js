//---------------variables


//---------------constants-----------------------------
const levelArray = [];
// const userArray = []; //for user answers


//--------------------events-----------------------
// var nameHere = document.getElementById('id here');
//start button
var startBtn = document.getElementById('start');

//ALLOWS USER TO INPUT MESSAGES
function textBox() {
    var ul = document.getElementById('myUl');
    var input1 = document.getElementById('input1');
    var li = document.createElement('li');
    li.setAttribute('id', input1.value);
    li.appendChild(document.createTextNode('USER: ' + input1.value));
    ul.appendChild(li);
};


//--------------------listeners--------------------------
// object.addEventListener(event, function)
startBtn.addEventListener('click', levelZero);
startBtn.addEventListener('click', levelOne);
startBtn.addEventListener('click', levelTwo);
startBtn.addEventListener('click', levelThree);


//----------------------functions------------------//




// LEVEL ZERO
function levelZero() {
    if (levelArray.length !== 4) { 
        levelArray.push(1); 

    }
    if (levelArray.length >= 4) { 
    document.getElementById('start');
    document.getElementById('start').disabled = true;
    message.textContent = 'Game End! ...Play Again?';
    }
    console.log(levelArray.length);
};



// LEVEL1
function levelOne(){
    if (levelArray.length == 1) {
        message.textContent = 'LEVEL 1: Where to start...?';
        start.innerHTML = '404 ERROR';
        document.getElementById('start').disabled = true;
    };
};
//SOLUTION => "document.getElementById('start').disabled = false;"


//LEVEL2 
function levelTwo(){
    if (levelArray.length == 2) {
        message.textContent = 'LEVEL 2: working title';
        start.innerHTML = 'START';
        var startRemove = document.getElementById('start');
        startRemove.remove();
    };
};


//LEVEL3
function levelThree(){
    if (levelArray.length == 3) {
        message.textContent = 'LEVEL 3: working title';
    };
};


console.log(levelArray.length);
//-------------------LEVELS END-----------------//

// document.getElementById('start').id='tart'
// document.getElementById('start').disabled = true;
//---------------variables


//---------------constants-----------------------------
const levelArray = [];
const userArray = [];


//--------------------events-----------------------
// var nameHere = document.getElementById('id here');
//start button
var startBtn = document.getElementById('start');

//ENTER INPUT INFO
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

console.log(levelArray.length);

// LEVEL ZERO
function levelZero() {
    //number of levels implimented: 3
    if (levelArray.length !== 4) {
        levelArray.push(1);
    }
    //game ends at 'level': 4
    if (levelArray.length >= 4) {
    document.getElementById('start');
    message.textContent = 'Game End! ...Play Again?';
    }
    console.log(levelArray.length);
};



// LEVEL1
function levelOne(){
    if (levelArray.length == 1) {
        message.textContent = 'LEVEL 1: Where to start...?';
        // document.getElementById('start').id='broken-start-button'
    };
};


//LEVEL2 
function levelTwo(){
    if (levelArray.length == 2) {
        message.textContent = 'LEVEL 2: working title';
    };
};


//LEVEL3
function levelThree(){
    if (levelArray.length == 3) {
        message.textContent = 'LEVEL 3: working title';
    };
};



//-------------------LEVELS END-----------------//
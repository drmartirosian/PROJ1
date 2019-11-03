//---------------variables


//---------------constants
var levelArray = [];

//----------------------arrays
var level = 1;


//---------------cache (what changes)

//--------------------events
// var nameHere = document.getElementById('id here');

var startBtn = document.getElementById('start');
var enterBtn = document.getElementById('enter');
var inputBox = document.getElementById('input');

//--------------------listeners
// object.addEventListener(event, function)

startBtn.addEventListener('click', levelZero);
startBtn.addEventListener('click', levelOne);
startBtn.addEventListener('click', levelTwo);
startBtn.addEventListener('click', levelThree);
startBtn.addEventListener('click', endGame);

enterBtn.addEventListener('click', enter);
inputBox.addEventListener('click', input);


//----------------------functions------------------//
// NEXT LEVEL
function levelZero() {
    //number of levels implimented: 3
    if (levelArray.length !== 4) {
        levelArray.push(1);
        // console.log(levelArray);
    }
    //game ends at 'level': 4
    if (levelArray.length >= 4) {
        // console.log('Level: ' + 'game over x...');
    }
};


//ENTER INPUT INFO
function enter() {
    console.log('ENTER BUTTON WORKS');
};

//INPUT BOX
function input() {
    console.log('PUSH THIS TO MESSAGE');
};


//------------------LEVEL FUNCTIONS---------------//
function levelOne(){
    if (levelArray.length == 1) {
        console.log('level 1: Where to start...?');
    };
};


function levelTwo(){
    if (levelArray.length == 2) {
        console.log('level 2: working title');
    };
};


function levelThree(){
    if (levelArray.length == 3) {
        console.log('level 3: working title');
    };
};


function endGame(){
    if (levelArray.length == 4) {
        document.getElementById('start').disabled = true;
        console.log('Game over...');
    };
};

console.log('Level ' + levelArray.length + ': before we begin...');
//-------------------LEVELS END-----------------//
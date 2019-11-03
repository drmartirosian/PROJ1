//---------------variables


//---------------constants
var levelArray = [];
var inputBox = [];

//----------------------arrays

//---------------cache (what changes)

//--------------------events
// var nameHere = document.getElementById('id here');
var startBtn = document.getElementById('start');



//--------------------listeners
// object.addEventListener(event, function)
startBtn.addEventListener('click', levelZero);
startBtn.addEventListener('click', levelOne);
startBtn.addEventListener('click', levelTwo);
startBtn.addEventListener('click', levelThree);
startBtn.addEventListener('click', endGame);




//----------------------functions------------------//
//ENTER INPUT INFO
function fn1() {
    var userInput = document.getElementById('text1').value;
    list.append('value: ' + userInput);
};


// LEVEL ZERO
function levelZero() {
    //number of levels implimented: 3
    if (levelArray.length !== 4) {
        levelArray.push(1);
    }
    //game ends at 'level': 4
    if (levelArray.length >= 4) {
    }
};

// LEVEL1
function levelOne(){
    if (levelArray.length == 1) {
        message.textContent = 'LEVEL 1: Where to start...?';
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


//END GAME
function endGame(){
    if (levelArray.length == 4) {
        document.getElementById('start').disabled = true;
        message.textContent = 'Game End! ...Play Again?';
    };
};
//-------------------LEVELS END-----------------//
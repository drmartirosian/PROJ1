//---------------variables-------------------------

//---------------constants-------------------------
const levelArray = [];
// const userArray = []; //for user answers

//--------------------events-----------------------
// var nameHere = document.getElementById('id here');

//start button
var startBtn = document.getElementById('start');


//ALLOWS USER TO INPUT MESSAGES
function textBox() {
    //li variable
    var li = document.createElement('li');
    //User comments section
    var ul = document.getElementById('myUl');
    //user inputs
    var input1 = document.getElementById('input1');

    li.setAttribute('id', input1.value);
    li.appendChild(document.createTextNode('USER: ' + input1.value));
    ul.appendChild(li);
};



//allows fehler input messages
// var fehlerSays() {
//     for (var i = 0; i < ul.length; i++) {
//         var ul = document.getElementById('myUl');
//         var li = document.createElement('li');
//         li.appendChild(document.createTextNode(name));
//         ul.appendChild(li);
//     }
// };

//--------------------listeners--------------------------
// object.addEventListener(event, function)
startBtn.addEventListener('click', levelZero);
startBtn.addEventListener('click', levelOne);
startBtn.addEventListener('click', levelTwo);
startBtn.addEventListener('click', levelThree);
startBtn.addEventListener('click', endGame);


//----------------------functions------------------//

// LEVEL ZERO
function levelZero() {
    //initial game
    if (levelArray.length !== 4) { 
        levelArray.push(1); 
        //Opening FEHLER message
    }
    console.log(levelArray.length);
};


// LEVEL1
function levelOne(){
    if (levelArray.length == 1) {
        message.textContent = 'LEVEL 1: Where to start...?';
        // start.innerHTML = '404 ERROR';
        // document.getElementById('start').disabled = true;
    };
//SOLUTION => 
//"document.getElementById('start').disabled = false;"
};


//LEVEL2 
function levelTwo(){
    if (levelArray.length == 2) {
        message.textContent = 'LEVEL 2: Oops...';
        // start.innerHTML = 'START';
        // var startRemove = document.getElementById('start');
        // startRemove.remove();
    };
//SOLUTION =>
// document.body.innerHTML += '<button>START</button>';
// $0.id='start';
};


//LEVEL3
function levelThree(){
    if (levelArray.length == 3) {
        message.textContent = 'LEVEL 3: working title';
        // document.getElementById('start').id='tart';
    };
//SOLUTION
// document.getElementById('tart').id='start'
};


//END GAME
function endGame(){
    if (levelArray.length >= 4) { 
        document.getElementById('start');
        document.getElementById('start').disabled = true;
        message.textContent = 'Game End! ...Play Again?';
    }
};



console.log(levelArray.length);
//-------------------LEVELS END-----------------//


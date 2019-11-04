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
    var ul = document.getElementById('myUl');
    var input1 = document.getElementById('input1');
    var li = document.createElement('li');

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


//----------------------functions------------------//

// LEVEL ZERO
function levelZero() {
    if (levelArray.length !== 4) { 
        levelArray.push(1); 
        //Opening FEHLER message 
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
        message.textContent = 'LEVEL 2: Oops...';
        start.innerHTML = 'START';

        var startRemove = document.getElementById('start');
        startRemove.remove();
    };
};
//SOLUTION =>
// function addElement(parentId, elementTag, elementId, html) {
//     var p = document.getElementById('body');
//     var newElement = document.createElement('button');

//     newElement.setAttribute('start', elementId);
//     newElement.innerHTML = 'START';

//     p.appendChild(newElement);
// };

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
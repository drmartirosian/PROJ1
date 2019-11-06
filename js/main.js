//---------------variables(states)-------------------------

//---------------ARRAYS-------------------------
const levelArray = [];

// const userArray = []; //for user answers

//--------------------EVENTS-----------------------
// var nameHere = document.getElementById('id');

//START BTN 
var startBtn = document.getElementById('start');

//--------------------LISTENERS--------------------------
// object.addEventListener(event, function)
startBtn.addEventListener('click', levelZero);
startBtn.addEventListener('click', levelOne);
// startBtn.addEventListener('click', levelTwo);
// startBtn.addEventListener('click', levelThree);
startBtn.addEventListener('click', endGame);


//----------------------------FUNCTIONS----------------------//
// Makes start btn clicks +1 to array
function levelZero() {
    if (levelArray.length !== 2) { 
        levelArray.push(1); 
    }
    console.log(levelArray.length);
};

// ---------------------------LEVEL1-------------------------
function levelOne(){
    if (levelArray.length == 1) {
        message.textContent = 'LEVEL 1: Where to start...?';
        start.innerHTML = '404 ERROR: Btn disabled...';
        document.getElementById('start').style.opacity = 0.4;
        document.getElementById('start').disabled = true;
    };
//SOLUTION => 
//"document.getElementById('start').disabled = false;"
};

// //-----------------------------LEVEL2------------------------- 
// function levelTwo(){
//     if (levelArray.length == 2) {
//         message.textContent = 'LEVEL 2: To Tart or Start?';
//         start.innerHTML = 'TART GAME!';
//         document.getElementById('start').id='tart';
//     };
// //SOLUTION
// // document.getElementById('tart').id='start'
// };

// //----------------------------LEVEL3-----------------------------
// function levelThree(){
//     if (levelArray.length == 3) {
//         message.textContent = 'LEVEL 3: GONE!';
//         document.getElementById('start').remove();
//     };
// //SOLUTION =>
// // document.body.innerHTML += '<button>START</button>';
// // $0.id='start';
// };

//-----------------------------ENDGAME----------------------------
//END GAME
function endGame(){
    if (levelArray.length >= 2) { 
        document.getElementById('start');
        start.innerHTML = 'START GAME!';
        document.getElementById('start').style.opacity = 1;
        document.getElementById('start').disabled = true;
        message.textContent = 'You SEI rock! Thanks!';
    }
};

//----------------------FEHLER CHATBOT------------------------------
//APPEND USER COMMUNICATIONS
function textBox() {
    var li = document.createElement('li');
    var ul = document.getElementById('myUl');
    var input1 = document.getElementById('input1');
    li.setAttribute('id', input1.value);
    li.appendChild(document.createTextNode('USER: ' + input1.value));
    ul.appendChild(li);
    //SEND TO REAL CONSOLE...
    eval(input1.value)
    console.log(`this is the code as a string ${input1.value}`);
};


//FEHLER COMMUNICATIONS PROMPTS
// var fehlerSays() {
//     for (var i = 0; i < ul.length; i++) {
//         var ul = document.getElementById('myUl');
//         var li = document.createElement('li');
//         li.appendChild(document.createTextNode(name));
//         ul.appendChild(li);
//     }
    // if (userArray === 'Y') {
        
    // }
    // if () {

    // }
    // if () {

    // }
// };
//--------------------------------------------------------------------
console.log(levelArray.length);
//------------------------------LEVELS END--------------------------//


//BREAK
// start.innerHTML = '>:D';
// document.getElementById('start').style.backgroundColor='black';

//COLOR CHECKER
// if ($('#start').css('backgroundColor') == 'green') {
//     console.log('GREEN BTN!');
//   } else {
//     console.log('NOT GREEN!');
//   }
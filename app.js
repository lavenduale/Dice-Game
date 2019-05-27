// ---------- Dice Game -------------- //

let marks;
let roundS;
let activeP;
let gameState;

// initilize the data
init();

//document.querySelector('#current-' + activeP).textContent = dice;
//document.querySelector('#current-' + activeP).innerHTML = '<em>' + dice + '</em>';

// Roll Button
// event type + anonymous
document.querySelector('.btn-roll').addEventListener('click', () => {

    if(gameState) {

        randomNum = Math.random();
        // I. Get a random number once clicking
        let dice = Math.floor(6*randomNum)+1;
        console.log(dice);

        // II. Display the result
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice +'.png';

        // III. Update the round score IF the rolled number was Not a 1
        if (dice !== 1){
            // add score
            roundS += dice;
            document.querySelector('#current-' + activeP).textContent =  roundS;
        }
        else {
            // call next player
            moveNext();
        }
    }
});

// Hold Button
document.querySelector('.btn-hold').addEventListener('click', () => {

    let indexAct;

    if (gameState){
        // I.   Add current score to global score (red area)
        if (activeP === 'left'){
            indexAct = 0;
        }
        else {
            indexAct = 1; // right
        }

        marks[indexAct] += roundS; // score accmulating

        // II.  Update the changes to UI
        document.querySelector('#score-' + activeP).textContent = marks[indexAct];

        // III. Check if Player wont the game
        if (marks[indexAct] >= 25) {
            document.querySelector('#name-' + activeP).textContent = 'Winner!'; // Change the score to Win!
            document.querySelector('.dice').style.display = 'none';
            // apply winner class from css to class list
            document.querySelector('.player-'+ activeP).classList.add('winner');
            // remove active spot
            document.querySelector('.player-'+ activeP).classList.remove('active');
            // set game to end
            gameState = false;
        }
        else {
            // call next player
            moveNext();
        }
    }
});

// New Game Button
document.querySelector('.btn-new').addEventListener('click', () => {
    // reset the game to new
    init();
});

// init function
 function init() {
    marks = [0, 0];
    activeP = 'left';
    roundS = 0;
    gameState = true;

    //read css content
    document.querySelector('.dice').style.display = 'none';

    // set up data
    document.getElementById('score-left').textContent = '0';
    document.getElementById('score-right').textContent = '0';
    document.getElementById('current-left').textContent = '0';
    document.getElementById('current-right').textContent = '0';

    document.getElementById('name-left').textContent = 'Player Left';
    document.getElementById('name-right').textContent = 'Player Right';

    // remove winner class to restart
    document.querySelector('.player-left').classList.remove('winner');
    document.querySelector('.player-right').classList.remove('winner');
    // remove active to restart
    document.querySelector('.player-left').classList.remove('active');
    document.querySelector('.player-right').classList.remove('active');

    // set left player to be active
    document.querySelector('.player-left').classList.add('active');
}

// move to next player function
moveNext = () => {
    // move active dot
    if (activeP === 'left'){
        activeP = 'right';
    }
    else {
        activeP = 'left';
    }
    roundS = 0;

    // reset the marks
    document.getElementById('current-left').textContent = '0';
    document.getElementById('current-right').textContent = '0';

    // reset the active
    document.querySelector('.player-left').classList.toggle('active');
    document.querySelector('.player-right').classList.toggle('active');

    // make the dice display when change to next player
    document.querySelector('.dice').style.display = 'none';
}
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let markS;
let roundS;
let activeP;
let dice;

markS = [0, 0];
roundS = 0;
activeP = 'left';

randomNum = Math.random();
dice = Math.floor(6*randomNum)+1;
//console.log(dice);

document.querySelector('#current-' + activeP).textContent = dice;
//document.querySelector('#current-' + activeP).innerHTML = '<em>' + dice + '</em>';

// select and read html content
const test = document.querySelector('#current-left').textContent;
console.log(test);

//read css content
document.querySelector('.dice').style.display = 'none';


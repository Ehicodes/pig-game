'use strict';
//selecting elements
const score0El = document.querySelector('#score--0');

const score1El = document.getElementById('score--1'); //another way to select elements that work by ids

const diceEl = document.querySelector('.dice'); //diceEL for the element and dice for the number itself
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let totalScore = 0;

const scores = [0, 0];

let currentScore = 0; //it cannot be inside theh function because each time we click the button, it will be set to 0
let activePlayer = 0;

//function to switch players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling dice  functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. display the dice
  diceEl.classList.remove('hidden');

  //manipulating our source attribute from our JavaScript because we want to display the dice image according to the dice number generated
  diceEl.src = `dice-${dice}.png`;
  // 3. check for a rolled 1..
  if (dice !== 1) {
    //if false, add dice  to current score
    currentScore = currentScore + dice;
    // current0El.textContent = currentScore; //CHANGE LATER
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; //a more dynamic way to select the element
  } else {
    //if true, switch to next player
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // currentScore = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // player0El.classList.toggle('player--active'); //toggle will add the class if it is not there or remove the class if it is there
    // player1El.classList.toggle('player--active');
    switchPlayer();
  }
});

//holding scores functionality
btnHold.addEventListener('click', function () {
  //. add current score to the active player score
  scores[activePlayer] += currentScore;
  //scores[1] = scores[1] + currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //. 2 check if player's score is >=100
  //finish the game

  // switch to the next player
  switchPlayer();
});

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
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

//const scores = [0, 0];

//let currentScore = 0; //it cannot be inside theh function because each time we click the button, it will be set to 0
//let activePlayer = 0;

//let playing = true; // a state variable that tells us the condtion of our game. when the game is playing or not. if the game is playing, we can click all the buttons and it will work but if it isnt, we wont be able to click on the buttons

//lets a functon that will contain our internal state variables and some other code
//ALL THESE VARIABLES ARE NOT DEFINED BECAUSE THEY ARE ONLY AVAILABLE TO THE INIT FUNCTION. THEY ARE DECLARED INSIDE THE FUNCTION SO THEY ARE NOT ACCESSIBLE OUTSIDE THE FUNCTON. THEY ARE SCOPED TO THE INIT FUNCTION. THE SOLUTION IS TO DECLARE THESE VARIABLES OUTSIDE OF THE FUNCTION BUT WITHOUT ANY VALUE

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init(); // to run the function

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
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
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
      switchPlayer();
    }
  }
});

//holding scores functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    //. add current score to the active player score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //. 2 check if player's score is >=100
    //finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

//RESETTING THE GAME

// btnNew.addEventListener('click', function () {
//   playing = true;
//   currentScore = 0;
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   document.getElementById(`score--${activePlayer}`).textContent = 0;
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');
//   activePlayer = activePlayer === 1 ? 0 : 0;
//   // player1El.classList.toggle('player--active');
//   // document
//   //   .querySelector(`.player--${activePlayer}`)
//   //   .classList.add('player--active');
//   diceEl.classList.add('hidden');
// });

btnNew.addEventListener('click', init);
// score0El.textContent = 0;
// score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;
// player0El.classList.remove('player--winner');
// player1El.classList.remove('player--winner');
// player0El.classList.add('player--active');
// player1El.classList.remove('player--active');

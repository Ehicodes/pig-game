'use strict';
//selecting elements
const score0El = document.querySelector('#score--0');

const score1El = document.getElementById('score--1'); //another way to select elements that work by ids

const diceEl = document.querySelector('.dice'); //diceEL for the element and dice for the number itself
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--gold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0; //it cannot be inside theh function because each time we click the button, it will be set to 0

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
    currentScore = currentScore + dice; //or  currentScore+= dice
    current0El.textContent = 'currentScore';
  } else {
    //if true, switch to next player
  }
});

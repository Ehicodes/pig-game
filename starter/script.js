'use strict';
//selecting elements
const score0El = document.querySelector('#score--0');

const score1El = document.getElementById('score--1'); //another way to select elements that work by ids

const diceEl = document.querySelector('.dice');

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

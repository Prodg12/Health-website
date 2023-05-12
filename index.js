// Mobile footer

// card div
const card = document.querySelector('.card');
const cardtoggle = document.querySelector('.toggle');

cardtoggle.onclick = function(){
  card.classList.toggle('active');
}

// Support div
const support = document.querySelector('.support');
const supportSample = document.querySelector('.sample');

support.onclick = function(){
  support.classList.toggle('active');
}

// Touch div
const touch = document.querySelector('.touch');
const touchIconic = document.querySelector('.iconic');

touchIconic.onclick = function(){
  touch.classList.toggle('active');
}
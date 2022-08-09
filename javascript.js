/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const getBtn = document.querySelector('.toggle-button');
const getDiv = document.querySelector('.main');
const width = window.matchMedia('(max-width:769px)');
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

let count = 0;
getBtn.addEventListener('click', () => {
  count += 1;
  if (count === 1) {
    getDiv.style.display = 'none';
  } else {
    getDiv.style.display = 'block';
    count -= 2;
  }
});

// function checkWidth(e) {
//   if (e.matches) {
//     console.log('da');
//   } else {
//     console.log('nu');
//   }
// }
// checkWidth(width);
// width.addEventListener('change', checkWidth);

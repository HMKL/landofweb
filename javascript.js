/* eslint-disable linebreak-style */
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

const width = window.matchMedia('(max-width:769px)');

function checkWidth(e) {
  if (e.matches) {
    console.log('da');
  } else {
    console.log('nu');
  }
}
checkWidth(width);
width.addEventListener('change', checkWidth);

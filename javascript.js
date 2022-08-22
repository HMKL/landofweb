/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const getBtn = document.querySelector('.toggle-button');
const getDiv = document.querySelector('.main');
const width = window.matchMedia('(max-width:769px)');
const getContainer = document.querySelectorAll('.container');
getContainer[0].classList.add('add');
getContainer[2].classList.add('add');
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


// const btn = document.querySelector('.mainbtn');
// const user = document.querySelector('.username');
// const pass = document.querySelector('.password');
// const error = document.querySelector('.user');
// const newUser = document.createElement('p');
// newUser.textContent = 'username must contain only letters between 8-12';
// const newPassword = document.createElement('p');
// newPassword.textContent = 'password must contain only digits between 4-8';
// const passRegex = /^[0-9]{4,8}$/;
// const regex = /^[a-z]{6,12}$/;

// btn.addEventListener('submit', (e) => {
//   e.preventDefault();
// });

// user.addEventListener('keyup', (e) => {
//   if (regex.test(e.target.value)) {
//     user.setAttribute('class', 'username form-control green');
//     error.append(newUser);
//     newUser.classList.add('green1');
//     newUser.classList.remove('red1');
//     console.log(e);
//   } else {
//     user.setAttribute('class', 'username form-control red');
//     error.append(newUser);
//     newUser.classList.add('red1');
//     newUser.classList.remove('green1');
//     if (user.value < 1) {
//       user.setAttribute('class', 'username form-control');
//       newUser.remove();
//     }
//   }
// });

// pass.addEventListener('keyup', (e) => {
//   if (passRegex.test(e.target.value)) {
//     pass.setAttribute('class', 'password form-control green');
//     error.append(newPassword);
//     newPassword.setAttribute('class', 'green1 text-center');
//     console.log(e);
//   } else {
//     pass.setAttribute('class', 'password form-control red');
//     error.append(newPassword);
//     newPassword.setAttribute('class', 'red1 text-center');
//     if (pass.value < 1) {
//       pass.setAttribute('class', 'password form-control');
//       newPassword.remove();
//     }
//   }
// });

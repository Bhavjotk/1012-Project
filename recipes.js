/* Final Project */

function login() {
    x.style.left = "10px";
    y.style.right = "-550px";
}

function register() {
    x.style.left = "-550px";
    y.style.right = "-10px";
}

const loginScreen = document.querySelector('.account-form');
const loginBtn = document.querySelector('.loginButton');
const registerBtn = document.querySelector('.registerButton');
const closeScreen = document.querySelector('.close-screen');

loginBtn.addEventListener('click', ()=> {
    loginScreen.classList.add('active');
});

registerBtn.addEventListener('click', ()=> {
    loginScreen.classList.add('active');
});

closeScreen.addEventListener('click', ()=> {
    loginScreen.classList.remove('active');
})

// Nav Bar
// const navItems = document.querySelectorAll('.topnav');
// navItems.forEach(item => {
//     item.addEventListener('mouseover', function(e) {
//     //   e.target.style.backgroundColor = '#ff0000';
//     });
  
//     item.addEventListener('click', function(e) {
//     //   e.target.style.color = '#00ff00';
//     });
//   });



  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});


  

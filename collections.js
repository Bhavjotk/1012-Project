/* JS for Collections Page */

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

//Collections Page
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#recipe-name');
const recipeList = document.querySelector('#results');

searchForm.addEventListener("keyup", (event) => {
    event.preventDefault();
})
  
async function searchRecipes() {
}
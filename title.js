/* Title Page */

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

// Title Page
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const recipeList = document.getElementById('results');

for (let i = 0; i < alphabet.length; i++) {
    var letterSearch = document.getElementById(alphabet[i]);

    //Event Listener
    letterSearch.addEventListener('click', getRecipeByAlphabet);

    function getRecipeByAlphabet(e){
        e.preventDefault();
        if (e.target.parentElement.classList.contains('letter-button')){
            let recipe = e.target.parentElement.id;
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${recipe}`).then(response => response.json())
            .then(data => {
                let html = "";
                if (data.meals){
                    data.meals.forEach(meal => {
                        html += `<div class="meal-item" data-id = "${meal.idMeal}">
                                    <div class="meal-img">
                                        <img src= "${meal.strMealThumb}" alt = "meal">
                                    </div>
                                    <div class="meal-name">
                                        <h3>${meal.strMeal}</h3>
                                        <a href="#" class="recipe-btn">Recipe Info</a>
                                    </div>
                                </div>`
                    });
                    recipeList.classList.remove('notFound');
                }
                else {
                    html = "Sorry, no recipe found...";
                    recipeList.classList.add('notFound');
                }
                recipeList.innerHTML = html;
            })
        }
    }
}


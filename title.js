/* Title Page Login Page */

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
const recipeContent = document.querySelector('.recipe-content');
const recipeCloseScreen = document.querySelector('.recipe-close');

// Event Listeners
recipeList.addEventListener('click', getRecipe);
recipeCloseScreen.addEventListener('click', ()=> {
    recipeContent.parentElement.classList.remove('showRecipe');
});

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

// Get the contents of the recipe
function getRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
        let recipe = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.dataset.id}`).then(response => response.json())
        .then(data => recipeModal(data.meals));
    }
}

// Make a recipe modal
function recipeModal(meal) {
    meal = meal[0];
    let html = `<h2 class="recipe-title">${meal.strMeal}</h2>
                <p class="recipe-category">${meal.strCategory}</p>
                <div class="recipe-instruct">
                    <h3>Instructions:</h3>
                    <p>${meal.strInstructions}</p>
                </div>
                <div class="recipe-img">
                    <img src= "${meal.strMealThumb}" alt="">
                </div>
                <div class="recipe-link">
                    <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
                </div>`;

    recipeContent.innerHTML = html;
    recipeContent.parentElement.classList.add('showRecipe');
}

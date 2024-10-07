
const recipes = [
    {
        id: 1,
        title: "Spaghetti Bolognese",
        image: "photos/spaghetti-bolognese-recipe.jpg",
        ingredients: ["400g spaghetti", "500g ground beef", "1 onion, finely chopped","2 garlic cloves, minced","2 cans (400g each) of crushed tomatoes","2 tbsp tomato paste","1 carrot, grated","1 celery stalk, finely chopped","1 tsp dried oregano","1 tsp dried basil","Salt and pepper to taste","Olive oil for cooking","Parmesan cheese for serving"],
        instructions: "Cook the spaghetti according to the package instructions. Drain and set aside. In a large pan, heat olive oil over medium heat. Sauté the onion, garlic, carrot, and celery until softened. Add the ground beef and cook until browned. Drain excess fat. Stir in the crushed tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20-30 minutes, stirring occasionally. Serve the sauce over the spaghetti, and top with Parmesan cheese.",
    },
    {
        id: 2,
        title: "Chicken Curry",
        image: "photos/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
        ingredients: ["500g chicken thighs or breasts, diced, 1 onion, chopped, 2 garlic cloves, minced, 1 tbsp ginger, grated, 2 tbsp curry powder or curry paste, 1 can (400ml) coconut milk, 1 can (400g) diced tomatoes, 1 tsp ground cumin, 1 tsp ground coriander, Salt and pepper to taste, Oil for cooking, Fresh cilantro for garnish"],
        instructions: "Heat oil in a pan and sauté the onion, garlic, and ginger until softened. Add the curry powder, cumin, and coriander, and cook for 1 minute. Add the chicken and cook until browned. Stir in the diced tomatoes and coconut milk. Simmer for 20-25 minutes until the chicken is cooked through. Garnish with fresh cilantro and serve with rice.",
    },
    {
        id: 3,
        title: "Chicken Alfredo",
        image: "photos/Chicken-Alfredo-above.jpg",
        ingredients: ["400g fettuccine pasta, 2 chicken breasts, sliced, 2 tbsp butter, 2 garlic cloves, minced, 1 cup heavy cream, 1 cup grated Parmesan cheese, Salt and pepper to taste, Parsley for garnish"],
        instructions: "Cook the fettuccine according to the package instructions. Drain and set aside. Season the chicken with salt and pepper, then cook in a pan over medium heat until golden brown and cooked through. Set aside. In the same pan, melt the butter and sauté the garlic for 1 minute. Stir in the heavy cream and bring to a simmer. Gradually add Parmesan cheese, stirring until the sauce thickens. Toss the cooked pasta and chicken into the sauce. Serve with parsley on top.",
    },
    {
        id: 4,
        title: "Beef Tacos",
        image: "photos/mexian-ground-beef-tacos-recipe-9.jpg",
        ingredients: ["500g ground beef, 1 taco seasoning packet (or homemade mix: chili powder, cumin, garlic powder, onion powder), 8 taco shells (soft or hard), 1 cup lettuce, shredded, 1 tomato, diced, 1/2 cup shredded cheese, Salsa and sour cream for serving"],
        instructions: "Cook the ground beef in a pan over medium heat until browned. Drain excess fat. Add taco seasoning and water (as per packet instructions) and simmer for 5 minutes. Warm the taco shells in the oven or on the stove. Assemble tacos with the seasoned beef, lettuce, tomato, cheese, salsa, and sour cream.",
    },
    {
        id: 5,
        title: "Pizza Margherita",
        image: "photos/pizza....jpeg",
        ingredients: ["1 pizza dough (store-bought or homemade), 1/2 cup pizza sauce (or crushed tomatoes with olive oil and salt), 1 ball fresh mozzarella, sliced, Fresh basil leaves, Olive oil for drizzling, Salt to taste"],
        instructions: "Preheat the oven to 250°C (480°F). Roll out the pizza dough and place it on a baking sheet or pizza stone. Spread the pizza sauce evenly over the dough. Add slices of fresh mozzarella and a few basil leaves. Drizzle with olive oil and sprinkle with a pinch of salt. Bake for 10-12 minutes until the crust is golden and the cheese is bubbling.",
    },
    {
        id: 6,
        title: "Caesar Salad",
        image: "photos/vegan-caesar-salad-4-500x500.jpg",
        ingredients: ["1 large head of romaine lettuce, chopped, 1/2 cup croutons, 1/4 cup grated Parmesan cheese, 1/2 cup Caesar dressing (store-bought or homemade), 1 clove garlic, minced (optional), Lemon wedges for garnish"],
        instructions: "Toss the chopped lettuce with croutons and Parmesan cheese in a large bowl. Add the garlic (if using) and drizzle with Caesar dressing. Toss until the salad is evenly coated, then serve with lemon wedges for extra flavor.",
    },
    {
        id: 7,
        title: "Lasagna",
        image: "photos/Spinach-Lasagna-SQ-12.jpg",
        ingredients: ["12 lasagna noodles, 500g ground beef, 1 jar (700g) marinara sauce, 1 container (500g) ricotta cheese, 2 cups shredded mozzarella cheese, 1/2 cup grated Parmesan cheese, 1 egg, 2 tbsp fresh parsley, chopped, Salt and pepper to taste"],
        instructions: "Preheat the oven to 180°C (350°F). Cook lasagna noodles according to package instructions, then drain. In a large pan, brown the ground beef. Drain excess fat and stir in the marinara sauce. Simmer for 10 minutes. In a bowl, mix the ricotta, egg, parsley, and Parmesan cheese. Season with salt and pepper. Spread a layer of meat sauce in a baking dish, then layer with noodles, ricotta mixture, and mozzarella cheese. Repeat layers. Cover with foil and bake for 25 minutes, then uncover and bake for another 10 minutes until bubbly. Let it rest for 10 minutes before serving.",
    },
    {
        id: 8,
        title: "French Onion Soup",
        image: "photos/french-onion-soup-fp.jpg",
        ingredients: ["4 large onions, thinly sliced, 3 tbsp butter, 1 tbsp olive oil, 1 tsp sugar, 2 cloves garlic, minced, 1 tbsp flour, 1 cup white wine, 6 cups beef broth, Salt and pepper to taste, 1 baguette, sliced, 1 1/2 cups grated Gruyère cheese"],
        instructions: "Heat the butter and olive oil in a large pot, then sauté the onions for about 30 minutes until caramelized and golden. Add the garlic and sugar, cook for 1 minute, then stir in the flour. Pour in the wine and cook until reduced by half. Add the beef broth, season with salt and pepper, and simmer for 20 minutes. Toast the baguette slices, top with Gruyère, and broil until the cheese melts. Serve the soup with the cheesy toasts on top.",
    },
    {
        id: 9,
        title: "Fried Rice",
        image: "photos/fried rice.jpg",
        ingredients: ["3 cups cooked rice (preferably cold), 2 eggs, beaten, 1 cup mixed vegetables (carrots, peas, corn, etc.), 1/2 onion, finely chopped, 2 garlic cloves, minced, 2 tbsp soy sauce, 1 tbsp oyster sauce (optional), 2 tbsp vegetable oil, 1/2 tsp sesame oil (optional),Salt and pepper to taste, Green onions, chopped (for garnish)"],
        instructions: "Brown chicken. Add curry powder and coconut milk. Simmer for 20 minutes.",
    },
];

// Select elements
const searchbtn = document.getElementById("searchbtn");
const recipeList = document.getElementById("recipe-list");
const recipeDetail = document.getElementById("recipe-detail");
const recipeTitle = document.getElementById("recipe-title");
const recipeImg = document.getElementById("recipe-img");
const recipeIngredients = document.getElementById("recipe-ingredients");
const recipeInstructions = document.getElementById("recipe-instructions");
const savedRecipesList = document.getElementById("saved-recipes-list");
const backBtn = document.getElementById("back-btn");
const savedRecipesPage = document.getElementById("saved-recipes");
const saveRecipeBtn = document.getElementById("save-recipe-btn");

let currentRecipe = null;
let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];


function displayRecipes(recipes) {
    recipeList.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <button onclick="viewRecipe(${recipe.id})">View Recipe</button>
        `;
        recipeList.appendChild(recipeCard);
    });
}

// View a recipe's details
function viewRecipe(id) {
    const recipe = recipes.find((r) => r.id === id);
    if (recipe) {
        currentRecipe = recipe;
        recipeTitle.textContent = recipe.title;
        recipeImg.src = recipe.image;
        recipeIngredients.innerHTML = recipe.ingredients.map((item) => `<li>${item}</li>`).join("");
        recipeInstructions.textContent = recipe.instructions;
        recipeDetail.classList.remove("hidden");
    }
}

saveRecipeBtn.addEventListener("click", saveRecipe);
// Save a recipe to local storage
function saveRecipe() {
    if (!savedRecipes.some((r) => r.id === currentRecipe.id)) {
        savedRecipes.push(currentRecipe);
        localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
        alert("Recipe saved!");

        showSavedRecipes();
    } else {
        alert("Recipe is already saved.");
    }
}

// Show saved recipes
function showSavedRecipes() {
    savedRecipesList.innerHTML = "";
    savedRecipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <button onclick="removeRecipe(${recipe.id})">Remove Recipe</button>
        `;
        savedRecipesList.appendChild(recipeCard);
    });
}

// Remove a saved recipe
function removeRecipe(id) {
    savedRecipes = savedRecipes.filter((r) => r.id !== id);
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    showSavedRecipes();
}

// Event Listeners
backBtn.addEventListener("click", () => {
    recipeDetail.classList.add("hidden");
});

saveRecipeBtn.addEventListener("click", saveRecipe);

// function navigateToSavedRecipesPage() {
//     homePage.classList.add("hidden");
//     savedRecipesPage.classList.remove("hidden");
//     showSavedRecipes();
// }

// Initial load
displayRecipes(recipes);
showSavedRecipes();

searchbtn.addEventListener('click', getMeals);

function getMeals(){}

   const recipe=document.querySelector('#search-bar').value;

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a${recipe}`)
.then (response =>response.json())
.then (data =>{
    if (recipe){
        

        const title =  data.meals.strMeal;          
        const ingredients = data.meals.strIngredient3;
        const instructions = data.meals.strInstructions;
       

        recipeTitle.textContent = ` ${title} `;            
        recipeIngredients.textContent = `Ingredients: ${ingredients} `;
        recipeInstructions.textContent = `Instructions: ${instructions}`;
        
       
    } else{
        alert('Location not found. Please try again');
    }
})
.catch(error => console.error('Error fetching weather data:', error));
});

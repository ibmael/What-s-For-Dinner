// Array of recipe objects with images
var recipes = [
  {
    name: "Creamy Alfredo Pasta",
    category: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image:
      "https://images.unsplash.com/photo-1759934057874-f4a3f0ed911e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: 4,
    ingredients: [
      "400g pasta (fettuccine or penne)",
      "2 cups heavy cream",
      "3 tbsp butter",
      "3 cloves garlic, minced",
      "1 cup grated Parmesan cheese",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cook pasta according to package instructions",
      "Melt butter and sauté garlic for 1 minute",
      "Add heavy cream and bring to simmer",
      "Add Parmesan cheese and stir until smooth",
      "Toss pasta with sauce and serve",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "18g",
      carbs: "45g",
      fat: "32g",
    },
    tips: [
      "Use freshly grated Parmesan for best results",
      "Don't let the cream boil",
      "Add pasta water if sauce is too thick",
    ],
  },
  {
    name: "Classic Beef Burger",
    category: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    prepTime: "20 min",
    cookTime: "10 min",
    servings: 4,
    ingredients: [
      "500g ground beef",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce and tomato",
      "Salt and pepper",
    ],
    instructions: [
      "Season beef with salt and pepper",
      "Form into 4 patties",
      "Grill for 4-5 minutes per side",
      "Add cheese in last minute",
      "Assemble burgers with toppings",
    ],
    nutrition: {
      calories: "680 kcal",
      protein: "35g",
      carbs: "38g",
      fat: "42g",
    },
    tips: [
      "Don't press down on burgers while cooking",
      "Let meat rest before serving",
      "Toast the buns for better texture",
    ],
  },
  {
    name: "Chocolate Lava Cake",
    category: "A rich dessert with molten chocolate center",
    image:
      "https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: 4,
    ingredients: [
      "100g dark chocolate",
      "100g butter",
      "2 eggs",
      "50g sugar",
      "30g flour",
    ],
    instructions: [
      "Preheat oven to 220°C",
      "Melt chocolate and butter together",
      "Whisk eggs and sugar until fluffy",
      "Fold in chocolate mixture and flour",
      "Bake for 12 minutes",
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "8g",
      carbs: "32g",
      fat: "30g",
    },
    tips: [
      "Don't overbake - center should be soft",
      "Use high-quality chocolate",
      "Serve immediately with ice cream",
    ],
  },
  {
    name: "Mediterranean Quinoa Salad",
    category: "Hearty vegetarian curry with coconut milk",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 6,
    ingredients: [
      "1 cup quinoa",
      "2 cups water",
      "1 cucumber, diced",
      "1 cup cherry tomatoes",
      "100g feta cheese",
      "Olive oil and lemon juice",
    ],
    instructions: [
      "Cook quinoa in water for 15 minutes",
      "Let quinoa cool completely",
      "Mix with vegetables",
      "Add olive oil and lemon juice",
      "Top with feta cheese",
    ],
    nutrition: {
      calories: "280 kcal",
      protein: "9g",
      carbs: "32g",
      fat: "14g",
    },
    tips: [
      "Rinse quinoa before cooking",
      "Let quinoa cool before mixing",
      "Tastes better after chilling",
    ],
  },
];

// Function to get random recipe using Math.random()
function getRandomRecipe() {
  var randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

// Function to display recipe
function displayRecipe(recipe) {
  // Update basic info
  document.getElementById("prepTime").textContent = recipe.prepTime;
  document.getElementById("cookTime").textContent = recipe.cookTime;
  document.getElementById("servings").textContent = recipe.servings + " people";
  document.getElementById("recipeName").textContent = recipe.name;
  document.getElementById("recipeCategory").textContent = recipe.category;

  // Update meal image
  document.getElementById("mealImage").src = recipe.image;

  // Display ingredients
  var ingredientsList = document.getElementById("ingredientsList");
  ingredientsList.innerHTML = "";
  for (var i = 0; i < recipe.ingredients.length; i++) {
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML =
      '<i class="fa-solid fa-check-circle text-success me-2"></i>' +
      recipe.ingredients[i];
    ingredientsList.appendChild(li);
  }

  // Display instructions
  var instructionsList = document.getElementById("instructionsList");
  instructionsList.innerHTML = "";
  for (var i = 0; i < recipe.instructions.length; i++) {
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML =
      "<strong>Step " + (i + 1) + ":</strong> " + recipe.instructions[i];
    instructionsList.appendChild(li);
  }

  // Display nutrition
  var nutritionContent = document.getElementById("nutritionContent");
  nutritionContent.innerHTML = "";
  var nutritionHTML = '<div class="row g-3">';
  for (var key in recipe.nutrition) {
    nutritionHTML += '<div class="col-6 col-md-3">';
    nutritionHTML += '<div class="nutrition-card text-center p-3">';
    nutritionHTML += '<h5 class="text-dark">' + recipe.nutrition[key] + "</h5>";
    nutritionHTML +=
      '<small class="text-muted">' +
      key.charAt(0).toUpperCase() +
      key.slice(1) +
      "</small>";
    nutritionHTML += "</div></div>";
  }
  nutritionHTML += "</div>";
  nutritionContent.innerHTML = nutritionHTML;

  // Display tips
  var tipsList = document.getElementById("tipsList");
  tipsList.innerHTML = "";
  for (var i = 0; i < recipe.tips.length; i++) {
    var div = document.createElement("div");
    div.className = "alert alert-warning";
    div.innerHTML = '<i class="fa-solid fa-check me-2"></i>' + recipe.tips[i];
    tipsList.appendChild(div);
  }
}

// Button click event
document.getElementById("getRecipeBtn").onclick = function () {
  var randomRecipe = getRandomRecipe();
  displayRecipe(randomRecipe);
};

// Load random recipe when page loads
window.onload = function () {
  var randomRecipe = getRandomRecipe();
  displayRecipe(randomRecipe);
};

const apiKey = "e0f6e22e1f944acaaec181c9e011de7b";

async function searchRecipes() {
    const searchQuery = document.getElementById("search_bar").value;
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`);
        const data = await response.json();
        const recipeList = document.getElementById("search_result_list");
        recipeList.innerHTML = "";
        if (data.results.length === 0) {
            recipeList.innerHTML = "Sorry, we don't have it for you. You have to pay";
        } else {
            data.results.forEach(recipe => {
                const recipeItem = document.createElement("a");
                recipeItem.className = "search_result_element";

                const search_result_title = document.createElement("div");
                recipeItem.search_result_title = "search_result_title";
                recipeItem.textContent = recipe.title;

                const search_result_detail = document.createElement("p");
                search_result_detail.className = "search_result_detail";                
                search_result_detail.textContent = `Calories: ${recipe.nutrition.calories}, Carbs: ${recipe.nutrition.carbs}, Fat: ${recipe.nutrition.fat}`;
                
                const search_result_photo = document.createElement("img");
                search_result_photo.className = "search_result_photo;";
                search_result_photo.src = recipe.image;
                search_result_photo.alt = recipe.title;

                const search_result_link = document.createElement("a");
                search_result_link.href = '#';
                search_result_link.textContent = "a cocinar";                
                search_result_link.onclick = async function() {
                    await showRecipe(recipe.id);
                };
                recipeItem.appendChild(search_result_photo);
                recipeItem.appendChild(search_result_title);
                recipeItem.appendChild(search_result_link);
                recipeItem.appendChild(search_result_detail);                
                recipeList.appendChild(recipeItem);
            });
        }
    } catch (error) {
        console.error("Houston tenemos un problema con el Fetch", error);
    }
}
async function showRecipe(recipeid) {

    window.open("/pages/recipe.html",_self);
    
    const recipe_title = await document.getElementById("recipe_title");
    const recipe_detail_photo = await document.getElementById("recipe-detail-photo");
    const recipe_expend = document.getElementById("recipe_expend");
    

    
}
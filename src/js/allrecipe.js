const apiKey = "e0f6e22e1f944acaaec181c9e011de7b";
async function searchRecipes() {
    const searchQuery = document.getElementById("search_query").value;
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch`);
        const data = await response.json();
        const recipeList = document.getElementById("search_result_list");
        recipeList.innerHTML = "";
        if (data.results.length == 0) {
            recipeList.innerHTML = "Sorry, we don't have it for you. You have to pay";
        } else {
            data.results.array.forEach(recipe => {
                const recipeItem = document.createElement("a");
                recipeItem.className = "search_result_element";

                const search_result_title = document.createElement("div");
                recipeItem.className = "search_result_title";
                recipeItem.textContent = recipe.title;

                const search_result_detail = document.createElement("p");
                search_result_detail.className = "search_result_detail";
                search_result_detail.textContent = recipe.detail;

                const search_result_photo = document.createElement("img");
                search_result_photo.className = "search_result_photo;"
                search_result_photo.src = recipe.image;
                search_result_photo.alt = recipe.title;

                recipeItem.onclick = async function () {
                    await showRecipe(recipe.id);
                };
                recipeItem.appendChild(search_result_title);
                recipeItem.appendChild(search_result_detail);
                recipeItem.appendChild(search_result_photo);
                recipeItem.appendChild(search_result_element);

            });
        }
    } catch (error) {
        console.error("Houston tenemos un problema con el Fetch", error);
    }
}

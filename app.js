(async function () {
    const response = await fetch("./recipes.json")
    const recipes = await response.json()

    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn")
    const listElem = document.getElementById("recipe-list");
    const detailsElem = document.getElementById("recipeDetailsContainer");

    function search() {
        const query = inputElem.value.toLowerCase();
        const results = recipes.filter((recipe) => {
            return (recipe.title.toLowerCase.includes(query) ||
                recipe.ingredients.join(" ").toLowerCase().includes(query))
        })
        displaySearchResults(results)
    }

    function displaySearchResults(results) {
        listElem.innerHTML = ""
        results.forEach((recipe) => {
            const li = document.createElement("li")
            const listItem = `
                <h2 class="title">${recipe.title}</h2>
                <div class="description"${recipe.description}</div>
            `
            li.innerHTML = listItem
            li.addEventListener("click", () => {
                loadRecipeDetails(recipe)
            })

        });
    }

    function loadRecipeDetails(recipe) {

    }


    btnElem.addEventListener("click", search)

})();
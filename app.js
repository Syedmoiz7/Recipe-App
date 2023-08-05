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
            return (recipe.title.toLowerCase().includes(query) ||
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
                <div class="description">${recipe.description}</div>
            `
            li.innerHTML = listItem
            li.addEventListener("click", () => {
                loadRecipeDetails(recipe)
            })
            listElem.appendChild(li);
        });
    }

    function loadRecipeDetails(recipe) {
        detailsElem.innerHTML = `
        <h2 class="title">${recipe.title}</h2>
                <ul>${recipe.ingredients.map(ingredient => {
            return `<li>${ingredient}</li>`
        }).join("")}</ul>
        <h3>Instructions </h3>
        <div>${recipe.instructions}</div>
        `
    }

    btnElem.addEventListener("click", search)

})();
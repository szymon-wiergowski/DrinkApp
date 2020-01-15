function getDrinks() {
    return fetch("./data/drinks.json")
        .then(response => response.json())
        .then(data => {
            const drinks = data
            return Promise.resolve(drinks);
        });
}

function getIngredients() {
    return fetch("./data/ingredients.json")
        .then(response => response.json())
        .then(data => {
            const ingredients = data;
            return Promise.resolve(ingredients);
        });
}

function getShops() {
    return fetch("./data/shops.json")
        .then(response => response.json())
        .then(data => {
            const shops = data;
            return Promise.resolve(shops);
        });
}

function getUsers() {
    return fetch("./data/users.json")
        .then(response => response.json())
        .then(data => {
            const users = data;
            return Promise.resolve(users);
        });
}

export { getDrinks, getIngredients, getShops, getUsers }
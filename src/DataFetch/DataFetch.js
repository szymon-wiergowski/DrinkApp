function getDrinks({
    sortBy = 'name',
    sortOrder = 'asc',
    search = '',
}) {
    return fetch("./data/drinks.json")
        .then(response => response.json())
        .then(data => {
            const filtredDrinks = data
                .filter(
                    drink => {
                        const drinkNameLowerCase = drink.name.toLowerCase();
                        return (
                            drinkNameLowerCase.includes(search)
                        );
                    },
                );
            const sortedDrinks =
                filtredDrinks.sort((a, b) => {
                    const sA = a[sortBy];
                    const sB = b[sortBy];
                    if (typeof sA === 'string') {
                        return sA.localeCompare(sB);
                    } else {
                        return sA - sB;
                    }
                });

            if (sortOrder === 'desc') {
                sortedDrinks.reverse();
            }
            
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
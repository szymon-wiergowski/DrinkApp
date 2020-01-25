const BASE_URL = "https://drinkapp-7833e.firebaseio.com";

function getDrinks() {
  return fetch(`${BASE_URL}/drinks.json`)
    .then(response => response.json())
    .then(data => {
      const keys = Object.keys(data);
      const drinks = keys.map(key => {
        return {
          id: key,
          ...data[key]
        };
      });
      return Promise.resolve(drinks);
    });
}

function getIngredients() {
  return fetch(`${BASE_URL}/ingredients.json`)
    .then(response => response.json())
    .then(data => {
      const keys = Object.keys(data);
      const ingredients = keys.map(key => {
        return {
          id: key,
          ...data[key]
        };
      });
      return Promise.resolve(ingredients);
    });
}

function getShops() {
  return fetch(`${BASE_URL}/shops.json`)
    .then(response => response.json())
    .then(data => {
      const keys = Object.keys(data);
      const shops = keys.map(key => {
        return {
          id: key,
          ...data[key]
        };
      });
      return Promise.resolve(shops);
    });
}

function getUsers() {
  return fetch(`${BASE_URL}/users.json`)
    .then(response => response.json())
    .then(data => {
      const keys = Object.keys(data);
      const users = keys.map(key => {
        return {
          id: key,
          ...data[key]
        };
      });
      return Promise.resolve(users);
    });
}

export { getDrinks, getIngredients, getShops, getUsers };

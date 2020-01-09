export function getIngredients() {
  return fetch("./data/ingredients.json")
    .then(response => response.json())
    .then(data => {
      const ingredients = data;
      return Promise.resolve(ingredients);
    });
}

export const state = {
  recipe: {},
  search: {
    query: '',
    data: [],
  },
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
export const loadRecipe = async function (id) {
  try {
    const response = await Promise.race([
      fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`),
      timeout(0.5),
    ]);
    const data = await response.json();

    let { recipe } = data.data;

    state.recipe = {
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      title: recipe.title,
      cookingTime: recipe.cooking_time,
      id: recipe.id,
    };
    console.log(recipe);
  } catch (err) {
    throw err;
  }
};
export const searchRecipe = async function (query) {
  try {
    const response = await Promise.race([
      fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`),
      timeout(0.5),
    ]);
    const data = await response.json();
    state.search.data = data.data.recipes.map(
      el =>
        (el = {
          publisher: el.publisher,
          image: el.image_url,
          title: el.title,
          id: el.id,
        })
    );
    console.log(state.search.data);
  } catch (err) {
    throw err;
  }
};
// searchRecipe('pizza');

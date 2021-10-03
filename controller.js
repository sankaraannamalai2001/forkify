import icons from 'url:../img/icons.svg';
import { render } from 'sass';
import * as model from './model';
import recipeView from './views/recipeView';
import serachView from './views/serachView';
// import resultView from './views/resultView';

const recipeContainer = document.querySelector('.recipe');
const form = document.querySelector('.search');
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    const { recipe } = model.state;
    recipeView.render(recipe);
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};
const controlSearch = async function () {
  try {
    const query = serachView.getQuery();
    if (!query) return;
    await model.searchRecipe(query);
    const data = model.state.search.data;
    // controlresult(data);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlresult = async function (data) {
  try {
    resultView.renderSpinner();
    console.log(data);
  } catch (err) {
    resultView.renderError('No recipe found for your query:(');
  }
};

const init = function () {
  recipeView.addHandlerRender(showRecipe);
  serachView.addHandlerSearch(controlSearch);
};
init();

import View from './View.js';

class searchView extends View {
  _parentel = document.querySelector('.search');
  getQuery() {
    return this._parentel.querySelector('.search__field').value;
  }
  addHandlerSearch(handler) {
    this._parentel.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}
export default new searchView();

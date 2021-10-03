import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup(this._data);
    this._clear();
    this._parentel.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentel.innerHTML = '';
  }
  //   addHandlerRender(handler) {
  //     window.addEventListener('hashchange', handler);
  //     window.addEventListener('load', handler);
  //   }
  renderError(message = this._errMessage) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clear();
    this._parentel.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this._message) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clear();
    this._parentel.insertAdjacentHTML('afterbegin', markup);
  }
  renderSpinner() {
    const mark = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
    this._parentel.innerHTML = '';
    this._parentel.insertAdjacentHTML('afterbegin', mark);
  }
}

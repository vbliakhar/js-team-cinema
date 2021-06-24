const refs = {
  movieCardContainer: document.querySelector('.gallery'),
  filmCardLi: document.querySelector('.gallery-item-card'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

refs.movieCardContainer.addEventListener('click', onGalleryClick);

document.addEventListener('DOMContentLoaded', function () {
  console.log(refs.filmCardLi);
});
function onGalleryClick(e) {
  // console.log(e.target.dataset.id);
  console.log(e.target);
  // console.log(e.currentTarget);
  var elt = e.target.closest('.gallery-item-card');
  console.log(elt);
  // openModal();
}

function openModal() {
  refs.modal.classList.remove('backdrop-hidden');
  refs.body.classList.add('modal-open');
  refs.closeModalBtn.addEventListener('click', onCloseBtnClick);
  window.addEventListener('keydown', onKeyPress);
}

function onCloseBtnClick() {
  refs.modal.classList.add('backdrop-hidden');
  refs.body.classList.remove('modal-open');
  refs.closeModalBtn.removeEventListener('click', onCloseBtnClick);
  window.removeEventListener('keydown', onKeyPress);
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseBtnClick();
  }
}

import filmCard from '../templates/filmCardFirebase.hbs';
import getRefs from './getRefs';
// export default function getRefs() {
//   return {
//     email: document.getElementById('email'),
//     password: document.getElementById('password'),
//     btnRegisterIn: document.querySelector('[data-action="registerIn"]'),
//     btnRegisterUp: document.querySelector('[data-action="registerUp"]'),
//     modalBtn: document.querySelector('[data-action="Sind-In"]'),
//     modalSingIn: document.querySelector('.formRegistr'),

//     btnWatched: document.querySelector('[data-action="add-to-watched"]'),
//     btnQueue: document.querySelector('[data-action="add-to-queue"]'),
//     btnMyLibrary: document.querySelector('.js-library'),
//     containerWatchedFilms: document.querySelector('.gallery'),
//     watched: document.querySelector('#Watched'),
//     queue: document.querySelector('#que'),

//     header: document.querySelector('.page-header'),
//     scrollToTop: document.querySelector('#scrollTop'),
//     filmGallery: document.querySelector('.gallery'),
//     searchFilm: document.querySelector('.form-container'),
//   };
// }
const refs = getRefs();
let checkID = null;
//create element and render library 'watched' films

const onWatchedLibraryClick = evt => {
  if (evt.target.classList.contains('js-watched-btn')) {
    renderWatchedBtn();
  }
};

addEventListener('click', onWatchedLibraryClick);

const onQueueLibraryClick = evt => {
  if (evt.target.classList.contains('js-watched-que')) {
    renderQueueBtn();
  }
};

addEventListener('click', onQueueLibraryClick);

refs.btnMyLibrary.addEventListener('click', () => {
  refs.containerWatchedFilms.innerHTML = ' ';
});

function renderWatchedBtn() {
  refs.containerWatchedFilms.innerHTML = ' ';
  db.collection('watched')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        checkID = doc.data().id;
        console.log(checkID);
        renderWatched(doc);
      });
    });
}

function renderQueueBtn() {
  refs.containerWatchedFilms.innerHTML = ' ';
  db.collection('queue')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        renderWatched(doc);
      });
    });
}

const renderWatched = doc => {
  const li = filmCard(doc.data());
  refs.containerWatchedFilms.insertAdjacentHTML('beforeend', li);
};

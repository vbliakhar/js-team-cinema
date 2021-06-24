import cardFilm from '../templates/filmCardTemplate.hbs';
const refs = {
  btnMyLibrary: document.querySelector('.js-library'),
  addWatchedBtn: document.querySelector('[data-action="watched"]'),
  addQueueBtn: document.querySelector('[data-action="queue"]'),
  watchedBtn: document.querySelector('[data-action="watchedBtn"]'),
  queueBtn: document.querySelector('[data-action="queueBtn"]'),
  headerButtons: document.querySelector('.header-button-list'),
  containerMyLibrary: document.querySelector('.gallery'),
};
//our ref
refs.btnMyLibrary.addEventListener('click', () => {
  refs.headerButtons.style.display = 'flex';
  refs.containerMyLibrary.innerHTML = '';
});
refs.addWatchedBtn.addEventListener('click', () => {
  console.log('add Watched');
});
refs.addQueueBtn.addEventListener('click', () => {
  console.log('add Queue');
});
refs.watchedBtn.addEventListener('click', () => {
  console.log('watchedBtn');
  refs.containerMyLibrary.innerHTML = '';
  // db.collection('queue').add({
  //   id: '123456',
  //   poster_path: 'https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
  //   backdrop_path: 'my films',
  //   title: 'new film in VS',
  //   genre_ids: '1111',
  //   release_date: '999',
  //   vote_average: '999',
  // });
  db.collection('watched')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        renderWatched(doc);
      });
    });
});
refs.queueBtn.addEventListener('click', () => {
  console.log('queueBtn');
  refs.containerMyLibrary.innerHTML = '';
  // db.collection('queue').add({
  //   id: '123456',
  //   poster_path: 'https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
  //   backdrop_path: 'my films',
  //   title: 'new film in VS',
  //   genre_ids: '1111',
  //   release_date: '999',
  //   vote_average: '999',
  // });
  db.collection('queue')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        renderWatched(doc);
      });
    });
});
//// my  works
const renderWatched = doc => {
  console.log(doc.data());
  const li = cardFilm(doc.data());
  refs.containerMyLibrary.insertAdjacentHTML('beforeend', li);
};

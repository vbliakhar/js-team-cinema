import MovieSearch from './apiService.js';
import filmCardTemplate from '../templates/filmCardTemplate.hbs';
import getRefs from './getRefs.js';
import Spinner from './spinner.js';

const refs = getRefs();
const spinner = new Spinner({
  selector: '.spinner',
});

const movieSearch = new MovieSearch();

const renderMovie = async movies => {
  const films = movies.results;
  // console.log(films);
  const genres = await movieSearch.fetchGenresMovie();
  spinner.enable();
  films.map(film => {
    if (film.release_date !== undefined) {
      film.release_date = film.release_date.slice(0, 4);
    }
  });
  films.map(film => {
    film.genre_ids = film.genre_ids.map(
      idSearch => ` ` + genres.find(genre => genre.id === idSearch).name,
    );
  });
  spinner.disable();

  refs.filmGallery.insertAdjacentHTML('beforeend', filmCardTemplate(films));
};

movieSearch.fetchPopularMovie().then(renderMovie);

const onSearchFilm = async e => {
  e.preventDefault();
  movieSearch.query = e.target.elements.query.value;
  refs.filmGallery.innerHTML = '';
  movieSearch.resetPage();
  await movieSearch.fetchMovieSearch().then(renderMovie);
  // refs.filmGallery.insertAdjacentHTML('beforeend', filmCardTemplate(films));
  // console.log(movieSearch.query);
};
refs.searchFilm.addEventListener('submit', onSearchFilm);
// console.log(query);

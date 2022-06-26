const API_KEY = 'd82e9b87075796c7a6b6bfa80b102f66';
const BASE_REQUEST_URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
// const TRANDING_REQUEST = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

export function getData() {
  return fetch(`${BASE_REQUEST_URL}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`По запросу ничего не найдено`));
  });
}

export function getTrandingMovie() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`По запросу ничего не найдено`));
  });
}

export function findMovie(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`По запросу ничего не найдено`));
  });
}

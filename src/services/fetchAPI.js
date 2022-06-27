const API_KEY = 'd82e9b87075796c7a6b6bfa80b102f66';
const BASE_REQUEST_URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
// const TRANDING_REQUEST = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

export function getData() {
  return fetchWithErrorHandling(`${BASE_REQUEST_URL}`);
}

export function getTrandingMovie() {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
}

export function findMovie(query) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
}

export function getMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function getCast(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function getReviews(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}

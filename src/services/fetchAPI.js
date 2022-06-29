import { API_KEY } from '../utils/constants';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
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
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
}

export function getCast(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export function getReviews(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  );
}

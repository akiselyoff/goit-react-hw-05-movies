import { getMovieDetails } from '../services/fetchAPI';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
      getMovieDetails(movieId).then(movie => setMovie(movie));
  }, [ movieId]);

  const imgPath = 'https://image.tmdb.org/t/p/w500';
    const { title, poster_path, overview } = movie;
    

  return (
    <>
      <Link to={backLinkHref}>Go Back</Link>
      <h1>{title}</h1>
      <img
        src={`${imgPath}${poster_path}`}
        alt={`Poster to ${title}`}
        height="400px"
      />
      <p>{overview}</p>
      <p>Additional information</p>
      <p>
        <Link to={`cast`}>Cast</Link>
      </p>
      <p>
        <Link to={`reviews`}>Reviews</Link>
      </p>
      
        <Outlet />
      
    </>
  );
};
export default MovieDetails;
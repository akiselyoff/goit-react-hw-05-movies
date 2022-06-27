import { getMovieDetails } from '../../services/fetchAPI';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  

  useEffect(() => {
      getMovieDetails(movieId).then(movie => setMovie(movie));
  }, [ movieId]);

    const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
    const { title, poster_path, overview } = movie; // + genres
    

  return (
    <>
          <Link to={backLinkHref}>Go Back</Link>
          
          <div className={s.movieDetailsCard}>
              <img src={`${IMG_PATH}${poster_path}`}
                     alt={`Poster to ${title}`}  
              />
              <div className={s.movieDetailsInfo}>
          <h1>{title}</h1>
          
      <p className={s.capture}>Overview</p>
          <p>{overview}</p>
          <p className={s.capture}>Genres</p>
           {/* {genres.map(({ name }) => name).join(', ')} */}
               
               
      
              </div>
              
          </div>
      <div>
         <p className={s.capture}>Additional information</p>
              <p>
                 <Link to={`cast`}>Cast</Link>
              </p>
              <p>
                  <Link to={`reviews`}>Reviews</Link>
              </p>
              <Outlet />
          </div>
      
      
        
      
    </>
  );
};
export default MovieDetails;
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from '../../services/fetchAPI';
import s from './Cast.module.css'

const Cast = () => {

  const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getCast(movieId).then(dataCast => setCast(dataCast.cast));
    
    
  }, [movieId]);

  return (
    <>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ cast_id, original_name, character,profile_path }) => (
              <li key={cast_id}>
              <div className={ s.castCard} >
                      <img src={`${IMG_PATH}${profile_path}`} alt={original_name}/>
                      <p className={s.name}>{original_name}</p>
                      <p className={s.character}><span>Character: </span>{character}</p>          
                  </div>
                  
              </li>
          ))}
        </ul>
      ) : (
        <p>No cast find</p>
      )}
    </>
  );
};
export default Cast;
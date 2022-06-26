import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getTrandingMovie } from '../services/fetchAPI';


const Home = () => {
    const [trandingMovie, setTrandingMovie] = useState([]);

useEffect(() => {
    
    getTrandingMovie().then(movies => setTrandingMovie(movies.results));
    
  
  }, []);

    return (
         <ul>
        {trandingMovie.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    )
}

export default Home;
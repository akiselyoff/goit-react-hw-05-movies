import { useState, useEffect, lazy, Suspense } from 'react'
import { useSearchParams } from "react-router-dom";
import { findMovie } from '../services/fetchAPI';


const MoviesList = lazy(() => import('./MoviesList'));

const SearchMovie = () => {

    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [searchQuery, setSearchQuery] = useState(query ?? '');
    

    const onChange = e => {
     setSearchQuery(e.currentTarget.value);
     
    };
    
  const onSubmit = e => {
      e.preventDefault();
      setSearchParams({ query: searchQuery.toLowerCase().trim() });
   
      e.currentTarget.value = '';
  };

    useEffect(() => {
        if (!query) return;
        findMovie(query).then(movies => setMovies(movies.results));     
  }, [query]);

    
    return (
        <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={searchQuery}
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
        />
        <button type="submit">
          <span>Search</span>
        </button>
        </form>
        <Suspense fallback={<div>Loading...</div>}>
          {movies.length > 0 && <MoviesList movies={movies} />}
       </Suspense>

      
    </>

    )
}

export default SearchMovie;
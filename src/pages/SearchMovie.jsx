import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import { findMovie } from '../services/fetchAPI';
import MoviesList from './MoviesList';

const SearchMovie = () => {


    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    

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

      {movies.length > 0 && <MoviesList movies={movies} />}
    </>

    )
}

export default SearchMovie;
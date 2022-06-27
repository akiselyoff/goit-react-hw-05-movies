
import { Routes, Route } from 'react-router-dom'
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home'
import SearchMovie from '../pages/SearchMovie'
import MovieDetails from '../pages/MovieDetails/MovieDetails'
import Cast from '../pages/Cast/Cast'
import Reviews from '../pages/Reviews/Reviews'
import NotFound from '../pages/NotFound'


export const App = () => {

  

  return (
    
    <Routes>
        <Route path="/" element={ <SharedLayout/>}>         
          <Route index element={ <Home/>} />  
        <Route path="/movies" element={<SearchMovie />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
           <Route path="cast" element={<Cast />}></Route>
           <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        
        <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
     
  );
};

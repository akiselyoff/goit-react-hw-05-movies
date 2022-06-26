
import { Routes, Route } from 'react-router-dom'
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home'
import SearchMovie from '../pages/SearchMovie'


export const App = () => {

  

  return (
    
    <Routes>
        <Route path="/" element={ <SharedLayout/>}>         
          <Route index element={ <Home/>} />  
          <Route path="/movies" element={<SearchMovie />}></Route>
          <Route></Route>
        </Route>
    </Routes>
     
  );
};

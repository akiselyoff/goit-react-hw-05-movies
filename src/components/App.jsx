
import { Routes, Route } from 'react-router-dom'
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home'


export const App = () => {

  

  return (
    
      <Routes>
        <Route path="/" element={ <SharedLayout/>}>         
          <Route index element={ <Home/>} />  
          <Route></Route>
          <Route></Route>
        </Route>
    </Routes>
     
  );
};

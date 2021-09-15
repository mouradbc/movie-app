import './App.css';


import movies from './moviesData'
import React,{ useState} from 'react'
import MovieDetails from './Component/MovieDetails'
import NavBar from './Component/NavBar';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from './Component/Home';
import MoviesList from './Component/MoviesList';
function App() {
  const [movieList, setMovieList] = useState(movies)
  const [searchRate, setSearchRate] = useState(0)
  const [searchInput, setSearchInput] = useState("") 
  const [newMovie, setNewMovie] = useState({
    title:"",
    imgUrl:"",
    rate:"",
    description:""
  })
 
  
  
  
  return (
    
   <BrowserRouter>
     <NavBar
     searchInput={searchInput}setSearchInput={setSearchInput}
     searchRate={searchRate}setSearchRate={setSearchRate}
     setNewMovie={setNewMovie}newMovie={newMovie}movieList={movieList}setMovieList={setMovieList}
     />
     <Home movies={movieList} searchInput={searchInput}searchRate={searchRate}/>
     <Switch>
     <Route path="/home" component={MoviesList} />
     <Route path="/movieDetails"component={MovieDetails} />
     </Switch>
     </BrowserRouter> 
   
   
  );
}

export default App;

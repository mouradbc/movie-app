import React from "react";
import SearchRate from "./SearchRate";
import SearchWord from "./SearchWord";
import AddMovie from "./AddMovie";
import {BrowserRouter,Route} from 'react-router-dom'
import Home from "./Home";

const NavBar = ({
  searchInput,
  searchRate,
  setMovieList,
  setNewMovie,
  setSearchInput,
  setSearchRate,
  newMovie,
  movieList,
}) => {
  return (
    <div>
      <header>
        <button className="badge">MovieApp</button>
      
        <SearchWord searchInput={searchInput} setSearchInput={setSearchInput} />
        <SearchRate searchRate={searchRate} setSearchRate={setSearchRate} />
        <AddMovie
          setNewMovie={setNewMovie}
          newMovie={newMovie}
          movieList={movieList}
          setMovieList={setMovieList}
        />
      </header>
    </div>
  );
};

export default NavBar;

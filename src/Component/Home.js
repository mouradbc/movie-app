import React from "react";
import MoviesList from "./MoviesList";

const Home = ({ movies, searchRate, searchInput }) => {
  return (
    <div>
      <div className="moviesList">
        <MoviesList
          moviesList={
            searchInput
            ? movies.filter((movie) =>
                movie.title.toLowerCase().includes(searchInput.toLowerCase())
              )
            : searchRate > 1
            ? movies.filter((movie) => movie.rate >= searchRate)
            : movies}
          
        />
      </div>
    </div>
  );
};

export default Home;

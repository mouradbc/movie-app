import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({moviesList}) => {
    
     return (
        <div className="moviesList">
           {moviesList.map((movieItem,key)=>(<MovieCard key={key} movieItem={movieItem}/>))} 
        </div>
    )
}

export default MoviesList;

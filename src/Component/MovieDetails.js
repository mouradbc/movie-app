import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'

const MovieDetails = () => {
    return (
        <BrowserRouter>
        <div>
            Movie deails
        </div>
        <button><a href="/home">return to home</a></button>
        </BrowserRouter>
    )
}

export default MovieDetails

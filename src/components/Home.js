import React, {useEffect, useState} from "react";

const Home = () => {

  const API_KEY = '17f2008618d3a52925d4dbeca7c6bbd1';
  const EXAMPLE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=';

  // Setup the state to store movies
  const [movie, setMovie] = useState([]);

  //Fetch the movies from the API
  const fetchMovies = async () => {
    const data = await fetch(
      EXAMPLE_URL + API_KEY
    );

    const movie = await data.json();
    console.log(movie);
    setMovie(movie);
    
 }
  
 return(
    <div className='Home'>
      <h3>Movies</h3>
      <button onClick={fetchMovies}>Get Movie</button>
      <h1>{movie.original_title}</h1>
    </div>

  ) 
};

export default Home;
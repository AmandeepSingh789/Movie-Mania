import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
// 85c97aa2
// http://www.omdbapi.com/?i=tt3896198&apikey=85c97aa2
let searches =0;
function incrementCounter(){
    searches=searches+1;
}
const api_URL = "http://www.omdbapi.com/?apikey=85c97aa2";
const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${api_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    searches=searches+1;
  };

  return (
    <div className="app">
      <h1>MovieMania</h1>

      <div className="search">
        <input
          placeholder="Search Your Favorite Movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
                searchMovies(ev.key)
            }
            }}
        />

        <img src={SearchIcon} 
        alt="search" 
        onClick={() => searchMovies(searchTerm)}
        />


      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
            {searches > 0 ?
            (<h2>Movie Not Found</h2>)
            : (
                <h2>Search Your Favorite Movie </h2>
            )
         }
          
        </div>
      )}
    </div>
  );
};

export default App;

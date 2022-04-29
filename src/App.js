import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
// 85c97aa2
// http://www.omdbapi.com/?i=tt3896198&apikey=85c97aa2
let initialSearch =true;

const api_URL = "http://www.omdbapi.com/?apikey=85c97aa2";
const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${api_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
    initialSearch=false;
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
                searchMovies(searchTerm)
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
            {initialSearch==false ?
            (<h2>Movie Not Found</h2>)
            : (
                <h2>Find Some Movies </h2>
            )
         }
          
        </div>
      )}
    </div>
  );
};

export default App;

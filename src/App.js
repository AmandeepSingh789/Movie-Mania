import React from "react";
import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';
// 85c97aa2
// http://www.omdbapi.com/?i=tt3896198&apikey=85c97aa2
const api_URL = 'http://www.omdbapi.com/?apikey=85c97aa2';

const movie1  = {
    "Title": "Spider-Man: Homecoming",
    "Year": "2017",
    "imdbID": "tt2250912",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"
}
const App = () =>{
    
    const searchMovies = async (title) => {
        const response = await fetch (`${api_URL}&s=${title}`); 
        const data = await response.json();
        console.log(data.Search);
        };
    
    useEffect(() => {
        searchMovies('Spider-Man'); 
    },[]);
    return (
        <div className="app">
            <h1>MovieMania</h1>

            <div className="search">
                <input 
                placeholder="Search Your Favorite Movie"
                value = "Superman"
                onChange={() => {}} 
                />

                <img
                src ={SearchIcon}
                alt= "search"
                onClick={() => {}} 
                />
            </div>

                <div className="container">
                    <div className="movie">
                        <div>
                            <p>{movie1.Year}</p>
                        </div>
                        <div>
                        <img src = {movie1.Poster}  alt = {movie1.Title}/>
                        </div>
                        <div>
                            <span>{movie1.Type}</span>
                            <h3>{movie1.Title}</h3>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default App;
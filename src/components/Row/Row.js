import axios from "../../axios";
import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState([false]);

  let base_url = "https://image.tmdb.org/t/p/original";

  isLargeRow = (isLargeRow === undefined) ? false : true; 
  //run once when the row loads, and don't run again
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //check for not null elements
      request.data.results = request.data.results.filter(element => element.backdrop_path !== null);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  };

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie.name || '')
        .then((url) => {
          console.log(url[0], "url");
          if(url[0]){
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          }else{
            setTrailerUrl(false);
          }
          
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            
          />
        ))}
      </div>
      {console.log(trailerUrl, "trailerUrl")}
      {trailerUrl[0] && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

import React, { useState, useEffect } from "react";
import fetchMovie from "../functions/GetMovie";
import { MDBRow } from "mdbreact";
import MovieCard from "../Cards/MovieCard";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchURL = fetchMovie("now_playing");

    fetch(fetchURL)
      .then(result => result.json())
      .then(json => {
        setMovies(json.results);
      });
  }, []);

  return (
    <div>
      <MDBRow>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MDBRow>
    </div>
  );
};

export default NowPlaying;

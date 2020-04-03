import React, { useState, useEffect } from "react";
import fetchMovie from "../functions/GetMovie";
import { MDBRow } from "mdbreact";
import MovieCard from "../Cards/MovieCard";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchURL = fetchMovie("popular");

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

export default PopularMovies;

import React, { useEffect, useState } from "react";
import MovieCard from "../Cards/MovieCard";
import { MDBRow } from "mdbreact";
import {useParams} from 'react-router-dom'

const SearchPage = (props) => {
  let {searchKey} =  useParams();

  const [movies, setMovies] = useState([]);

 


  

  
  useEffect(() => {
    const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=db39ff627aba28f2e2318d55c7a9fd21&language=en-US&query=${searchKey}&page=1&include_adult=false`;

    fetch(searchURL)
      .then(result => result.json())
      .then(json => {
        setMovies(json.results);
      });
  }, [searchKey]);

  
  
  return (
    <div>
    <h1>Search</h1>
    <MDBRow>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MDBRow>

</div>
  );
};

export default SearchPage;

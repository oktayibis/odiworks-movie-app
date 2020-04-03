import React, { useEffect, useState } from "react";
import { MDBCol, MDBBadge } from "mdbreact";
import genres from '../functions/Genres'
import {Link} from 'react-router-dom'

const MovieCard = props => {
const imgBaseURL = "http://image.tmdb.org/t/p/w1280/";
  const { movie } = props;
const [movieGenre, setMovieGenre] = useState([])

  useEffect(()=> {
  genres.map(listGenre => {
   return movie.genre_ids.map(movieGenreID => {
      if(movieGenreID === parseInt(listGenre.id)){
       return setMovieGenre(movieGenre => [...movieGenre, listGenre.name])
      } else {
        return null
      }
    })
  })
    

  }, [movie.genre_ids])
  
  


  return (
    
      <MDBCol className='my-2' size='4'>
        <div className="card">
          <div className="view overlay">
            <img
              className="card-img-top"
              src={imgBaseURL+movie.backdrop_path}
              alt={movie.title}
            />
          </div>

          <div className="card-body">
            <h4 className="card-title">{movie.title}</h4>
            <MDBBadge color='amber' className='float-right'>Vote: {movie.vote_average}</MDBBadge>
            <p className="card-text">
              Release Date : {movie.release_date}
            </p>
            <p>
           
            </p>
           
            <Link className='btn btn-blue-grey'  to={`/detail/${movie.id}`} > More </Link>
          </div>
          <MDBBadge color='teal lighten-3'>{movieGenre.join(' , ')}</MDBBadge>
        </div>
      </MDBCol>
    
  );
};

export default MovieCard;

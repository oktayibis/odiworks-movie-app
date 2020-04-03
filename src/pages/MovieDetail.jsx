import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { MDBCardImage, MDBCardTitle, MDBRow, MDBCol,  MDBAlert} from 'mdbreact';
import ActorCard from '../Cards/ActorCard';


const MovieDetail = () => {
    const [movie, setMovie] = useState({})
    const [genreList, setGenreList] = useState([])
    const [productionCompanies, setProductionCompanies] = useState([])
    const [cast, setCast] = useState([])

    let {movieId} =  useParams();
    const imgBaseURL = "http://image.tmdb.org/t/p/w1280/";


useEffect(()=>{
    const fetchMovieURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=db39ff627aba28f2e2318d55c7a9fd21&language=en-US
    `
    const fetchCastURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=db39ff627aba28f2e2318d55c7a9fd21&language=en-US`
    
    fetch(fetchMovieURL)
    .then(result => result.json())
    .then(json => {
        setMovie(json)
        setGenreList(json.genres)
        setProductionCompanies(json.production_companies)
    })

    fetch(fetchCastURL)
    .then(result => result.json())
    .then(json => {
        setCast(json.cast.slice(0,4))
    })


  
}, [movieId])



    return (
       
        <div className='mt-1'>
        
       <MDBRow>
       <MDBCol size='5'>
       <MDBCardImage className='rounded' cascade style={{ width: '100%' }} src={imgBaseURL+movie.poster_path} />

       </MDBCol>
       <MDBCol>
           <MDBCardTitle className='text-center' style={{fontSize: '5rem'}}>{movie.title}</MDBCardTitle>
           <MDBRow>
               <MDBCol>
                   <MDBAlert color='secondary'>Release: {movie.release_date}</MDBAlert>
               </MDBCol>
               <MDBCol>
                   <MDBAlert color='secondary'>Duration: {movie.runtime} mins</MDBAlert>
               </MDBCol>
               <MDBCol size='3'>
                   <MDBAlert color='warning' size='sm'>Point: {movie.vote_average}</MDBAlert>
               </MDBCol>
           </MDBRow>
           <MDBRow className='container'>
               <p className='text-justify'>{movie.overview}</p>
           </MDBRow>
           <MDBRow>
           <MDBCol>
           <MDBAlert color='info'>Genre: {genreList.map(genre => genre.name).join(' , ')}</MDBAlert>
           </MDBCol>
           </MDBRow>
           <MDBRow>
           <MDBCol>
           <MDBAlert color='success'>Tagline: {movie.tagline ? movie.tagline : 'None'}</MDBAlert>
           </MDBCol>
           </MDBRow>
           <MDBRow>
           <MDBCol>
           <MDBAlert color='light'>Budget: ${movie.budget === 0 ? 'Unknown' : movie.budget}</MDBAlert>
           </MDBCol>
           <MDBCol size='3'>
             <a className='btn btn-info' href={movie.homepage}>Homepage</a>
           </MDBCol>
           <MDBCol size='3'>
          <a className='btn btn-warning' href={`https://www.imdb.com/title/${movie.imdb_id}`}>IMDB Page</a>
           </MDBCol>
           </MDBRow>
           <MDBRow>
               <MDBCol>
               <MDBAlert color='light'> <strong className='text-dark'>Productions:</strong> {productionCompanies.map(c => c.name).join(' , ')}</MDBAlert>
               </MDBCol>
           </MDBRow>
           <MDBRow>
                {cast.map(actor => {
                    return <ActorCard actor={actor} />
                })}
           </MDBRow>
       </MDBCol>

       
    </MDBRow>
            
        </div>
    )
}

export default MovieDetail

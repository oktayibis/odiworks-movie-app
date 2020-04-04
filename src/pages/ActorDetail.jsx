import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDBRow, MDBCol, MDBCardImage, MDBAlert } from "mdbreact";
import ActorHistoryCard from "../Cards/ActorHistoryCard";

const ActorDetail = () => {
  const imgBaseURL = "http://image.tmdb.org/t/p/w1280/";

  const { actorID } = useParams();

  const [actorBio, setActorBio] = useState({});
  const [actorHistory, setActorHistory] = useState([]);
  const [actorBirthYear, setActorBirthYear] = useState(0)

  useEffect(() => {
    //fetch urls
    const fetchActorBioUrl = `https://api.themoviedb.org/3/person/${actorID}?api_key=db39ff627aba28f2e2318d55c7a9fd21`;
    const fetchActorHistoryURL = `https://api.themoviedb.org/3/person/${actorID}/movie_credits?api_key=db39ff627aba28f2e2318d55c7a9fd21`;

    //fetching bio data of actor
    fetch(fetchActorBioUrl)
      .then((result) => result.json())
      .then((json) => {
        setActorBio(json);
        setActorBirthYear(parseInt(json.birthday.slice(0,4)))
      });

    //fetching history of actor
    fetch(fetchActorHistoryURL)
      .then((result) => result.json())
      .then((json) => {
        setActorHistory(json.cast);
      });
  }, [actorID]);

  return (
    <div>
      <MDBRow>
        <MDBCol className="rounded mt-2" size="3">
          <MDBCardImage
            className="rounded"
            cascade
            style={{ width: "100%" }}
            src={imgBaseURL + actorBio.profile_path}
          />
        </MDBCol>

        <MDBCol size="9">
          <MDBRow className='my-2'>
            <MDBCol>
            <h1 className='text-left text-dark'>{actorBio.name}</h1>
            </MDBCol>
          </MDBRow>
        <MDBRow>
            <MDBCol>
            <h2 style={{color:'#004d40', textDecoration:'underline'}}> Info</h2>
            
            <MDBRow>
                <MDBCol size='4'>
                <MDBAlert>Birth: {actorBio.birthday}  </MDBAlert>
                </MDBCol>
                <MDBCol size='2'>
                <MDBAlert color='info'>Age : {new Date().getFullYear() - actorBirthYear}</MDBAlert>
                </MDBCol>
                <MDBCol>
                    <MDBAlert>Birth place: {actorBio.place_of_birth}</MDBAlert>
                </MDBCol>
            </MDBRow>
            <MDBRow>
             <MDBCol>
             <p className='text-justify'>
                {actorBio.biography}
                </p>
             </MDBCol>
         
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <MDBAlert color='dark'>Profession: {actorBio.known_for_department}</MDBAlert>
                </MDBCol>
                {
                 actorBio.deathday !== null ? 
                 <MDBCol>
                 <MDBAlert>Death day : {actorBio.deathday}</MDBAlert>
                 </MDBCol>
                 :
                 null
             }
             <MDBCol size='3'>
                 <MDBAlert className='bg-secondary '><a className='text-white' href={`https://www.imdb.com/name/${actorBio.imdb_id}`}> IMDB Page</a></MDBAlert>
             </MDBCol>
            </MDBRow>
            </MDBCol>
         
        </MDBRow>
        </MDBCol>
      </MDBRow>

      <MDBRow>
      <MDBCol size='3'>

      </MDBCol>
      <MDBCol>
        <h2 className='text-left ' style={{color:'#004d40', textDecoration:'underline'}}> History</h2>
        </MDBCol>
      </MDBRow>
  
        {
            actorHistory.map((history, index) => <ActorHistoryCard key={history.id} index=
            {index} history={history}/>)
        }

   
    
    </div>
  );
};

export default ActorDetail;

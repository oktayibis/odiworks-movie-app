import React from "react";
import { MDBRow, MDBCol, MDBCardImage, MDBAlert } from "mdbreact";
import { Link } from "react-router-dom";

const ActorHistoryCard = (props) => {
  const imgBaseURL = "http://image.tmdb.org/t/p/w1280/";

  const { history } = props;
  const releaseDate = history.release_date ? history.release_date : '2020-01-01'
  const { index } = props;

  return (
    <MDBRow
      className={
        index % 2 === 0 ? "grey lighten-3 border rounded" : "grey lighten-5 border rounded"
      }
      style={{  marginTop: "1%" }}
    >
    
      <MDBCol size="3">
       <Link to={`/detail/${history.id}`}>
        <MDBCardImage
        className='my-auto rounded align-middle'
          zoom
          style={{ width: "100%" }}
          cascade
          alt={history.title}
          src={imgBaseURL + history.backdrop_path}
        ></MDBCardImage>
      </Link>
      </MDBCol>

      <MDBCol>
      <MDBRow>
        <MDBCol>
        <Link to={`/detail/${history.id}`}>
        <MDBAlert  color="light">
     <h3> {history.title}</h3>
        </MDBAlert>
        </Link>
        </MDBCol>
      </MDBRow>
       <MDBRow>
      <MDBCol>
      <MDBAlert color='dark' >
       Role: {history.character}
       </MDBAlert>
      </MDBCol>
      <MDBCol>
      <MDBAlert color="info"> Year: {releaseDate.slice(0,4)}</MDBAlert>

      </MDBCol>
      <MDBCol>
      <MDBAlert color='success'>Vote: {history.vote_average}</MDBAlert>

      </MDBCol>
       </MDBRow>
      
      </MDBCol>
   
    </MDBRow>
  );
};

export default ActorHistoryCard;

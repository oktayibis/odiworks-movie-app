import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
  MDBView
} from "mdbreact";
import { Link } from "react-router-dom";

const ActorCard = props => {
  const { actor } = props;
  const imgBaseURL = "http://image.tmdb.org/t/p/w1280/";

  return (
    <MDBCol size="3">
      <MDBCard wide cascade>
        <MDBView cascade>
        <Link to={`/actor/${actor.id}`}>

       
          <MDBCardImage
            hover
            overlay="white-slight"
            className="card-img-top"
            src={imgBaseURL + actor.profile_path}
            alt="Card cap"
          />
           </Link>
        </MDBView>

        <MDBCardBody cascade >
          <MDBCardTitle className="card-title text-center">
           <Link className='text-dark' to={`/actor/${actor.id}`}>  <strong style={{ fontSize: "1rem" }}>{actor.name}</strong></Link>
          </MDBCardTitle>

          <p
            style={{ fontSize: "0.7rem" }}
            className="blue-text text-center"
          >
          {actor.character}
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default ActorCard;

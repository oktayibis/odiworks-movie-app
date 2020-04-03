import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
  MDBView
} from "mdbreact";

const ActorCard = props => {
  const { actor } = props;
  const imgBaseURL = "http://image.tmdb.org/t/p/w1280/";

  return (
    <MDBCol size="3">
      <MDBCard wide cascade>
        <MDBView cascade>
          <MDBCardImage
            hover
            overlay="white-slight"
            className="card-img-top"
            src={imgBaseURL + actor.profile_path}
            alt="Card cap"
          />
        </MDBView>

        <MDBCardBody cascade className="text-center">
          <MDBCardTitle className="card-title ">
            <strong style={{ fontSize: "1rem" }}>{actor.name}</strong>
          </MDBCardTitle>

          <p
            style={{ fontSize: "0.7rem" }}
            className="font-weight-bold blue-text"
          >
            {actor.character}
          </p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default ActorCard;

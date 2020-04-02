import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="unique-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol>
          <p>Designed by <a rel="noopener noreferrer" href='https://oktayibis.com/' target='_blank'>Oktay Ibis</a></p>
          </MDBCol>
          <MDBCol >
            <a rel="noopener noreferrer" href='https://www.themoviedb.org/' target='blank'>Data provied by The MovieDB</a>
          
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a rel="noopener noreferrer" target='_blank' href="https://odi.works"> odi.works</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
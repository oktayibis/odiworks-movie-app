import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBFormInline
} from "mdbreact";
import { HashRouter as Router } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    whichLink: "/"
  };

  handleLink = link => {
    this.setState({
      whichLink: link
    });
  };

  render() {
    return (
      <Router>
        <div className="navbar-container">
          <MDBNavbar color="teal" dark expand="lg">
            <MDBNavbarNav left>
              <MDBNavItem active={this.state.whichLink === "/" ? true : false}>
                <MDBNavLink onClick={() => this.handleLink("/")} to="/">
                  Now Playing
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem
                active={this.state.whichLink === "/populer" ? true : false}
              >
                <MDBNavLink
                  onClick={() => this.handleLink("/populer")}
                  to="/popular-movies"
                >
                  Popular Movies
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem
                active={this.state.whichLink === "/top-rated" ? true : false}
              >
                <MDBNavLink
                  onClick={() => this.handleLink("/top-rated")}
                  to="/top-rated"
                >
                  Top Rated
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem
                active={this.state.whichLink === "/coming-soon" ? true : false}
              >
                <MDBNavLink
                  onClick={() => this.handleLink("/coming-soon")}
                  to="/coming-soon"
                >
                  Coming Soon
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline
                  action={`#/search/${this.props.searchKey}`}
                  waves
                >
                  <div className="md-form my-0">
                    <input
                      ref={this.inputRef}
                      value={this.props.searchKey}
                      onChange={this.props.handleChange}
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="movie name"
                      aria-label="Search"
                    />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
        </div>
      </Router>
    );
  }
}

export default NavbarPage;

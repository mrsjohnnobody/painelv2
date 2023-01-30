import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";

// components
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <nav id="nav">
      <MDBNavbar expand="lg" light style={{ backgroundColor: "#e3f2fd" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <MDBNavbarLink>
              <Link to="/">
                <MDBIcon fas icon="house" />
              </Link>
            </MDBNavbarLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorThird} navbar>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <MDBIcon fas icon="folder" />
                  <Link to="/ordens"> Ordens</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <MDBIcon fas icon="tv" />
                  <Link to="/painel"> Painel</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <MDBIcon fas icon="tools" />
                  <Link to="/config"> Configurações</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <MDBIcon fas icon="user-alt" />
                  <Link to="/user"> Usuário</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <MDBIcon fas icon="archive" />
                  <Link to="/logs"> Logs</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <MDBIcon fas icon="question-circle" />
                  <Link to="/help"> Ajuda</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <span>
              <Link to="/quorum"></Link>
            </span>
            <span>
              <Link to="/call">
                <MDBIcon className="ms-1" fas icon="microphone-alt" size="2x" />
              </Link>
            </span>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </nav>
  );
};

export default Navbar;

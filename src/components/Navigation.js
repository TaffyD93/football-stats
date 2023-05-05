import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import premLogo from './prem-logo.png';
// https://www.cleanpng.com/png-201617-premier-league-english-football-league-l-5171808/
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/">
          <img src={premLogo} alt="Logo" width="40" height="40"
              className="d-inline-block align-top"></img></Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/table">Table</Link></Nav.Link>
            <Nav.Link><Link to="/results">Results</Link></Nav.Link>
            <NavDropdown title="Teams" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/teams">Arsenal</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;
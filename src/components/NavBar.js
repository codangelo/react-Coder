import { Navbar, Container, Nav} from 'react-bootstrap'
import navLogo from "../images/logo.png";
import "./style.css";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand className="logo" href="#home"><img src={navLogo} alt=""/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="textoNav" href="#features">LogIn</Nav.Link>
          <Nav.Link className="textoNav" href="#pricing">Productos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
)
}

export default NavBar
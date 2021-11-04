import { Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import navLogo from '../../images/logo.png';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Link className="textoNav" to="/"><img src={navLogo} alt=""/></Link>
        <Nav className="me-auto">
          <Link className="textoNav" to="../cafe">Cafés</Link>
          <Link className="textoNav" to="../maquinas">Máquinas</Link>
          <Link className="textoNav" to="../accesorios">Accesorios</Link>
          <Link className="textoNav" to="carrito"><CartWidget/></Link>
        </Nav>
      </Container>
    </Navbar>
)
}

export default NavBar
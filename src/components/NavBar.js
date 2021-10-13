import { Navbar, Container, Nav} from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">LogIn</Nav.Link>
          <Nav.Link href="#pricing">Productos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
)
}

export default NavBar
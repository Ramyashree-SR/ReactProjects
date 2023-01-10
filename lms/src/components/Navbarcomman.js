import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbarcommon() {
  return (
    <Container id="data">
      <Navbar  variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#"><img src="./assets/logo1.png" alt="tc" /></Navbar.Brand>
          <input type="text" placeholder="Search" className='search' style={{width:"200px"}}/>
          <button type="button" >Logout</button>
        </Container>
      </Navbar>
      
    </Container>
  );
}

export default Navbarcommon;
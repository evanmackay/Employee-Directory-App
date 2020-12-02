import './App.css';
import EmployeeLinks from './Components/Employee-links'
import Jumbo from './Components/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="sideLinks">
            <EmployeeLinks/>
          </Col>
          <Col className="jumboTron">
            <Jumbo/>
          </Col>       
        </Row>
      </Container>
    </div>
  );
}

export default App;

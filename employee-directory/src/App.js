import './App.css';
import React from 'react';
import EmployeeLinks from './Components/Employee-links';
import Jumbo from './Components/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import employee from './employees.json';

class App extends React.Component {
 state = {
   employee
 }

 render() {
   return (
    <div className="App">
    <Container>
      <Row>
        <Col className="jumboTron">
          <Jumbo/>
        </Col>       

      </Row>
      <Row>

        <Col className="sideLinks">
          <EmployeeLinks/>
        </Col>
      </Row>
    </Container>
  </div>
   )
 }
}


export default App;

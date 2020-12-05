import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem, Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import employees from './employees.json';
import EmployeeTable from './Components/EmployeeTable';


class App extends React.Component {
 state = {
   employees: employees,
   display: 'home'
 }

 

 render() {
   return (

     <BrowserRouter>
      {this.state.display === "home" && (
        <div className="App">        
        <Container>
          <Row>
            <Col className="jumboTron">
              <Jumbotron fluid>

                  <h1>Welcome to your Employee Directory!</h1>

                  <hr/>

                  <p>View your employees by clicking the button below.</p>


              </Jumbotron>
            </Col>       

          </Row>
          <Switch>
            <Route exact path="/viewall" component={EmployeeTable}/>
          </Switch>

          <Row>

            <Col className="sideLinks">
              <div className="employeeList">
                  <ListGroup>
                      <ListGroupItem><Link to="/viewall"><Button variant="outline-primary" block>View All Employees</Button></Link></ListGroupItem>
                  </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      )}

      {this.state.display === "viewall" && (
        {EmployeeTable}
      )}
     </BrowserRouter>
   )
 }
}


export default App;

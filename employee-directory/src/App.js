import './styles/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem, Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import employees from './employees.json';
import EmployeeTable from './Components/EmployeeTable';
import DepartmentJumbo from './Components/DepartmentJumbotron'

class App extends React.Component {
 state = {
   employees: employees,
   display: 'home'
 }

 showEmployeeTable() {
   this.setState({display: this.state.display = 'viewall'})
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

                  <p>Select from the list below to select what you would like to do.</p>


              </Jumbotron>
            </Col>       

          </Row>
          <Row>

            <Col className="sideLinks">
              <div className="employeeList">
                  <ListGroup>
                      <ListGroupItem><Link to="/departments"><Button variant="outline-primary" block>View Departments</Button></Link></ListGroupItem>
                      <ListGroupItem><Link to="/viewall"><Button variant="outline-primary" block>View All Employees</Button></Link></ListGroupItem>
                      <ListGroupItem><Link to="/search"><Button variant="outline-primary" block
                      onClick={this.showEmployeeTable()}
                      >Search Employees</Button></Link></ListGroupItem>
                      <ListGroupItem><Link to="/add"><Button variant="outline-primary" block>Add Employees</Button></Link></ListGroupItem>
                      <ListGroupItem><Link to="/remove"><Button variant="outline-primary" block>Remove Employees</Button></Link></ListGroupItem>
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
      
      <Switch>
        <Route exact path="/"/>
        <Route exact path="/departments" component={DepartmentJumbo}/>
        <Route exact path="/viewall" component={EmployeeTable}/>
        <Route exact path="/search"/>
        <Route exact path="/add"/>
        <Route exact path="/remove"/>
      </Switch>


     </BrowserRouter>
   )
 }
}


export default App;

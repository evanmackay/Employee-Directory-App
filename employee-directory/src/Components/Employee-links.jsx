import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';


const EmployeeLinks = (props) => {

    return (
        <div className="employeeList">
            <ListGroup>
                <ListGroupItem><Button variant="outline-primary" block>View Departments</Button></ListGroupItem>
                <ListGroupItem><Button onClick= {function() {}} variant="outline-primary" block>Sort</Button></ListGroupItem>
                <ListGroupItem><Button onClick= {function() {}} variant="outline-primary" block>Search Employees</Button></ListGroupItem>
                <ListGroupItem><Button onClick= {function() {}} variant="outline-primary" block>Add Employees</Button></ListGroupItem>
                <ListGroupItem><Button onClick= {function() {}} variant="outline-primary" block>Remove Employees</Button></ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default EmployeeLinks
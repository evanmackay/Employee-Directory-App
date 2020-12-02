import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';


const EmployeeLinks = () => {
    return (
        <div className="employeeList">
            <ListGroup>
                <ListGroupItem><Button fluid variant="outline-primary">Departments</Button></ListGroupItem>
                <ListGroupItem><Button fluid variant="outline-primary">Sort</Button></ListGroupItem>
                <ListGroupItem><Button fluid variant="outline-primary">Search</Button></ListGroupItem>
                <ListGroupItem><Button fluid variant="outline-primary">Add</Button></ListGroupItem>
                <ListGroupItem><Button fluid variant="outline-primary">Remove</Button></ListGroupItem>
            </ListGroup>
        </div>
    )
}

export default EmployeeLinks
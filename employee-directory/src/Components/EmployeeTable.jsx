import React from 'react';
import { Table, Card, ListGroup } from 'react-bootstrap'

const EmployeeTable = (props) => {
    return(
        <Card style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.firstname} {props.lastname}</Card.Title>
                <Card.Text>
                    <ListGroup.Item>Department: {props.department}</ListGroup.Item>
                    <ListGroup.Item>Email: {props.email}</ListGroup.Item>
                </Card.Text>                
            </Card.Body>
        </Card>
    )
}

export default EmployeeTable
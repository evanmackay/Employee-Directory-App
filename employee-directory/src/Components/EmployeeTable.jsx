import React from 'react';
import { Table, Card, ListGroup } from 'react-bootstrap';
import employees from '../employees.json'

class EmployeeTable extends React.Component {
    state= {
        employees: employees
    }

    render() {
        return(
            this.state.employees.map((employee) => 
            <div>
            <Card style={{ width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{employee.firstname} {employee.lastname}</Card.Title>
                    <Card.Text>
                        <ListGroup.Item>Department: {employee.department}</ListGroup.Item>
                        <ListGroup.Item>Email: {employee.email}</ListGroup.Item>
                    </Card.Text>                
                </Card.Body>
            </Card>
        </div>)
            
        )
    }
}

export default EmployeeTable
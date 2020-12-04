import React from "react";
import {
  Card,
  ListGroup,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import employees from "../employees.json";

class EmployeeTable extends React.Component {
  state = {
    employees: employees,
    filterText: ''
  };

  componentDidMount() {
    let nextState = [];

    console.log(this.state.employees);
    nextState = this.state.employees[0].results.map((emp) => {
      return {
        firstname: emp.name.first,
        lastname: emp.name.last,
        phone: emp.cell,
        gender: emp.gender,
        email: emp.email,
        picture: emp.picture.thumbnail,
        visible: true,
      };
    });
    this.setState({ employees: nextState });
  }
  render() {
    return (
      <div>
        <InputGroup className="mb-3"
        >
          <FormControl
            placeholder="Search"
            value={this.state.filterText}
            onChange={(event) => {
                let nextEmployees = [...this.state.employees]
                nextEmployees= nextEmployees.map((emp) => {
                if (event.target.value === "") {
                        return{
                            ...emp, visible: true
                        }
                    } else if (emp.firstname.includes(event.target.value)) {
                        return {
                            ...emp, visible: true
                        }
                    } else {
                        return {
                            ...emp, visible: false

                        }
                    }
                })
                this.setState({filterText: event.target.value, employees: nextEmployees})
                console.log(nextEmployees.map(emp => (emp.visible)));
            }}
          />
        </InputGroup>

        {this.state.employees.map((employee) => (
          <div>
            <Card className="employeeCard" style={{ width: "100%" }}>
              <Card.Body>
                <Image src={employee.picture} roundedCircle />

                <Card.Title>
                  {employee.firstname} {employee.lastname}
                </Card.Title>
                <Card.Text>
                  <ListGroup.Item>Phone: {employee.phone}</ListGroup.Item>
                  <ListGroup.Item>Email: {employee.email}</ListGroup.Item>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default EmployeeTable;

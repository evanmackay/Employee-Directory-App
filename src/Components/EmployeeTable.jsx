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
        city: emp.location.city,
        state: emp.location.state,
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
            placeholder="Search by Last Name"
            value={this.state.filterText.toLowerCase()}
            onChange={(event) => {
                let nextEmployees = [...this.state.employees]
                nextEmployees= nextEmployees.map((emp) => {
                if (event.target.value === "") {
                        return{
                            ...emp, visible: true
                        }
                    } else if (emp.lastname.toLowerCase().includes(event.target.value)) {
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

        {this.state.employees.map((employee) => {
            if (employee.visible) {
          return <div>
            <Card className="employeeCard" style={{ width: "100%" }}>
              <Card.Body>
                <Image src={employee.picture} roundedCircle />

                <Card.Title>
                  {employee.firstname} {employee.lastname}
                </Card.Title>
                <Card.Text>
                  <ListGroup.Item>Phone: {employee.phone}</ListGroup.Item>
                  <ListGroup.Item>Email: {employee.email}</ListGroup.Item>
                  <ListGroup.Item>Location: {employee.city}, {employee.state}</ListGroup.Item>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

            } else { return <></>}
        })}
      </div>
    );
  }
}

export default EmployeeTable;

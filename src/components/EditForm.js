import { Form, Button } from "react-bootstrap";
import {EmployeeContext} from "../contexts/EmployeeContext";
import { useContext,useState } from "react";

const EditForm = ({theEmployee}) => {

    const {dispatch} = useContext(EmployeeContext);

    const employee = theEmployee;
    const id = employee.id;


  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone); 
  
    const updatedEmployee = {id,name,email,address,phone}

  const handleSubmit = (e) => {
    e.preventDefault();
    //updateEmployee(id,updatedEmployee);
    dispatch({type:'update_employee',id,updatedEmployee})
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="E-mail *"
          name="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Address *"
          name="address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone *"
          name="phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" block >
        Edit New Employee
      </Button>
    </Form>
  );
};

export default EditForm;

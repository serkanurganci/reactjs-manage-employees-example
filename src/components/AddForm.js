import { Form, Button } from "react-bootstrap";
import {EmployeeContext} from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {

  const {dispatch}   = useContext(EmployeeContext);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [phone, setPhone] = useState("");
  
  const [newEmployee,setNewEmployee] = useState({
    name:"",email:"",address:"",phone:""
  });

  const {name,email,address,phone} = newEmployee;

  const onInputChange = (e)=>{
    setNewEmployee({...newEmployee,[e.target.name]:[e.target.value]});
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    // addEmployee(name,email,address,phone)
    dispatch({type:'add_employee',employee:{
      name,email,address,phone
    }})
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          required
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="E-mail *"
          name="email"
          value={email}
          required
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Address *"
          name="address"
          value={address}
          onChange={onInputChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone *"
          name="phone"
          value={phone}
          onChange={onInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" block >
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;

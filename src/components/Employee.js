import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import EditForm from "./EditForm";
import { Button, Modal, OverlayTrigger,Tooltip } from "react-bootstrap";

const Employee = ({ employee }) => {
  const { dispatch } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td className="d-flex">
        <OverlayTrigger overlay={
          <Tooltip id={`tooltip-top`}>Edit</Tooltip>
        }>
          <button
            onClick={handleShow}
            href="#editEmployeeModal"
            className="btn text-danger btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">
              &#xE254;
            </i>
          </button>
        </OverlayTrigger>

        <OverlayTrigger overlay={
          <Tooltip id={`tooltip-top`}>Delete</Tooltip>}>
          <button
            onClick={() => dispatch({type:'remove_employee',id:employee.id})}
            href="#deleteEmployeeModal"
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">
              &#xE872;
            </i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;

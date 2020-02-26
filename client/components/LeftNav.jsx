import React from "react";
import { Nav, FormControl, InputGroup, Button } from "react-bootstrap";

const LeftNav = props => (
  <Nav
    defaultActiveKey="/feed"
    className="d-flex justify-content-center flex-direct:column"
    id="leftNav"
  >
    <Nav.Link>
      <img
        src="logo2.png"
        width="250px"
        height="60px"
        className="d-inline-block align-top mx-auto"
        alt="Snap Desk Logo"
      ></img>
    </Nav.Link>
    <Nav.Link eventKey="profile-link">
      {" "}
      <img
        src={props.url}
        width="250px"
        height="250px"
        className="d-inline-block align-top rounded-circle mx-auto"
        alt="Snap Desk Logo"
      ></img>
      <h4 className="userNameWrap " id="user-Name" width="200px">
        {props.userName}{" "}
      </h4>
    </Nav.Link>
    <InputGroup className="createRoom">
      <FormControl type="text" placeholder="Room name" />
      <InputGroup.Append>
        <Button>Create</Button>
      </InputGroup.Append>
    </InputGroup>
    <Nav.Link
      className="btn btn-success btn-sm "
      width="100px"
      eventKey="logout-link"
    >
      Logout
    </Nav.Link>
  </Nav>
);

export default LeftNav;

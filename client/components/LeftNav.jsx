import React from 'react';
import { Nav } from 'react-bootstrap';

const LeftNav = props => (
  <Nav defaultActiveKey="/feed" className="flex-column" id="leftNav">
    <Nav.Link>
      <img
        src="logo2.png"
        width="200px"
        height="60px"
        className="d-inline-block align-top mx-auto"
        alt="Snap Desk Logo"
      ></img>
    </Nav.Link>
    <Nav.Link eventKey="profile-link">
      {' '}
      <img
        src={props.url}
        width="115px"
        height="115px"
        className="d-inline-block align-top rounded-circle mx-auto"
        alt="Snap Desk Logo"
      ></img>
      <h4 id="user-Name">{props.userName}</h4>
    </Nav.Link>
    <Nav.Link
      className="btn btn-success btn-sm"
      eventKey="logout-link"
      id="logout"
    >
      Logout
    </Nav.Link>
  </Nav>
);

export default LeftNav;

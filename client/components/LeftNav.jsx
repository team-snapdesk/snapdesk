import React from 'react';
import { Nav } from 'react-bootstrap';

const LeftNav = props => (
  <Nav defaultActiveKey="/feed" className="flex-column">
    <Nav.Link href="">Snapdesk</Nav.Link>
    <Nav.Link eventKey="profile-link">Profile</Nav.Link>
    <Nav.Link eventKey="logout-link">Logout</Nav.Link>
  </Nav>
);

export default LeftNav;

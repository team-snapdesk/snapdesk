import React from 'react';
// import bootstrap components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const RightNav = props => (
  <Navbar bg="dark" variant="dark" className="flex-column navbar-right">
    <h3>Active Tickets</h3>
    {props.ticketsCount}
  </Navbar>
);

export default RightNav;

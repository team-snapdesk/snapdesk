import React from 'react';
// import bootstrap components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const LeftNav = props => (
  <Navbar bg="dark" variant="dark" className="flex-column navbar-left">
    <div className="top-nav">
      <Navbar.Brand href="/">
        <img
          src="image/logo2.png"
          id="nav-logo"
          className="d-inline-block align-top"
          alt="SnapDesk"
        />
      </Navbar.Brand>
      <hr />
      <Navbar.Brand href="/">
        <img
          alt=""
          src={props.url}
          className="d-inline-block rounded-circle profile-pic"
        />
        {props.userName}
      </Navbar.Brand>
    </div>
    <div className="logout flex-container">
      <Button variant="outline-light" size="sm" onClick={() => console.log('implement logout feature')}>
        Logout
      </Button>
    </div>
  </Navbar>
);

export default LeftNav;

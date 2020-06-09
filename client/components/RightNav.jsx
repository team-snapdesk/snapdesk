import React from 'react';
// import bootstrap components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LeaderBoard from '../containers/LeaderBoard.jsx';



const RightNav = props => (
  <Navbar bg="dark" variant="dark" className="flex-column navbar-right">
    <h3>Active Tickets</h3>
    <div className="active-tickets flex-container">
      <h4>{props.ticketsCount}</h4>
    </div>
    <hr />
    <h3>Leaderboard</h3>
    <LeaderBoard />
  </Navbar>
);

export default RightNav;

import React from "react";
import { Nav } from "react-bootstrap";

const RightNav = props => (
  <Nav defaultActiveKey="/feed" className="flex-column justify-content-end">
    <Nav.Item>Active Tickets: {props.ticketsCount}</Nav.Item>
    <Nav.Item>Leaderboard: </Nav.Item>
  </Nav>
);

export default RightNav;

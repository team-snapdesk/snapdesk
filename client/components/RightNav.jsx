import React from "react";
import { Form, ListGroup, Nav } from "react-bootstrap";

const RightNav = props => {
  if (props.userId === props.activeRoom.admin) {
    const users = props.activeRoom.users.map((user, i) => {
      if (user.banned) {
        return <ListGroup.Item><Form.Check label={user.name} checked></Form.Check></ListGroup.Item>
      }
      else {
        return <ListGroup.Item><Form.Check label={user.name}></Form.Check></ListGroup.Item>
      }
    })
  }
  else {
    const users = props.activeRoom.users.map((user, i) => {
      return <ListGroup.Item label={user.name} key={i} />
    })
  }
  return (
    <>
      <Nav defaultActiveKey="/feed" className="flex-column justify-content-end">
        <Nav.Item>Active Tickets: {props.ticketsCount}</Nav.Item>
        <Nav.Item>Leaderboard: </Nav.Item>
      </Nav>
      <ListGroup>
        {users}
      </ListGroup>
    </>
  );
};

export default RightNav;

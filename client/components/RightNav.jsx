import React from "react";
import { Button, ListGroup, Nav } from "react-bootstrap";

const RightNav = props => {
  let users;
  if (props.userId === props.activeRoom.admin) {
    users = props.activeRoom.users.map((user, i) => {
      if (user.id === props.userId) {
        return <ListGroup.Item key={i} id={user.id}><b>{user.name}</b></ListGroup.Item>
      }
      else if (user.banned) {
        return <ListGroup.Item key={i} id={user.id}>{user.name} <Button variant='outline-success' onClick={(e) => { e.preventDefault(); props.banUser(user.id, props.activeRoom.id, 'unban') }}>Unban</Button></ListGroup.Item>
      }
      else {
        return <ListGroup.Item key={i} id={user.id}>{user.name} <Button variant='danger' onClick={(e) => { e.preventDefault(); props.banUser(user.id, props.activeRoom.id, 'ban') }}>Ban</Button></ListGroup.Item>
      }
    })
  }
  else {
    users = props.activeRoom.users.map((user, i) => {
      return <ListGroup.Item key={i}>{user.name}</ListGroup.Item >
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

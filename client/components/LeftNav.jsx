import React from "react";
import {
  Nav,
  NavDropdown,
  FormControl,
  InputGroup,
  Button
} from "react-bootstrap";

const LeftNav = props => {
  let roomList = [];
  if (props.rooms.length > 0) {
    roomList = props.rooms.map((room, i) => {
      return <NavDropdown.Item key={i}>{room.name}</NavDropdown.Item>;
    });
  }
  roomList.push(
    // <NavDropdown.Item key={roomList.length}>
    <InputGroup className="createRoom">
      <FormControl
        id="roomForm"
        type="text"
        placeholder="Room name"
        value={props.rooms.newRoom}
        onChange={e => {
          props.updateNewRoom(e.target.value);
        }}
      />
      <InputGroup.Append>
        <Button
          onClick={e => {
            e.preventDefault();
            props.addRoom();
          }}
        >
          Create
        </Button>
      </InputGroup.Append>
    </InputGroup>
    // </NavDropdown.Item>
  );

  return (
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
      <NavDropdown title={props.activeRoom.name}>{roomList}</NavDropdown>
      <Nav.Link
        className="btn btn-success btn-sm "
        width="100px"
        eventKey="logout-link"
      >
        Logout
      </Nav.Link>
    </Nav>
  );
};

export default LeftNav;

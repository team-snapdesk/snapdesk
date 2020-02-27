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
      if (room.id === props.activeRoom.id) {
        return (
          <NavDropdown.Item
            key={i}
            onClick={() => props.updateActiveRoom(room.id, props.userId)}
          >
            <b>{room.name}</b>
          </NavDropdown.Item>
        );
      } else {
        return (
          <NavDropdown.Item
            key={i}
            id={room.id}
            onClick={e => props.updateActiveRoom(e.target.id, props.userId)}
          >
            {room.name}
          </NavDropdown.Item>
        );
      }
    });
  }
  roomList.push(
    <InputGroup className="createRoom">
      <FormControl
        id="roomForm"
        type="text"
        placeholder="Room name"
        value={props.newRoom}
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
      <Nav.Item>
        <InputGroup>
          <FormControl
            placeholder="Enter a room name"
            onChange={e => props.updateJoinRoomName(e.target.value)}
            value={props.joinRoomName}
          />
          <InputGroup.Append>
            <Button
              onClick={e => {
                e.preventDefault();
                props.joinRoom();
              }}
            >
              Join
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Nav.Item>
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

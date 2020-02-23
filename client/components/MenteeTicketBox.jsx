/**
 * ************************************
 *
 * @module  MenteeTicketBox
 * @author
 * @date
 * @description  component that renders a single ticketbox for each mentee
 *
 * ************************************
 */

import React from 'react';


const MenteeTicketBox = props => (
  <div className="MenteeTicketBox">
    <p>Input:</p>
    <p>{props.messageInput}</p>
    <p>Rating:</p>
    <p>{props.messageRating}</p>
  </div>
  );

export default MenteeTicketBox;
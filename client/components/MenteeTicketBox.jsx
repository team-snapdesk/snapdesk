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


const MenteeTicketBox = ({
  messageInput, 
  messageRating,
}) => (
  <div className="MenteeTicketBox">
    <p>Input:</p>
    {messageInput}
    <p>Rating:</p>
    {messageRating}
  </div>
  );

export default MenteeTicketBox;
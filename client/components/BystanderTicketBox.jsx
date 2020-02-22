/**
 * ************************************
 *
 * @module  BystanderTicketBox
 * @author
 * @date
 * @description  component that renders a single textbox for all Bystanders / Mentors
 *
 * ************************************
 */

import React from 'react';


const BystanderTicketBox = ({
  messageInput, 
  messageRating,
  messageTopic
}) => (
  <div className="BystanderTicketBox">
    
    <span>
      <button>ACCEPT</button>
      <button>CANCEL</button>
    </span>
  </div>
  );

export default BystanderTicketBox;
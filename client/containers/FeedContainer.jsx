/**
 * ************************************
 *
 * @module  FeedContainer
 * @author
 * @date
 * @description container that renders TicketBox and TicketCreator
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import MenteeTicketBox from '../components/MenteeTicketBox';
import BystanderTicketBox from '../components/BystanderTicketBox';
import TicketCreator from '../components/TicketCreator';

const mapStateToProps = (props) => ({
  messageInput: props.messageInput,
  messageRating: props.messageRating,
  activeTickets: props.activeTickets
});

const mapDispatchToProps = dispatch => ({
  updateMessage: (event) => dispatch(actions.updateMessage(event.target.value)),
  updateRating: (event) => dispatch(actions.updateRating(event.target.value)),
})

//function to render individual textBox with props
const buildFeed = () => {
  
  if (!tickets.activeTickets) {
    return (<div>No tickets to respond to!</div>)
  }

  tickets.activeTickets.forEach(ticket => {
    <MenteeTicketBox { ...props } />
  })
  // if (userId matches message User id) {

  //   <MenteeTicketBox
  //   ** pass in all appropriate props**
  //   />
  // } else {
  //   <Bystander=TicketBox
  //   **pass in all props**
  //   />
  // }
  
}

const FeedContainer = props => {
  return (

    <div>
    <h1>FeedContainer works</h1>
    <div className="ticketDisplay">
      {/* map buildFeed to tickets array */}
      <BystanderTicketBox />
      <MenteeTicketBox />
    </div>
    <div className="ticketCreator">
      <TicketCreator {...props} />
      {/* render ticketCreator. Pass down...
      newMessage,
      updatedMessage (onChange),
      expectedStars,
      postTicket (onClick)
    */}
    </div>
  </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer); 
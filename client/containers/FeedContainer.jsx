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
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import MenteeTicketBox from '../components/MenteeTicketBox';
import BystanderTicketBox from '../components/BystanderTicketBox';

const mapStateToProps = ({ tickets }) => ({
  // messageInput: tickets.messageInput,
  // messageRating: tickets.messageRating,
  // messageTopic: tickets.messageTopic
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

//function to render individual textBox with props
const buildFeed = () => {
  /*
  if (userId matches message User id) {

    <MenteeTicketBox
    ** pass in all appropriate props**
    />
  } else {
    <Bystander=TicketBox
    **pass in all props**
    />
  }
  */
}

const FeedContainer = props => {
  return (

    <div>
    <h1>FeedContainer works</h1>
    <div className="ticketDisplay">
      {/* map buildFeed to tickets array */}
    </div>
    <div className="ticketCreator">
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
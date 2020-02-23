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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import MenteeTicketBox from '../components/MenteeTicketBox';
import BystanderTicketBox from '../components/BystanderTicketBox';
import TicketCreator from '../components/TicketCreator';
// import { render } from 'node-sass';

const mapStateToProps = state => ({
  messageInput: state.tickets.messageInput,
  messageRating: state.tickets.messageRating,
  activeTickets: state.tickets.activeTickets
});

const mapDispatchToProps = dispatch => ({
  postTicket: () => dispatch(actions.postTicket()),
  updateMessage: (event) => dispatch(actions.updateMessage(event.target.value)),
  updateRating: (event) => dispatch(actions.updateRating(parseInt(event.target.value))),
})

class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 

    if (!this.props.activeTickets) {
      return (<div>No tickets to respond to!</div>)
    }
  
    this.props.activeTickets.forEach(ticket => {
      <MenteeTicketBox { ...this.props } />
    })
    
    return(
      <div>
      <h1>FeedContainer works</h1>
      <div className="ticketDisplay">
        {/* map buildFeed to tickets array */}
        <BystanderTicketBox />
        <MenteeTicketBox />
      </div>
      <div className="ticketCreator">
        <TicketCreator {...this.props} />
      </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer); 
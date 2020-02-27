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
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ticketActions';

// import components
import MenteeTicketBox from '../components/MenteeTicketBox';
import BystanderTicketBox from '../components/BystanderTicketBox';


const mapStateToProps = state => ({
  activeTickets: state.tickets.activeTickets,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class TicketStream extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    let activeTickets;
    if (!this.props.activeTickets || this.props.activeTickets.length === 0) {
      activeTickets = <p>No active tickets</p>;
    } else {
      activeTickets = [];
      for (let i = 0; i < this.props.activeTickets.length; i++) {
        let ticketBox;
        if (this.props.userId !== this.props.activeTickets[i].menteeId) {
          //ticket should render bystanderticketbox
          ticketBox = (
            <BystanderTicketBox 
              cancelAccept={this.props.cancelAccept}
              acceptTicket={this.props.acceptTicket}
              ticket={this.props.activeTickets[i]}
              key={this.props.activeTickets[i].messageId}
            />

            )
          } else {
            ticketBox = (
              <MenteeTicketBox
                deleteTicket={this.props.deleteTicket}
                resolveTicket={this.props.resolveTicket}
                toggleModal={this.props.toggleModal}
                deleteTicket={this.props.deleteTicket}
                ticket={this.props.activeTickets[i]}
                key={this.props.activeTickets[i].messageId}
              />
            )
        }
          
        activeTickets.push(ticketBox);
      }
    }

    return (
      <div className="content-wrapper">
        <div className="overflow-container">
          <div className="ticket-display">
            {/* map buildFeed to tickets array */}
            {/* <BystanderTicketBox /> */}
            {activeTickets}
            <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketStream);
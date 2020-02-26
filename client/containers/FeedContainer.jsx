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
import MenteeTicketBox from '../components/MenteeTicketBox';
import BystanderTicketBox from '../components/BystanderTicketBox';
import TicketCreator from '../components/TicketCreator';
// import { render } from 'node-sass';

const mapStateToProps = state => ({
  userId: state.user.userId,
  messageInput: state.tickets.messageInput,
  messageRating: state.tickets.messageRating,
  activeTickets: state.tickets.activeTickets,
  messageRating: state.tickets.messageRating,
  ticketsCount: state.tickets.ticketsCount,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }
// query tickets on screen 
  componentWillMount() {
    this.props.getTickets();
  }
// query tickets every 5 seconds
  componentDidMount() {
    this.interval = setInterval(() => this.props.getTickets(), 5000);
  }
// clearing previous intervals/ resets the intervalsn and chnaging title to snapdesk
  componentWillUnmount() {
    clearInterval(this.interval);
    document.title = 'SnapDesk';
  }
 // updates the titles to display active tickets
  componentDidUpdate() {
    document.title = '(' + this.props.ticketsCount + ') ' + 'SnapDesk';
  }

  render() {
    // if there are no active tickets, display a message in the background saying nothing here
    // do not render it when a ticket is added

    // build activeTickets list
    // later add conditionals to check which box should be rendered based on the posterId vs logged in user
    let activeTickets;
    // console.log('ACTIVE TICKETS: ', this.props.activeTickets);
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
            messageInput={this.props.activeTickets[i].messageInput}
            messageRating={this.props.activeTickets[i].messageRating}
            ticket={this.props.activeTickets[i]}
            key={this.props.activeTickets[i].messageId}
            />
            )
          } else {
            ticketBox = (
              <MenteeTicketBox
              deleteTicket={this.props.deleteTicket}
              resolveTicket={this.props.resolveTicket}
              messageInput={this.props.activeTickets[i].messageInput}
              messageRating={this.props.activeTickets[i].messageRating}
              ticket={this.props.activeTickets[i]}
              key={this.props.activeTickets[i].messageId}
              />
              )
          }
          
          activeTickets.push(ticketBox);
        }
      }

    return (
      <div>
        <div className="ticketDisplay overflow-auto">
          {/* map buildFeed to tickets array */}
          {/* <BystanderTicketBox /> */}
          {activeTickets}
        </div>
        <div className="ticketCreator">
          <TicketCreator {...this.props} key={this.props.userId} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);

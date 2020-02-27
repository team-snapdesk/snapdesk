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
  resolveModal: state.tickets.resolveModal
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTickets();
    // this.interval = setInterval(() => this.props.getTickets(), 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
    document.title = 'SnapDesk';
  }

  componentDidUpdate() {
    document.title = '(' + this.props.ticketsCount + ') ' + 'SnapDesk';
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
            userId={this.props.userId}
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
              updateFeedback={this.props.updateFeedback}
              updateFinalRating={this.props.updateFinalRating}
              resolveModal={this.props.resolveModal}
              ticket={this.props.activeTickets[i]}
              key={this.props.activeTickets[i].messageId}
              />
              )
          }
          
          activeTickets.push(ticketBox);
        }
      }

    return (
      <div className="feed-container">
        <div className="feed-grid">
          <div className="ticket-display overflow-auto">
            {/* map buildFeed to tickets array */}
            {/* <BystanderTicketBox /> */}
            {activeTickets}
          </div>
          <div className="ticketCreator">
            <TicketCreator {...this.props} key={this.props.userId} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);

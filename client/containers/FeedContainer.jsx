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

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ticketActions from "../actions/ticketActions";
import MenteeTicketBox from "../components/MenteeTicketBox";
import BystanderTicketBox from "../components/BystanderTicketBox";
import TicketCreator from "../components/TicketCreator";

const mapStateToProps = state => ({
  userId: state.user.userId,
  messageInput: state.tickets.messageInput,
  messageRating: state.tickets.messageRating,
  activeTickets: state.tickets.activeTickets,
  ticketsCount: state.tickets.ticketsCount,
  roomId: state.rooms.activeRoom.id,
  roomName: state.rooms.activeRoom.name
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ticketActions, dispatch);

class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getTickets(this.props.roomId);
  }

  componentDidMount() {
    //set the timer for how often the ticket feed will reload active tickets
    this.interval = setInterval(
      () => this.props.getTickets(this.props.roomId),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    document.title = "SnapDesk";
  }

  componentDidUpdate() {
    document.title = "(" + this.props.ticketsCount + ") " + "SnapDesk";
  }

  render() {
    // build activeTickets list
    let activeTickets;
    // if there are no active tickets, display a message in the background saying nothing here
    if (!this.props.activeTickets || this.props.activeTickets.length === 0) {
      activeTickets = <p>No active tickets</p>;
    } else {
      activeTickets = [];
      for (let i = 0; i < this.props.activeTickets.length; i++) {
        let ticketBox;
        //if the current logged in user doesn't match the ID of the user who posted the ticket, render the bystander box
        // the boxes will have different options for resolve/delete or accept/cancel
        if (this.props.userId !== this.props.activeTickets[i].menteeId) {
          ticketBox = (
            <BystanderTicketBox
              cancelAccept={this.props.cancelAccept}
              acceptTicket={this.props.acceptTicket}
              messageInput={this.props.activeTickets[i].messageInput}
              messageRating={this.props.activeTickets[i].messageRating}
              ticket={this.props.activeTickets[i]}
              //adding new userId
              userId={this.props.userId}
              key={this.props.activeTickets[i].messageId}
            />
          );
          // otherwise render the mentee ticket box
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
          );
        }
        activeTickets.push(ticketBox);
      }
    }

    return (
      <div>
        <h1>{this.props.roomName}</h1>
        <div className="ticketDisplay overflow-auto">{activeTickets}</div>
        <div className="ticketCreator">
          <TicketCreator
            {...this.props}
            key={this.props.userId}
            roomId={this.props.roomId}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);

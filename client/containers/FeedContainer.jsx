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
// import MenteeTicketBox from '../components/MenteeTicketBox';
// import BystanderTicketBox from '../components/BystanderTicketBox';
import TicketCreator from '../components/TicketCreator';
import ResolveModal from '../components/ResolveModal';
import TicketStream from './TicketStream';


const mapStateToProps = state => ({
  messageInput: state.tickets.messageInput,
  messageRating: state.tickets.messageRating,
  messageRating: state.tickets.messageRating,
  ticketsCount: state.tickets.ticketsCount,
  resolveModal: state.tickets.resolveModal,
  topic: state.tickets.topic
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    document.title = '(' + this.props.ticketsCount + ') ' + 'SnapDesk';
  }

  componentWillUnmount() {
    document.title = 'SnapDesk';
  }

  render() {
    return (
      <div className="feed-container">
        <ResolveModal 
          resolveTicket={this.props.resolveTicket}
          toggleModal={this.props.toggleModal}
          updateFeedback={this.props.updateFeedback}
          updateFinalRating={this.props.updateFinalRating}
          resolveModal={this.props.resolveModal}
        />
        <div className="feed-grid">
          <TicketStream />
          <div className="ticket-creator-container">
            <TicketCreator {...this.props} key={this.props.userId} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);

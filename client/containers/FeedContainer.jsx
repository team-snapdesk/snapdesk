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
import TicketBox from '../components/TicketBox';

const mapStateToProps = ({ tickets }) => ({
  messageInput: tickets.messageInput,
  messageRating: tickets.messageRating,
  messageTopic: tickets.messageTopic
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

//function to render individual textBox with props
const buildFeed = () => {
  /*<TextBox
  ** pass in all appropriate props**
    />
  */
}

const FeedContainer = props => {
  <div>
    <div className="ticketDisplay">
      {/* map buildFeed to tickets array */}
    </div>
    <div className="ticketCreator">
      {/* render ticketCreator */}
    </div>
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer); 
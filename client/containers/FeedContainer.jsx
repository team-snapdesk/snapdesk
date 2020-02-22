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

const mapStateToProps = ({ tickets }) => ({
  tickets: tickets.text,
  messageInput,
  messageRating,
  messageTopic
});

const mapDispatchToProps = dispatch => ({
  syncMarkets: () => dispatch(actions.syncMarkets()),
});

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
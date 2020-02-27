/**
 * ************************************
 *
 * @module  Wrapper
 * @author team snapdesk
 * @date 02/22/2020
 * @description component that renders Navbars, FeedContainer and TicketCreator
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ticketActions from '../actions/ticketActions';
import * as userActions from '../actions/userActions';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';
import FeedContainer from './FeedContainer';
import { bindActionCreators } from 'redux';

// import bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mapStateToProps = state => ({
  // totalSnaps: state.tickets.totalSnaps,
  // leaderBoard: state.tickets.leaderBoard,
  ticketsCount: state.tickets.ticketsCount,
  userAvatar: state.user.userAvatar,
  userName:state.user.userName,
});

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch)

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return(
      <div className="wrapper">
        <Row>
          <Col className="side-nav">
            <LeftNav url={this.props.userAvatar} userName={this.props.userName} />
          </Col>
          <Col>
            <FeedContainer />
          </Col>
          <Col className="side-nav">
            <RightNav ticketsCount={this.props.ticketsCount} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);

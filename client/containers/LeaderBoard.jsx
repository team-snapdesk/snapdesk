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
import { Table } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/leaderActions';

const mapStateToProps = state => ({
    leaderList: state.leader.leaderList
  });
  
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
  
class LeaderBoard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getLeaderBoard();
    }

    render() {
        let LeaderBox; 
//this.props.leaderboard = [{leader 1},{leader 2},.....]
        if (!this.props.leaderList || this.props.leaderList.length === 0) {
            LeaderBox = <p>No current Rankings </p>;
        } else {
            LeaderBox = [];
            for (let i = 0; i < this.props.leaderList.length; i++) {
                let currentLeader;
                currentLeader = (
                <LeaderBox
                key={`leader${i}`}
                mentorId = {this.props.leaderList[i].mentor_id}
                username={this.props.leaderList[i].name}
                totalSnaps={this.props.leaderList[i].sum}
                ranking={i+1}
                />
                )
                LeaderBox.push(currentLeader);
          }
          return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Username</th>
                        <th>Total Snaps</th>
                    </tr>
                    </thead>
                    <tbody>
                 {LeaderBox}
                    </tbody>
                </Table>
            </div>
          )
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LeaderBoard);

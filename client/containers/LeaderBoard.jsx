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

import LeaderBox from '../components/LeaderBox';


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
        this.interval = setInterval(() => this.setState(this.props.getLeaderBoard()),10000);//changed to try to get the leaderboard to refresh after a few seconds
    }

    //this whole component was added to try to get the leaderboard to refresh after a few seconds
    componentWillUnmount(){
      clearInterval(this.interval);
    }

    render() {
        let leaderList; 

        if (!this.props.leaderList || this.props.leaderList.length === 0) {
            leaderList = <p>No current Rankings</p>;
        } else {
            leaderList = [];
            for (let i = 0; i < this.props.leaderList.length; i++) {
                console.log('leaderboard', this.props.leaderList[i])
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
                leaderList.push(currentLeader);
          }
        }
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>Ranking</th>
                        <th style={{ textAlign: 'center' }}>Mentor</th>
                        <th style={{ textAlign: 'center' }}>Total Snaps</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leaderList}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LeaderBoard);

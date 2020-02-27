import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';

class LeaderBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            mentorId,
            username,
            totalSnaps,
            ranking
        } = this.props;
    }
    
    return (
        <tr>
            <td>{ranking}</td>
            <td>{username}</td>
            <td>{totalSnaps}</td>
         </tr>
    )
}

export default LeaderBox;
import React from 'react';

const LeaderBox = ({
    mentorId,
    username,
    totalSnaps,
    ranking
}) => (
    <tr>
        <td>{ranking}</td>
        <td>{username}</td>
        <td>{totalSnaps}</td>
    </tr>
);

export default LeaderBox;
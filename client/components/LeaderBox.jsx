import React from 'react';

const LeaderBox = ({
    mentorId,
    username,
    totalSnaps,
    ranking
}) => (
    <tr>
        <td style={{ textAlign: 'center' }}>{ranking}</td>
        <td style={{ textAlign: 'center' }}>{username}</td>
        <td style={{ textAlign: 'center' }}>{totalSnaps}</td>
    </tr>
);

export default LeaderBox;
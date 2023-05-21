import React from 'react';
import FollowersCard from './FollowersCard';

function FollowersList(props) {
  const { followers } = props;

  return (
    <div>
      {followers.map((user) => (
        <FollowersCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default FollowersList;

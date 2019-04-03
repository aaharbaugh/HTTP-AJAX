import React, { Component } from 'react';

class FriendsList extends Component {
  render() {
    return (
        <div>
            {this.props.friendsList.map(friend => (
                <div key={friend.id}>
                    <p>{friend.name}
                    {friend.age}
                    {friend.email}</p>
                </div>
            ))}
        </div>
    );
  }
}

export default FriendsList;

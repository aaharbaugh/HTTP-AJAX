import React, { Component } from 'react';

class AddFriend extends Component {
  render() {
    return (
        <div>
            <input type="text" name="name" placeholder="name"/>
            <input type="text" name="age" placeholder="age"/>
            <input type="text" name="email" placeholder="email"/>
            <button onClick={this.props.addFriend}>Add Friend</button>
        </div>
    );
  }
}

export default AddFriend;

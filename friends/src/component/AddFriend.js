import React, { Component } from 'react';

class AddFriend extends Component {
  render() {
    return (
        <div>
            <input type="text" name="name" placeholder="name" onChange={this.props.changeFunction} value={this.props.values.name}/>
            <input type="text" name="age" placeholder="age" onChange={this.props.changeFunction} value={this.props.values.age}/>
            <input type="text" name="email" placeholder="email" onChange={this.props.changeFunction} value={this.props.values.email}/>
            <button onClick={this.props.submitfunction}>Add Friend</button>
        </div>
    );
  }
}

export default AddFriend;

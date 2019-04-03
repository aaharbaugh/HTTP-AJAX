import React, { Component } from 'react';
import axios from 'axios'

import FriendsList from './component/FriendsList';
import AddFriend from './component/AddFriend';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios
      .get("http://localhost:5000/friends")
      .then(response => { 
        this.setState({ friends: response.data});
      })
      .catch(err => console.log(err));

  }

  addFriend(){
    axios
      .post("http://localhost:5000/friends")
      .then(response => { 
        this.setState({ friends: response.data});
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
          <FriendsList friendsList={this.state.friends} />
          <AddFriend function={this.addFriend}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios'

import FriendsList from './component/FriendsList';
import AddFriend from './component/AddFriend';

class App extends Component {

  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      email: '',
      age: ''
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

  changeHandler = (event) => {
    console.log('hi')
    this.setState({[event.target.name]: event.target.value})
  }


  addFriend = (event) =>{
    event.preventDefault();

    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      })
      .then(response => { 
        this.setState({ friends: response.data});
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
          <FriendsList friendsList={this.state.friends} />
          <AddFriend submitfunction={this.addFriend} changeFunction={this.changeHandler} values={this.state}/>
      </div>
    );
  }
}

export default App;

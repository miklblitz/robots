import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('http://10.162.113.18:3005/users')
      .then(response=>response.json())
      .then(users=>this.setState({'robots': users}))
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error);
      });
  }

  render(){
    return (
      <div className="App" >
        <input type='text' placeholder='serach robots' onChange={
          e => this.setState({ search: e.target.value })
        } />
        <CardList robots={this.state.robots} />
      </div>
    )
  }
}

export default App;

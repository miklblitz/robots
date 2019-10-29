import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://10.162.113.18:3005/users')
      .then(response=>response.json())
      .then(users=>this.setState({'robots': users}))
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error);
      });
  }

  handleChange = e => {
    this.setState({ search: e.target.value })
  }

  render(){
    const { robots, search} = this.state;
    const filterRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
      <div className="App" >
        <h1>Robotics managment</h1>
        <SearchBox 
          placeholder='search robots'
          handleChange={this.handleChange}
        />
        <CardList robots={filterRobots} />
      </div>
    )
  }
}

export default App;

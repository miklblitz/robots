import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
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
       {
         this.state.robots.map(robot => <h2 key={robot.id}>{robot.name}</h2>)
       }
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


const Home = () => (
    <div>
        <h3>This is home</h3>
    </div>
);


const Subpage = () => (
    <div>
        <h3>This is subpage</h3>
    </div>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/subpage'>Subpage</Link></li>
                </ul>
                <Route exact path='/' component={Home} />
                <Route path='/subpage' component={Subpage} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;

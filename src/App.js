import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import {
    CSSTransitionGroup,
} from 'react-transition-group';
import logo from './logo.svg';
import './App.css';
import './transitions.css';


const Home = () => (
    <div className="Page">
        <h3>This is home</h3>
    </div>
);


const Subpage = () => (
    <div className="Page">
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
                <div className="PageRow">
                    <Route key='home' exact path='/' children={({match}) => (
                        <CSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                        >
                            {match && <Home />}
                        </CSSTransitionGroup>
                    )} />
                    <Route key='subpage' path='/subpage' children={({match}) => (
                        <CSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                        >
                            {match && <Subpage />}
                        </CSSTransitionGroup>
                    )} />
                </div>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;

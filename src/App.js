import React, { Component } from 'react';
import './App.css';

import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import AppBody from './App-body';

import CreateEvent from './events/create';
import EventsDashboard from './events/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1>Event Management System</h1>
            <div>
              <Link to='/'>Dashboard</Link>
              <Link to='/createEvent'>Create Event</Link>
              <Link to='/editEvent/4'>Edit Event</Link>
            </div>
        </header>
        <div className="grid">
          <Route exact path='/' component={EventsDashboard}/>
          <Route exact path='/createEvent' component={CreateEvent}/>
          <Route exact path='/editEvent/:id' component={CreateEvent}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;

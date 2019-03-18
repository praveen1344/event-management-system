import React,{Component} from 'react';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';

import CreateEvent from './events/create';
import EventsDashboard from './events/dashboard';

class AppBody extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='grid'>
        <Router>
          <React.Fragment>

          </React.Fragment>
        </Router>
      </div>
    )
  }
}

export default AppBody;

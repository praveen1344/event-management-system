import React,{Component} from 'react';

import EventFilter from './filter';
import EventList from './listing';

class EventDashboard extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){
    // fetch('./mock/')
  }
  render(){
    return(
      <React.Fragment>
        <EventFilter/>
        <EventList/>
      </React.Fragment>
    )
  }
}

export default EventDashboard;

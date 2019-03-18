import React,{Component} from 'react';

class EventList extends Component{
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
  }

  render(){
    return(
      <div>Event Listing</div>
    )
  }
}

export default EventList;

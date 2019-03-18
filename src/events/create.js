import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';

class CreateEvent extends Component{
  constructor(props){
    super(props);
    this.state = {
      type: 'create',
      eventDetails:{
        id: undefined,
        name: undefined,
        duration: undefined,
        studentCount: undefined
      }
    };
  }
  componentDidMount(){
    if(this.props.match.path.search('editEvent') != -1){
      this.setState({type: 'edit'});
    }

    //TODO: Fetch data for the event using this.props.match.params.id
  }
  render(){
    if(this.state.type == 'edit'){
      return(
        <div>Edit Event ID: {this.props.match.params.id}</div>
      )
    }else{
      return(
        <div className="create-fields-container">
          <div>
            <TextField label="Event Name" value={this.state.eventDetails.name} fullwidth="true"/>
          </div>
          <div className="create-fields-container">
            <TextField label="Event Name" value={this.state.eventDetails.name} fullwidth="true"/>
          </div>
        </div>
      )
    }

  }
}

export default CreateEvent;

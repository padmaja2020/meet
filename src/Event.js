import React, {Component} from 'react';


class Event extends Component{
state = {

  showDetails:false,
};

handleShowDetails = () => {
  if (this.state.showDetails === false) {
    this.setState({ showDetails: true });
  } else {
    this.setState({ showDetails: false });
  }
};

render(){
  const showDetails = this.state.showDetails;
  return(
    <div className = "event">
      <div className = "eventOverviewName">
        <p>{this.props.event.summary}</p>
        <p>{this.props.event.start.dateTime}</p>
        <button className = "detailsButton" onClick = {()=> this.handleShowDetails()} > Details</button>
       
    

      </div>
       {showDetails && (
        <div className='eventDetails'>
            <p className='eventDetailsdescription'>
              {this.props.event.description}
            </p>
           
            </div>
       )}
       
      
    </div>

  );
}

}

export default Event;




// import React, { Component } from "react";

// class Event extends Component {
//   render() {
//     return <div></div>;
//   }
// }
// export default Event;
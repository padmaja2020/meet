import React, {Component} from 'react';

class NumberOfEvents extends Component{
    state = {
        numberofevents :32
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({numberofevents: value});
        this.props.updateEvents(null, value);
    }

    render(){

        return(
                <div className = "numberOfEvents">
                <label>Number of Events:</label>
                <input type = "text" className = "events_input" value = {this.state.numberofevents}    onChange={this.handleInputChanged} />

                </div>
        );
    }
}
export default NumberOfEvents;

// Pushing to github
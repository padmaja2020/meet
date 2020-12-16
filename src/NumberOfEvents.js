import React, {Component} from 'react';
import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component{
    state = {
        numberofevents :32,
        errorText:'',
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if(value < 1 || value > 32){
            this.setState({
                numberofevents: value,
                errorText:'Please enter a number between 1 and 32',
            });

        }else{
            this.setState({
                numberofevents: value,
                errorText:'',
            });
        }
       
        
        this.props.updateEvents(null, value);
    }

    render(){

        return(
                <div className = "numberOfEvents">
                <label>Number of Events:</label>
                <input type = "text" className = "events_input" value = {this.state.numberofevents}    onChange={this.handleInputChanged} />
                <ErrorAlert text = {this.state.errorText}/>
                </div>
        );
    }
}
export default NumberOfEvents;

// Pushing to github
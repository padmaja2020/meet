import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation:'all',
    numberofevents:32
  }
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location,count) => {
  
    if(!count){
      count = this.state.numberofevents;
    }
    if(!location){
      location = this.state.currentLocation;
    }
    getEvents().then((events) => {
     
        const locationEvents = (location === 'all') ?
        events :
        events.filter((event) =>
         event.location === location);
       
       const newEvents = locationEvents.slice(0, count);
     
      this.setState({
        events: newEvents,
        currentLocation:location,
        numberofevents:count
      });
    });
  }
  render(){
  return (
    <div className="App">
   
    <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
    <NumberOfEvents numberofevents = {this.state.numberofevents}  updateEvents={this.updateEvents}/>
    <EventList events={this.state.events}/>
     
    </div>
  );
};
}

export default App;

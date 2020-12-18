import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import EventGenre from './EventGenre';
import "./nprogress.css";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid,   PieChart, Pie, Cell, Tooltip,ResponsiveContainer
} from 'recharts';


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

  getData = ()=>{
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event)=>
        event.location === location).length
        const city = location.split(' ').shift()
        return{city, number};
    })
      return data;

  }

  render(){
  
  return (
    <div className="App">
    <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
    <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
    <NumberOfEvents numberofevents = {this.state.numberofevents}  updateEvents={this.updateEvents}/>
    <h4>Events in each city</h4>
    <div className = 'data-vis-wrapper'>
    <EventGenre  events={this.state.events}/>
        <ResponsiveContainer height={400}>
     
        <ScatterChart
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city"  />
              <YAxis type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
            </ResponsiveContainer>
      </div>
    <EventList events={this.state.events}/>
     
    </div>
  );
};
}

export default App;

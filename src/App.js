import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

import TripContainer from './containers/TripContainer';

class App extends React.Component {

  state = {
    allFlights: [],
    itineraryFlights: []
  }

//Fetching from database here to assign it to all flights
//button on flights to add to itinerary flights



  render(){
    return (
      //when you click add flight, it adds to state of itineraryFlights, which will get passed as a prop to TripContainer, then to TripList
      <div><TripContainer itineraryFlights={this.state.itineraryFlights}/></div>
  )
  }
}

export default App;

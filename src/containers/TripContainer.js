import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import TripList from "./TripList";
import PlanForm from '../components/PlanForm'
import TripShow from './TripShow'

class TripContainer extends React.Component {
  state = {
    trips: [],
    allTrips: []
  };

  componentDidMount() {
    fetch("http://localhost:3005/api/v1/todos")
      .then(response => response.json())
      .then(tripArray => {
        this.setState({
          trips: tripArray
        });
      });
    
      fetch("http://localhost:3005/api/v1/trips")
      .then(response => response.json())
      .then(newTrip => {
        this.setState({
          allTrips: newTrip
        });
      });
  }

  newTrip = (event, tripObj) => {
    event.preventDefault();
    let newArray = [tripObj, ...this.state.allTrips];
    this.setState({
      allTrips: newArray
    });
  };

  render() {
    return (
      <div>
        <Switch>

          <Route path="/trips/:name" render={(props) => {    
              console.log(props)          
            const foundTrip = this.state.trips.find(trip => {
                return trip.trip.name.toLowerCase() === props.match.params.name.toLowerCase()
            })
            if (foundTrip === undefined) {
                props.history.push("/")
            return
            } else {
                return (
                    <TripShow eachTrip={foundTrip}/>
                )
            }
        }}/>


        <Route path="/trips" render={(props) => {
            return (
                <div>

                    <h1>Your Trips</h1>
                    <PlanForm newTrip={this.newTrip}/>
                    {this.state.allTrips.map(tripObj => {
                    return <TripList eachTrip={tripObj} />;
                })}

                  <PlanForm newTrip={this.newTrip} />

                </div>
            );
        }}
        />
        </Switch>
      </div>
    );
  }
}

export default TripContainer;

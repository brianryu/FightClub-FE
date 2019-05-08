import React from "react";
import { Route, Switch } from "react-router-dom";

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


// function adds new trips with unique names and img_url to the list of "trips"
  newTrip = (event, tripObj) => {
    event.preventDefault();
    let newArray = [...this.state.allTrips, tripObj];

    fetch("http://localhost:3005/api/v1/trips", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...tripObj})
    })
    .then(res => res.json())
    .then(r => {
        this.setState({
            allTrips: newArray
        })
    })
}

// function to remove trip from the trip list
handleRemoveTrip = (clickedTrip) => {
    console.log(clickedTrip)
    let copyAllTrip = [...this.state.allTrips]
    copyAllTrip.map(trip => {
        if(trip.id === clickedTrip.id){
            copyAllTrip.splice(copyAllTrip.indexOf(trip),1)
        }
    })
    fetch("http://localhost:3005/api/v1/trips", {
        method: "DELETE",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({...clickedTrip})
    }).then(r => r.json())
    .then(r => {
        this.setState({
            allTrips: copyAllTrip
        })
    })
}

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
                <div className="tripList">
                    <h1>Your Trips</h1>
                    <PlanForm newTrip={this.newTrip}/>
                    {this.state.allTrips.map(tripObj => {
                    return <TripList handleRemoveTrip={this.handleRemoveTrip} eachTrip={tripObj} />;
                })}
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

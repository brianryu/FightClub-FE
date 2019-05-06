import React from 'react';


import TripList from './TripList';
import PlanForm from '../components/PlanForm';





class TripContainer extends React.Component{

    state = {
        trips: ['New Orleans', 'NYC', 'LA']
        //this state will have all trips with to do list array?
    }

    newTrip = (event, tripObj) => {
        event.preventDefault();
        console.log(tripObj)
    }



    handleSubmit = (event, taskObj) => {
        event.preventDefault();
        console.log(taskObj)
    }

    render() {
        return (
            <div>
                <PlanForm newTrip={this.newTrip}/>
                {this.state.trips.map(trip => {
                    return <TripList trip={trip} handleSubmit={this.handleSubmit} />  
                })}
                
            </div>      
        )
    }



}

export default TripContainer
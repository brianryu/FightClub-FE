import React from 'react';


import TripList from './TripList';
import PlanForm from '../components/PlanForm';





class TripContainer extends React.Component{

    // state = {
    //     trips: ['New Orleans', 'NYC', 'LA']
    //     //this state will have all trips with to do list array?
    // }

    state = {
        trips: [],
        clicked: false
      }
      
      componentDidMount(){
        fetch("http://localhost:3005/api/v1/trips")
        .then(response => response.json())
        .then(tripArray => {
          this.setState({
              trips: tripArray
          })
        })
      }

    isClicked = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    newTrip = (event, tripObj) => {
        event.preventDefault();
        console.log(event)
        let newArray = [...this.state.trips, tripObj]
        this.setState({
            trips: newArray
        })
        console.log(this.state.trips)
    }



    handleSubmit = (event, taskObj) => {
        event.preventDefault();
        console.log(taskObj)
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                <PlanForm newTrip={this.newTrip}/>
    
                <h1>Your Trips</h1>
                {this.state.trips.map(trip => {
                    return <TripList eachTrip={trip} handleSubmit={this.handleSubmit} isClicked={this.state.isClicked} />  
                })} 
               
                
            </div>      
        )
    }



}

export default TripContainer
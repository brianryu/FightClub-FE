import React from 'react';


import TripList from './TripList';
import PlanForm from '../components/PlanForm';





class TripContainer extends React.Component{

    

    state = {
        trips: []
       
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

  

    newTrip = (event, tripObj) => {
        event.preventDefault();
        console.log(event)
        let newArray = [...this.props.trips, tripObj]
        this.setState({
            trips: newArray
        })
        console.log(this.props.trips)
    }



    handleSubmit = (event, taskObj) => {
        event.preventDefault();
        console.log(taskObj)
    }

    render() {
        return (
            <div>
               
                <PlanForm newTrip={this.newTrip}/>
    
                <h1>Your Trips</h1>
                {this.state.trips.map(trip => {
                    return <TripList eachTrip={trip}  />  
                })} 
               
                
            </div>      
        )
    }



}

export default TripContainer
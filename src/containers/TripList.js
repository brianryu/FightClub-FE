import React from 'react';
import TripShow from './TripShow'

class TripList extends React.Component {

    tripPage = (event, tripObj) => {
        console.log(tripObj)
        return <TripShow trip={tripObj}/>
    }

    


    render(){

        
       

        return(           
            <div>
                
                <h2 onClick={(event) => {this.tripPage(event, this.props.eachTrip)}}>{this.props.eachTrip.name}</h2>
                {/* <TripShow trip={this.props.trip} handleSubmit={this.props.handleSubmit}/> */}
            </div>  
        )
    }
}




export default TripList;

import React from 'react';
import Itinerary from '../components/Itinerary'

class TripList extends React.Component {

    render(){
        return(
            <div>
                <Itinerary flights={this.props.flights}/>
            </div>
        )
    }



}




export default TripList;


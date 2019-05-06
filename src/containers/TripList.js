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

// The Itinerary in this file refers to one Tile(one trip) of Saved Trips on the list of all saved trips
// 
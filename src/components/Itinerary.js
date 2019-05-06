import React from 'react';

import MapContainer from './MapContainer'


class Itinerary extends React.Component {

    //Itinerary takes in dates and location from App

   state = {
       toDoList: []
   }

    render() {

        

        return(
            <div>
                <h1>Trip Itinerary</h1>
                <MapContainer destinationName={this.props.destinationName} />
                
                <ul>

                </ul>
            </div>
        )
    }
}

export default Itinerary;

//layout of itinerary includes list of things to do -> almost as a form where the input will be the key-value pairs


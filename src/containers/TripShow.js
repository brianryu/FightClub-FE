import React from 'react';

import MapContainer from '../components/MapContainer'
import ToDoList from '../components/ToDoList'


class TripShow extends React.Component {

    

    render() {

        

        return(
            <div>
                <h1>Trip Tile</h1>
                <MapContainer destinationName={this.props.trip} />
                <ToDoList handleSubmit={this.handleSubmit}/>
                
            </div>
        )
    }
}

export default TripShow;



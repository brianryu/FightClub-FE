import React from 'react';

import MapContainer from '../components/MapContainer'
import ToDoList from '../components/ToDoList'


class TripShow extends React.Component {

    state = {
        todo: []
    }

    render() {

        

        return(
            <div>
                <h1>Your Trip to {this.props.eachTrip.location}</h1>
                <ToDoList handleSubmit={this.handleSubmit}/>
                <MapContainer destination={this.props.eachTrip.location} />
                
                
            </div>
        )
    }
}

export default TripShow;



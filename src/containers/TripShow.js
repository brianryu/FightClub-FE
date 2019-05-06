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
                <h1>Trip Show Page</h1>
                <MapContainer destinationName={this.props.trip} />
                <ToDoList handleSubmit={this.handleSubmit}/>
                
            </div>
        )
    }
}

export default TripShow;



import React from 'react';

import MapContainer from '../components/MapContainer'
import ToDoList from '../components/ToDoList'
import TaskForm from '../components/TaskForm'


class TripShow extends React.Component {

    state = {
        todo: []
    }

    render() {

        

        return(
            <div>
                <h1>Your Trip to {this.props.eachTrip.location}</h1>
                <TaskForm handleSubmit={this.handleSubmit}/>
                <ToDoList trip={this.props.eachTrip} />
                <MapContainer destination={this.props.eachTrip.location} />
                
                
            </div>
        )
    }
}

export default TripShow;



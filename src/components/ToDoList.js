import React from 'react';

class ToDoList extends React.Component {

    render() {
        console.log(this.props.trip)
        return (
            <ul>
                <p>Trip Begins: {this.props.trip.start_date} </p>
                <p>Trip Ends: {this.props.trip.end_date} </p>
                <p>Priority Level of Trip: {this.props.trip.priority_lvl} </p>
                <p>Tasks:</p>
                <ul>
                {this.props.trip.tasks.map(task => <li> {task.message} </li>)}
                </ul>

            </ul>
        )
    }
    
}

export default ToDoList;
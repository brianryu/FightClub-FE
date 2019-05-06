import React from 'react';

class ToDoList extends React.Component {

    state = {
        task: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={(event) => {this.props.handleSubmit(event, this.state)}}>
                <label>Add Something to Your Itinerary</label>
                <input name="task" type="textfield" onChange={this.handleChange} value={this.state.task}></input>
                <label>Give a Short Description</label>
                <input name="description" type="textarea" onChange={this.handleChange} value={this.state.description}></input>
                <input type="submit"></input>
            </form>     
        )
    }
    
}

export default ToDoList;
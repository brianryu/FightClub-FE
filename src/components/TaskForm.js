import React from 'react';

class TaskForm extends React.Component {

    state = {
        task: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        console.log(this.props.trip)
        return (
            <form onSubmit={(event) => {}}>
                <label>Enter New Task: </label>
                <input placeholder="new task" name="task" type="text" onChange={this.handleChange} value={this.state.task}/>
                <input type="submit"/>
            </form>
        )
    }
    
}

export default TaskForm;



// if you're creating a TodoForm, this form is unnecessary


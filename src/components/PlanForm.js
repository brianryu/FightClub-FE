import React from 'react'

class PlanForm extends React.Component{

    state ={
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }
    
    render(){
        return(
            <form onSubmit={(event) => {this.props.newTrip(event, this.state)}}>
                <label>Plan New Trip</label>
                <input name="name" type="textfield" onChange={this.handleChange} value={this.state.name}></input>
                <input type="submit"></input>
            </form>
        )
    }
}

export default PlanForm;
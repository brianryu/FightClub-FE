import React from 'react'

class PlanForm extends React.Component{

    state ={
        name: '',
        img: ''
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        return(
            <form onSubmit={(event) => {this.props.newTrip(event, this.state)}}>
                <label>Plan New Trip: </label>
                <input placeholder="Name Of Trip" name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
                <input placeholder="Image URL" name="img" type="text" onChange={this.handleChange} value={this.state.img} />
                <input type="submit"/>
            </form>
            
        )
    }
}

export default PlanForm;
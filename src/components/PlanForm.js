import React from 'react'

class PlanForm extends React.Component{

    state ={

        name: '',
        img_url: ''
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
                <input placeholder="Image URL" name="img_url" type="text" onChange={this.handleChange} value={this.state.img} />
                <input type="submit"/>
            </form>
            
        )
    }
}

export default PlanForm;

// Instead of a PlanForm, create a ToDoForm -> essentially works the same way

// set state of all attributes in a given todo 
// it'll have all the info 

// state = {
//     end_date:
//     location:
//     priority_lvl:
//     start_date:
//     tasks: [
//         {}, {}
//     ]
//     trip: {
//         name:
//         img_url:
//     }
// }

// create a form that collects all this data from the user and set state here to pass it up
// as an object to push into the list of trips array in the TripContainer level
import React from 'react';
import TripShow from './TripShow';
import {Link} from 'react-router-dom'


class TripList extends React.Component {

    state = {
        clicked: false
    }

    tripPage = (event) => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    


    render(){
        
        return(           
            <div>
                <Link to={`/trips/${this.props.eachTrip.id}`}>
                <h2>{this.props.eachTrip.name}</h2> 
                <img src={this.props.eachTrip.img_url} />
                </Link>
                
            </div>  
        )
    }
}




export default TripList;

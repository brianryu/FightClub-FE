import React from 'react';
import {Link} from 'react-router-dom'


class TripList extends React.Component {

    render(){
        
        return(           
            <div className="gallery">
                <Link to={`/trips/${this.props.eachTrip.name}`}>
                <h2>{this.props.eachTrip.name}</h2> 
                <img src={this.props.eachTrip.img_url} alt={this.props.eachTrip.name}/>
                </Link>
            </div>  
        )
    }
}


export default TripList;

import React from 'react';
import {Link} from 'react-router-dom'


class TripList extends React.Component {

    render(){
        
        return(           
            <div className="tripList">
                <h2>
                {this.props.eachTrip.name} 
                    <br/>
                    <button onClick={() => {this.props.handleRemoveTrip(this.props.eachTrip)}}>🗑Remove From List</button> 
                </h2> 
                <Link to={`/trips/${this.props.eachTrip.name}`}>
                <img src={this.props.eachTrip.img_url} alt={this.props.eachTrip.name}/>
                </Link>
            </div>  
        )
    }
}


export default TripList;

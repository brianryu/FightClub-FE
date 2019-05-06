import React from 'react';
import TripShow from './TripShow'

class TripList extends React.Component {

   

    tripPage = (event) => {
        console.log(this.props.trip)
        // return <TripShow trip={this.props.trip}/>
    }


    render(){

       

        return(           
            <div>
                <h2 onClick={this.tripPage}>{this.props.trip}</h2>
                <TripShow trip={this.props.trip} handleSubmit={this.props.handleSubmit}/>
            </div>  
        )
    }
}




export default TripList;

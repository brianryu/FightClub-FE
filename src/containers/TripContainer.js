import React from 'react';

import Flights from '../components/Flights'
import TripList from './TripList'

class TripContainer extends React.Component{


render() {
    return (
        <div>
            <Flights />
            <TripList />
        </div>
        
    )
}






}

export default TripContainer
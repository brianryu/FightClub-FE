import React from 'react';


class Itinerary extends React.Component {

    //Itinerary takes in dates and location from App
    
   state = {
       toDoList: []
   }

    render() {
        return(
            <div>
                <h1>Trip Itinerary</h1>
                <ul>

                </ul>
            </div>
        )
    }
}

export default Itinerary;

//layout of itinerary includes list of things to do -> almost as a form where the input will be the key-value pairs

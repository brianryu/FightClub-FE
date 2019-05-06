import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
    render(){

        this.state = {
            activeMarker: {},
            selectedPlace: {},
            destinationName: this.props.destinationName
        }

        const mapstyle = {
            width: '50vw',
            height: '50vh'
        }

        let onMarkerClick = (props, marker) => {
            this.setState({
                selectedPlace: props,
                activeMarker: marker
            })
        }
            

        return(

            <div style = {mapstyle}>
                    <Map google={this.props.google}
                        zoom={10}
                        style={mapstyle}
                        initialCenter={{
                            lat: 40.7128, //need to pass these values down as a prop so that they can change
                            lng: -74.0060
                        }}
                    >

                    {/* <GoogleMap>
                    {props.markers.map(marker => (
                        <Marker
                        position={{ lat: marker.latitude, lng: marker.longitude }}
                        key={marker.id}
                        />
                    ))}
                    </GoogleMap> */}




                    <Marker 
                        onClick={this.onMarkerClick}
                        name={'hello'}
                    />
                    <div>
                        <h4>Your Trip to {this.state.selectedPlace.name}</h4>
                    </div>
                    </Map>
                </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyD59JszwTdSvLl6RHGa2qIK5hvU4mYa8d8')
})(MapContainer)
import React, {Component} from 'react';
import {View,StyleSheet, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps'; 
import axios from 'axios';
import {API_ENDPOINT, API_KEY} from '../../constants';
import Places from '../Places'


export default class Map extends Component{
    state = {
        region:{
            latitude: 41.2895,
            longitude: 36.33501,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421,
        },
        places: [],
        fetching: false,
    };
     
    async componentDidMount() {
        try {
            const {coords: {latitude, longitude}} = await this.getCurrentPosition();
            this.setState({
                region: {
                    ...this.state.region,
                    latitude,
                    longitude
                },
                fetching: true
            });

            const {data: {results}} = await axios.get(`${API_ENDPOINT}/nearbysearch/location=${latitude},${longitude}&radius=2000&restaurant&key=${API_KEY}`)
            this.setState({
                places: results,
                fetching: false
            });

        } catch (error) {
            this.setState({
                places: results,
                fetching: false
            });
            alert(error)
        }
    }
   
    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => resolve(position),
                () => reject(),
                {
                    timeout: 5000,
                    maximumAge: 1000,
                    enableHighAccuracy: false
                }
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
            <MapView
              ref={ref => this.map = ref}
              style={styles.map}
              region={this.state.region}
              showsUserLocation={true}
            >
              {
                  this.state.places.map(place => {
                      const {geometry: {location: {lat, lng}}} = place;
                       console.log(place)
                    return(
                        <Marker
                        key={place.id}
                        coordinate={{
                            latitude: lat,
                            longitude: lng,
                        }}
                        title={place.name}
                        />
                    )
                  })
              }
            </MapView>
          <View style={styles.placesContainer}>
              {
                  this.state.fetching ? <Text style={styles.loading}>Loading nearby places...</Text> : <Places map={this.map} places={this.state.places} />
              }
          <Places places={this.state.places} />
          </View>
          </View>
       
        )
    }
}


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    placesContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        padding: 10,
        backgroundColor: '#f1f1f1',
        fontSize: 13,
        color: '#333'
    }
   });
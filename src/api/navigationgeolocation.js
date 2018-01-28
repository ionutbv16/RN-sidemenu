import React, {Component} from 'react'
import {StackNavigator, addNavigationHelpers} from 'react-navigation'

/*
function navigationgeolocation2 ()  {
    navigator.geolocation.getCurrentPosition(
        (position) => {
           
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
          
          var NY = {
            lat:position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log('lat lng ', position.coords);
          Geocoder.geocodePosition(NY).then(res => {
            console.log('geocodePosition', res);
            
            this.setState({
                city: res[0].locality,
                postcode:res[0].postalCode,
                country:res[0].countryCode
            });
            
        })
        },
        (error) => {}, {timeout: 20000, maximumAge: 1000},
      );


}
*/

const navigationgeolocation = () => {
  console.log('navigationgeolocation');
  return 'navigationgeolocation';
}
export default navigationgeolocation ;

   
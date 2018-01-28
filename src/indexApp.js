import React, {Component} from 'react'
import {Provider, connect} from 'react-redux'
import {AsyncStorage} from 'react-native';
import {StackNavigator, addNavigationHelpers} from 'react-navigation'
import Routes from './config/routes'
import getStore from './store' 
import DeviceInfo from 'react-native-device-info';

//import {navigationgeolocation} from './api/navigationgeolocation'

import buildStyleInterpolator from 'buildStyleInterpolator'
import Geocoder from 'react-native-geocoder';


const Navigation = StackNavigator (Routes,{ 
    headerMode: 'screen' 
  });

const navReducer = (state, action)   => {
    const newState = Navigation.router.getStateForAction (action, state)
    return newState || state
}

class App extends Component {

    state = {
        latitude: null,
        longitude: null,
        city: null,
        postcode: null,
        country: 'UK',
        error: null,
    }

    constructor() {
        super();
        //navigationgeolocation();
    }
 
    componentDidMount() {
        /*
        const storingValue = 'storingValue';
        console.log('storingValue', storingValue );
        AsyncStorage.setItem('completeStore', storingValue).then( () => {
            console.log('AsyncStorage SET completeStore', storingValue );
        });

        /*  AsyncStorage.getItem('completeStore').then(
                (value)=>{
                    console.log('AsyncStorage get item completeStore', value );
                }   
            ).catch((error)=>{
                console.log('AsyncStorage error', error );
              })
              */
             
    }

    componentWillMount() {
        //console.log('componentWillMount ', navigator );
        //console.log("Device Version", DeviceInfo.getSystemVersion());
        //this.navigationgeolocation();
        //await AsyncStorage.setItem('store', 'I like to save it.');
       
       
            
    } 

     navigationgeolocation ()  {
        navigator.geolocation.getCurrentPosition(
            (position) => {
             /*  
              this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
              });
              */

              
              var NY = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
             // console.log('lat lng ', position.coords);
              Geocoder.geocodePosition(NY).then(res => {
               // console.log('geocodePosition', res);
                /*
                this.setState({
                    city: res[0].locality,
                    postcode:res[0].postalCode,
                    country:res[0].countryCode
                });
                */
            })
            },
            (error) => {}, {timeout: 20000, maximumAge: 1000},
          );
    
    
    }

    render () {
        //this.navigationgeolocation();
        console.log('this.props.nav', this.props.nav);
        return (
            <Navigation navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
                
            })} 
            
            />
        )
    }
}

const store = getStore(navReducer)
const AppIndex = connect (state => ({nav: state.nav}))(App)


export default IndexApp = () => {
    return (
        <Provider store={store}>
            <AppIndex />
        </Provider>    

    )

}

import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    Button,
    Dimensions,
    ScrollView ,
    Animated,
    Easing,
    ListView,
    AsyncStorage
} from 'react-native'

import Orientation from 'react-native-orientation'
import {connect} from 'react-redux'
import {fetchSendUserData, getActualUserData, addActualUserData} from '../actions/post_user_data'
import Geocoder from 'react-native-geocoder';

const {width, height} = Dimensions.get('window')

class List extends Component {    

        state = {
          latitude: null,
          longitude: null,
          error: null,
          eventsLoaded: false,
          eventsList: null,
          animatePress: new Animated.Value(1),
          animateItem:  new Animated.Value(0),
          animateItemToRight:  new Animated.Value(0),
          translateX : 'this.state.translateX',
        };

        constructor(props){
            super(props)
        }

    componentDidMount() {
       //Orientation.lockToPortrait();
       this.navigationgeolocation();
        //console.log('width',  width, );
        this.props.fetchSendUserData().then(
            (res) => { 
                this.setState({eventsList: res.data });
            });
    }
    

    navigationgeolocation ()  {
        console.log('navigationgeolocation');
        navigator.geolocation.getCurrentPosition(
            (position) => {
              this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
              });
              
              var NY = {
                lat: position.coords.latitude,
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

    newPushContent(item){
        this.props.navigator.push({
            ident: 'Details',
            passProps: {
                item
            }
        })
    }

    _renderItem(item){
        const {navigate} = this.props.navigation;
        return (
            <TouchableWithoutFeedback onPress={() => navigate('Details',{item:item})}>
                <Image style={{width: 120, height: 180}} source={{uri: item.image}}/>
            </TouchableWithoutFeedback>
        )
    }

    _onPress = () => {
        //console.log('_onPress this.props.', this.props);
        return this.props.fetchSendUserData().then(
            (res) => { 
                this.setState({eventsList: res.data });
                Animated.timing(this.state.animateItem, {
                    toValue:1,
                    duration:1900
                }).start();
            }
          );
 
      }
 
     _onPressSet () {
        console.log('_onPresSet', window); 
        AsyncStorage.setItem('completeStore', 'storingValue').then( () => {
            console.log('AsyncStorage SET completeStore' );
        });
        //setEventName();
    }

      async _onPressGet ()  {
        console.log('_onPresGet'); 
        try {
            AsyncStorage.getItem('completeStore').then( (value) => console.log('value ', value ));
        }
        catch (err) {
            console.log('err AsyncStorage', err);
        }
        console.log('get AsyncStorage');
       
      }

      DisplayDemo (vrr) {
          return ( <TouchableWithoutFeedback>
            <View><Text  style={styles.text}>Hello Display {vrr}</Text></View>
        </TouchableWithoutFeedback>)
      }

      renderEvents (object_array) {
        if (object_array)   {
            const arrObj = [];
            object_array.map((item) => {
            return renderEvent (item)
            }) 
        }
      }

      renderEvent (object) {
        return (
            <TouchableWithoutFeedback>
                <Text>{object.face_event_name}</Text>
            </TouchableWithoutFeedback>
        )
      }

    
    flatListEvent(item){
        const {navigate} = this.props.navigation;
        //const image_path = 'http://www.eventslistuk.com/getinfoimg_large.php?img=scontent.xx.fbcdn.net%2Fv%2Ft31.0-8%2Fs720x720%2F19942885_10155271735380027_1510690143747337721_o.jpg%3Foh%3D7ee0974f3421b11ee078a4965b3d4106%26oe%3D5A3418BB';
        const image_path = item.face_picture;
        //const image_path = "https://media.timeout.com/images/102523515/image.jpg";
        return (
            <TouchableWithoutFeedback onPress={() => navigate('Details',{item:item})}>
                
                <View style={styles.flatListItem}> 
                  <Image source={{uri: image_path}} style={styles.image}></Image>
                   <View style={styles.flatListItemTransparent}>
                     <Text style={styles.text}>{item.face_event_name} at {item.face_location}</Text>
                     </View>
                   
                 </View>
                 
            </TouchableWithoutFeedback>
        )
    }



    render(){
              console.log ("list.js this.props",this); 

              const {getTwoRows} = this.props

              // GET TODAY DATE
              var getDate = new Date();
              const formatDate = (getDate.getDate() + 1) + '.' + getDate.getMonth() + '.' + getDate.getFullYear();

        return (
            <View style={{flex: 1}}>
                <ScrollView >
                <View>
                    <Text style={styles.text}>Latitude: {this.props.lat} Longitude: {this.state.longitude} </Text>
                    <Text style={styles.text}>City: {this.state.city} PostCode: {this.state.postcode} Country: {this.state.country}</Text>
                    
                    {this.state.eventsLoaded ? this.DisplayDemo() :  <Text style={styles.text}>Today {formatDate} Events </Text>   }
                  
                    { this.state.eventsList ?
                     <Animated.View style={{
                     margin:0
                        }}>
                    <FlatList
                        vertical
                        SeparatorComponent={() => <View style={{width: 5}} />}
                        renderItem={({item}) =>this.flatListEvent(item)} 
                        data={this.state.eventsList}
                    /> 
                      </Animated.View>
                    : <Text>loading List VIew Events </Text>
                    }
 
                </View>
                 
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 6,
        fontSize: 16,
        textShadowColor:'#000',
        textShadowOffset:{width: 2, height: 1},
        textShadowRadius:8,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
        
      },
    animationButtonTop: {
        color: 'white',
        paddingHorizontal: 10,
        paddingVertical: 6,
        fontSize: 14,
        textShadowColor:'#000',
        textShadowOffset:{width: 2, height: 1},
        textShadowRadius:8,
    },
    image: {
        height: 160
    },
    flatListItemTransparent: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        backgroundColor: 'rgba(0,0,0,0.5)',
         
        position: 'absolute'
    },
    flatListItem: {
        backgroundColor:"#191919",
        borderColor: '#000',
        borderBottomWidth: 0,
        paddingHorizontal: 4,
        paddingVertical: 4
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
      },
    buttonContainer: {
        backgroundColor: '#2E9298',
        borderRadius: 10,
        padding: 10,
        
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
      },
      button: {
        color: '#000000'
      }
})


function mapStateToProps(state, props) {
    return {data: state.data}
  }

  export default connect(mapStateToProps, { fetchSendUserData, getActualUserData, addActualUserData })(List);
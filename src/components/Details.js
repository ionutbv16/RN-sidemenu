import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    Share
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

import TextGradient from 'react-native-linear-gradient'
import Orientation from 'react-native-orientation'

const {width, height} = Dimensions.get('window')

class Details extends Component {

     constructor(props){
        super(props)
        this.state = {
            measuresTitle: 0,
            measuresSeason: 0,
            currentSeason: 1
        }
    }
    
    static navigationOptions = {
        title: 'Back',
        headerTintColor: "gray",
        headerStyle: {
            backgroundColor:"black"
          }
    }

    componentWillMount() {
        //Orientation.lockToPortrait()
    }
     
    openVideo(){
        const {name} = this.props.item

        Orientation.lockToLandscape();
        this.props.navigator.push({
            ident: 'Video',
            passProps: {
                title: name
            }
        })
    }

    onShare(){
        Share.share({
            title: 'Designated Survivor',
            url: 'www.youtube.com',
            message: 'Awesome Tv Show'
        }, {
            //android
            dialogTitle: 'Share this awesome content',
            //ios
            excludeActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }
    
    render(){
         console.log ("details this.props",this.props); 
        const {params} = this.props.navigation.state
         
        const thumbnail = params.item.face_picture
        //const thumbnail = "https://media.timeout.com/images/102523515/image.jpg";
        const name = params.item.face_event_name
        const contenttext = params.item.face_description
       
        return (
            <ScrollView style={styles.container}>
                <ImageBackground   
                    style={styles.thumbnail}
                    source={{uri: thumbnail}}
                >
                <Text style={[styles.text, styles.titleShow]}>{name}</Text>
                </ImageBackground>
                <View>
                    <Text style={[styles.text]}>{contenttext}</Text> 
                </View>                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: 'transparent'
    },
     
    titleShow: {
        fontSize: 35,
        paddingLeft: 10,
        marginBottom: 10,
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    thumbnail: {
        width: width,
        height: 300
    },
    buttonPlay: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    iconPlay: {
        opacity: 0.7,
        backgroundColor: 'transparent'
    },
    descriptionContainer: {
        paddingHorizontal: 20
    },
    subtitle: {
        flexDirection: 'row'
    },
    subTitleText: {
        marginRight: 20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16,
         
    },
    shareListIcons: {
       flexDirection: 'row',
       marginVertical: 30 
    },
    listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
    myShareIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        marginVertical: 10
    },
    light: {
        fontWeight: '200'
    }
})

export default Details
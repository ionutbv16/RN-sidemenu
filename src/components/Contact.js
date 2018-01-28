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
    
    // style back button
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
     
    
    render(){
        // console.log ("details this.props",this.props); 
        const {params} = this.props.navigation.state
         
        //const thumbnail = params.item.face_picture
        const thumbnail = "https://s-media-cache-ak0.pinimg.com/originals/91/2c/9b/912c9b57835dc4238b0f791afc6b862b.jpg";
        const name = "Contact us"
        const contenttext = "Alphabet Inc."
       
        return (
            <ScrollView style={styles.container}>
                <ImageBackground   
                    style={styles.thumbnail}
                    source={{uri: thumbnail}}
                >    
                <Text style={[styles.text, styles.titleContact]}>{name}</Text>
                </ImageBackground>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.titleShow]}>Google London UK</Text> 
                    <Text style={[styles.text]}>Googleplex, Mountain View, California, U.S.</Text>
                    <Text style={[styles.text]}>London: Address: 1-13 St Giles High St, London WC2H 8AG</Text>
                    <Text style={[styles.text]}>Phone: 020 7031 3000</Text>
                    <Text style={[styles.text]}>Address: Belgrave House, 76 Buckingham Palace Rd, Belgravia, London SW1W 9TQ</Text>
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
        paddingLeft: 0,
        marginBottom: 10,
        color: 'white'
    },
    titleContact: {
        fontSize: 80,
        justifyContent: 'center',
        opacity: 0.3,
        marginLeft: 30,
        alignItems: 'center',
        color: 'black'
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
        paddingHorizontal: 20,
        paddingVertical: 20
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
        marginBottom: 10,
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
import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    AsyncStorage
} from 'react-native'


import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

const Header = props => {
        const {navigate} = props.navigation;
        return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggle()}>
                <Icon 
                    name={props.icon}
                    color="#cccccc"
                    size={30}
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() =>  navigate('Contact')}>
            <Icon 
                name="envelope"
                color="#cccccc"
                size={30}
            />
            </TouchableWithoutFeedback>
            
        </View>)

        }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    logo: {
        width: 120,
        height: 40
    }
})

export default Header
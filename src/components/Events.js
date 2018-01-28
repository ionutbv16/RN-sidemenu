import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    Share,
    FlatList
} from 'react-native'

import {connect} from 'react-redux'

import {fetchData} from '../actions'

class Events extends Component {

componentWillMount() {
    this.props.fetchData('Family');
}

shouldComponentUpdate(nextProps, nextState) {
     
    return true;
}

renderItem (item) {
    // VERIFY IF ITEM EXISTS
     if (JSON.stringify(item) !== 'null') {
            var localItem = JSON.stringify(item.image)  ; 
            const {navigate} = this.props.navigation;
            if (localItem !== 'null') {
                return (
                        <TouchableWithoutFeedback onPress={()=> navigate('Details', {item:item})}>
                            <Image style={styles.image} source={{uri: item.image}} />
                        </TouchableWithoutFeedback>
                    )
            }                     
     }
}

renderList () {
    const {data} = this.props.data
console.log('renderList',data)
    return (
        <FlatList
            data={data}
            
            numColumns={2}
            renderItem = { ({item}) => this.renderItem(item)}
        />
    )
}
     
render () {
   
   const {isFetching} = this.props.data
return (
    <View style={styles.view}>
        <Text style={styles.textColor}>Events { isFetching}</Text> 
        {isFetching ? <Text>Events Loading </Text> : this.renderList() }
    </View>    

)
}
}    

const styles = StyleSheet.create({
    image: {
        width:160,
        height:200,
        borderRadius: 14,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        margin: 4
    },
    view: {
        backgroundColor: 'black'
    },
    textColor: {
        color: 'white'
    },
    textColorGrey: {
        color: 'grey'
    }
     
})

//mapStateto props
const mapStateToProps = state => {
    return {data: state.data}

}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (Events) => dispatch(fetchData(Events))

    }

}

// map dispatch to props
export default connect(mapStateToProps, mapDispatchToProps) (Events)
import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    StatusBar
} from 'react-native'

import {connect} from 'react-redux'

//import {fetchSendUserData, getActualUserData, addActualUserData} from './actions/post_user_data'

import Header from './components/Header'
import List from './components/List'
import Menu from './components/Menu'

import SideMenu from 'react-native-side-menu'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            iconMenu:'bars'
        }
        this.getTwoRows = this.getTwoRows.bind(this)
    }

    static navigationOptions = {
        header: null,
        title: 'Home',
         
    }
 
    componentDidMount() {
        console.log ("menuItems componentDidMount",this.propss); 
        /*
        this.props.fetchSendUserData().then(
            (res) => { 
                //console.log('Response api', res.data);
                this.setState({eventsList: res.data });
                //this._onPress();
                this.props.getActualUserData();
                this.props.addActualUserData();
                this.props.getActualUserData();
            });
            */
    }
     

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
       // console.log('toggle');
    }

    updateMenu(isOpen){
        this.setState({isOpen});
       
        //this.setState({iconMenu: 'times'});
       // console.log('updateMenu');
    }
    
    showMenu(){
        this.setState({ 
            iconMenu:'times'
        });
        
    }
    closeMenu(){
        this.setState({  
            iconMenu:'bars'
        })
    }

getTwoRows() {
    const {shows} = this.props
    const array = shows.slice(0)
    const val = Math.floor(array.length / 2)
    const newArray = array.splice(0, val)
    return [
        array,
        newArray
    ]

}
 
    render(){
       
       const menuItems = [
        {
            title: 'London',     
        },
        {
            title: 'Buckinghamshire',
        },
        {
            title: 'Cambridgeshire',
        },
        {
            title: 'Cheshire',
        },
        {
            title: 'Cornwall',     
        },
        {
            title: 'Cumberland',
        },
        {
            title: 'Durham',
        },
        {
            title: 'Derbyshire',
        },
        {
            title: 'Devon',     
        },
        {
            title: 'Dorset',
        },
        {
            title: 'Essex',
        },
        {
            title: 'Gloucestershire',
        },
        {
            title: 'Berkshire',     
        },
        {
            title: 'Hertfordshire',
        },
        {
            title: 'Kent',
        },
        {
            title: 'Cheshire',
        },
        ];

        

       const menu = (<Menu navigation={this.props.navigation} isOpen = {this.state.isOpen}
        active = {this.state.isOpen} 
        toggle={this.toggle.bind(this)} 
        menuItems={menuItems}
         />);

         const Status_Bar = (<StatusBar
            backgroundColor="#000000"
            barStyle="light-content"
            hidden={true} ></StatusBar>);

        return (
            <View style={{flex: 1}}>
                {Status_Bar}
                <SideMenu
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    menu={menu}
                    style={{flex: 1}}
                >
                      <View style={[{flex: 1}, styles.container]}>
                      {!this.state.isOpen ? <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} icon="bars" /> : <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} icon="times" /> }
                        
                        <List 
                        getTwoRows = {this.getTwoRows}
                        navigation={this.props.navigation}>
                        </List>
                    </View>
                </SideMenu>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
})

//export default App
export default connect(state => ({shows: state.shows }) )(App)
import React, {Component} from 'react'
import {
    Animated,
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'
const {width, height} = Dimensions.get('window')

class Menu extends Component {

    state = {
            valueAnimation : new  Animated.Value(0),
            valueAnimationDelay : new  Animated.Value(0),
            animatedStagArr: [],
            stagArr: [],
            menuItems: this.props.menuItems,
            activityLeftPos : new Animated.Value(0),
            animationDuration: 400,
            stagArr: [],
            animatedStagArr: [],
            menuItems: this.props.menuItems,
            activeMenu: 0
    }

    componentDidMount() {
            //console.log('componentDidMount Menu.js ', this.props);
            let stagArrNew = []
            for (let i = 0; i < this.state.menuItems.length; i++) stagArrNew.push(i)
            this.setState({ stagArr: stagArrNew })
            let animatedStagArrNew = []
            stagArrNew.forEach((value) => {
            animatedStagArrNew[value] = new Animated.Value(-150)
            })
            this.setState({ animatedStagArr: animatedStagArrNew })
    }    

    componentWillUpdate (nextProps, nextState) {
            // console.log('componentWillUpdate ',nextProps, nextState);
            if (nextProps.isOpen == true) {
                        //console.log('componentWillUpdate isOpen',nextProps, nextState);
                        Animated.timing(this.state.valueAnimation, {
                            toValue:1,
                            duration:1900
                        }).start();
                        Animated.timing(this.state.valueAnimationDelay, {
                            toValue:1,
                            duration:1900,
                            delay: 500
                        }).start();
                        this._animateStuffs(true);
            }
            if (nextProps.isOpen == false) {
                        //console.log('componentWillUpdate isOpen',nextProps, nextState);
                        Animated.timing(this.state.valueAnimation, {
                            toValue:0,
                            duration:1900
                        }).start();
                        Animated.timing(this.state.valueAnimationDelay, {
                            toValue:0,
                            duration:1900,
                            delay: 250
                        }).start();
                        this._animateStuffs(false);
            }
    }

    _closeItemsThenMenu() {
        this._animateStuffs(false);
        //this.props.toggle();
        setTimeout(function(){ this.props.toggle(); }.bind(this), 800);
    }

     // animate stuffs with hard coded values for fine tuning
    _animateStuffs(openclose) {
            /*  
            const activityLeftPos = this.props.active ? 250 : 0
            const menuTranslateX = this.props.active? 0 : -150
            */
            var activityLeftPos;
            var menuTranslateX;
            if (openclose == true) {
                activityLeftPos = -100;
                menuTranslateX = 0;
            }
            else {
                activityLeftPos = 0;
                menuTranslateX = -150;
            }

            Animated.parallel([
            Animated.timing(this.state.activityLeftPos, { toValue: activityLeftPos, duration: this.state.animationDuration }),
            Animated.stagger(150, this.state.stagArr.map((item) => {
                
                return Animated.timing(
                    this.state.animatedStagArr[item],
                    {
                    toValue: menuTranslateX,
                    duration: this.state.animationDuration,
                    delay: 100
                    }
                )
                
            }))
            ])
            .start()
    }

    render(){
            const {navigate} = this.props.navigation
            //console.log('componentDidMount Menu.js ', this.props);

            const staggeredAnimatedMenus = this.state.stagArr.map((index) => {
                return (
                <TouchableHighlight key={index}  onPress={()=> navigate('Contact')}  >
                    <Animated.View
                    style={{ transform: [{ translateX: this.state.animatedStagArr[index] }, 
                    {scale:  this.state.animatedStagArr[index].interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1],
            }) }
            ], opacity: 1 }}>
                    <View style={styles.menuItemContainer}>
                    <Text style={styles.largeFirstLetter}>&bull; </Text>
                        <Text style={[styles.menuItemEvents]}>
                        {this.state.menuItems[index].title}
                        </Text>
                    </View>
                    </Animated.View>
                </TouchableHighlight>
                )
            })

            return (
                <View style={styles.menu}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatarImage}>
                            <Text style = {styles.text}>James A.</Text>
                        </View>
                        <Icon 
                            name="exchange"
                            color = "white"
                            size = {25}
                        />
                    </View>
                    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={true}>
                    <Animated.View style={styles.menuItemsContainer}>
                        {staggeredAnimatedMenus}
                    </Animated.View>
                        <View style={styles.textWithIcon}>
                            <View style={styles.withIcon}>
                                <Icon 
                                    style={styles.iconWithText}
                                    name="download"
                                    color="white"
                                    size={28}
                                />
                                <Text style={styles.text}>My Favorites</Text>
                            </View>
                            <Icon 
                                style={styles.rightIcon}
                                name="angle-right"
                                color="white"
                                size={25}
                            />
                        </View>
                        <View style={styles.textWithIcon}>
                            <View style={styles.withIcon}>
                                <IonIcons 
                                    style={styles.iconWithText}
                                    name="md-woman"
                                    color="white"
                                    size={28}
                                />
                                <Text style={styles.text}>My Profile</Text>
                            </View>
                            <Icon 
                                style={styles.rightIcon}
                                name="angle-right"
                                color="white"
                                size={25}
                            />
                        </View>
                        
                    </ScrollView>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor:"#191919"
    },
    largeFirstLetter: {
        color: '#ffffff',
        fontSize: 15
    },
    menuItemsContainer: {
        paddingTop: 30
      },
      menuItemContainer: {
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        borderBottomWidth: 3,
       
      },
      menuItem: {
        fontWeight: 'bold',
        paddingLeft: 12,
        paddingTop: 15,
        paddingBottom: 15,
        color: '#b3b3b3'
      },
      menuItemEvents: {
        fontWeight: 'normal',
        paddingLeft: 0,
        paddingTop: 15,
        paddingBottom: 15,
        color: '#b3b3b3',
        
      },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 59,
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20
    },
    avatarImage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#b3b3b3',
        fontSize: 15
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth: 3
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scrollContainer: {
        width: width / 2 + 59
    },
    rightIcon: {
        paddingRight: 20
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20
    },
    items: {
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5
    },
    itemSelected:{
        borderLeftWidth: 5,
        borderColor: 'red'
    },
    noSelectedItems: {
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5
    }
})

export default Menu
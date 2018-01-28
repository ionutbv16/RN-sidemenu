import App from '../indexComponents'
import Details from '../components/Details'
import Contact from '../components/Contact'

import {StackNavigator,addNavigationHelpers}  from 'react-navigation';

const Routes = {
    Home: {screen: App},
    Details: {screen: Details},
    Contact: {screen: Contact}
}

export default Routes

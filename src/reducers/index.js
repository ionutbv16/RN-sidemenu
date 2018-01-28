import {combineReducers} from 'redux'
import dataReducer from './dataReducer.js'
import dataPostUserData from './dataPostUserData'
import coordinatesReducer from './coordinatesReducer'

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        data: dataReducer,
        dataPostUserData: dataPostUserData,
        coordinatesReducer: coordinatesReducer,
    })
}
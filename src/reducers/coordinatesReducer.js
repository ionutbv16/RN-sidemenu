import {FETCHING_COORDINATES_DATA, FETCHING_COORDINATES_DATA_SUCCESS, FETCHING_COORDINATES_DATA_ERROR } from '../constants';

const initialState = {
    data: [],
    isFetching: false,
    error: false
}

export default dataCoordinatesReducer  = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_COORDINATES_DATA :
            return {
                ...state,
                data:[],
                isFetching: true
            }
            case FETCHING_COORDINATES_DATA_SUCCESS :
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
           case FETCHING_COORDINATES_DATA_ERROR :
            return {
                ...state,
                error: true,
                isFetching: false
            }    
            default:
            return state
    }

}
import {FETCHING_POST_USER_DATA, FETCHING_POST_USER_DATA_SUCCESS, FETCHING_POST_USER_DATA_ERROR, ADD_POST_USER_DATA_ERROR } from '../constants';

const initialState = {
    data: [],
    isFetching: false,
    error: false
}

export default dataPostUserData = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POST_USER_DATA :
            console.log('inside reducer read from reducer FETCHING_POST_USER_DATA ',  state);
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_POST_USER_DATA_SUCCESS :
            console.log('inside reducer FETCHING_POST_USER_DATA_SUCCESS ',  action.data);
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
        case FETCHING_POST_USER_DATA_ERROR :
            return {
                ...state,
                error: true,
                isFetching: false
            }   
        case ADD_POST_USER_DATA_ERROR :
            console.log('inside reducer ADD_POST_USER_DATA_ERROR ',  state);
            return {data:[
                ...state.data,
               action.data]
            }       
              
        default:
        return state
    }

}
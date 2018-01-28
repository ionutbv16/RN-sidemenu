
import {FETCHING_COORDINATES_DATA, FETCHING_COORDINATES_DATA_SUCCESS, FETCHING_COORDINATES_DATA_ERROR } from '../constants';
//import getDataApi from '../api/api'

export const getDataCoordinates = () => {
    return {
        type: FETCHING_COORDINATES_DATA
    }
}

export const getDataCoordinatesSuccess = (data) => {
    console.log('getDataSuccess', data)
    return {
        type: FETCHING_COORDINATES_DATA_SUCCESS,
        data
    }
}

export const getDataCoordinatesFailure = (data) => {
    return {
        type: FETCHING_COORDINATES_DATA_ERROR,
        err
    }
}

 
export function fetchDataCoordinates() {
  return dispatch => {
    dispatch(getDataCoordinatesSuccess());
   }
}

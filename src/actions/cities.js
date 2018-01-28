import {FETCHING_CITIES_DATA, FETCHING_CITIES_DATA_SUCCESS, FETCHING_CITIES_DATA_ERROR, ADD_POST_USER_DATA_ERROR } from '../constants';

export const sendCitiesData = () => {
    return {
        type: FETCHING_CITIES_DATA

    }
}



function handleResponse(response) {
    if (response.ok) {
      //  console.log('handleResponse OK', response)
      return response.json();
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      console.log('handleResponse error', error)
      throw error;
    }
  }

/*
export const sendCitiesDataSuccess = (data) => {
    console.log('sendCitiesDataSuccess', data)
    return {
        type: FETCHING_CITIES_DATA_SUCCESS,
        data
    }
}
*/

export function sendCitiesDataSuccess(data) {
    console.log('sendCitiesDataSuccess f', data)
    return {
        type: FETCHING_CITIES_DATA_SUCCESS,
        data
    }
  }


export const sendCitiesDataFailure = (data) => {
    console.log('sendCitiesDataFailure', data)
    return {
        type: FETCHING_CITIES_DATA_ERROR,
        err
    }
}
 
export function fetchSendCitiesData(data) {
   // console.log('fetchSendCitiesData');
  return dispatch => {
    return fetch('http://www.eventslistuk.com/apitest/v1/cities/cities.php', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }})
      .then(handleResponse)
      .then(data => dispatch(sendCitiesDataSuccess(data)));
  }
}

export function getActualCitiesData() {
   console.log('getActualCitiesData');
    return dispatch => {
        return  dispatch(sendCitiesData());
      }
 }

 export function addActualCitiesData() {
    console.log('addActualCitiesData');
     return dispatch => {
         var tempData = { newdata : 'tmp1' };
         return  dispatch(addCitiesData(tempData));
       }
  }

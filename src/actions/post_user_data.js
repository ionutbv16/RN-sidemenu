import {FETCHING_POST_USER_DATA, FETCHING_POST_USER_DATA_SUCCESS, FETCHING_POST_USER_DATA_ERROR, ADD_POST_USER_DATA_ERROR } from '../constants';

export const sendUserData = () => {
    return {
        type: FETCHING_POST_USER_DATA

    }
}

export const addUserData = (data) => {
    return {
        type: ADD_POST_USER_DATA_ERROR,
        data
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
export const sendUserDataSuccess = (data) => {
    console.log('sendUserDataSuccess', data)
    return {
        type: FETCHING_POST_USER_DATA_SUCCESS,
        data
    }
}
*/

export function sendUserDataSuccess(data) {
    console.log('sendUserDataSuccess f', data)
    return {
        type: FETCHING_POST_USER_DATA_SUCCESS,
        data
    }
  }


export const sendUserDataFailure = (data) => {
    console.log('sendUserDataFailure', data)
    return {
        type: FETCHING_POST_USER_DATA_ERROR,
        err
    }
}

//http://essmedia.ro/reactnativeapi/api.php   http://www.eventslistuk.com/apitest/v1/post_user_data/post_user_data.php
 
export function fetchSendUserData(data) {
   // console.log('fetchSendUserData');
  return dispatch => {
    return fetch('http://essmedia.ro/reactnativeapi/api.php', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }})
      .then(handleResponse)
      .then(data => dispatch(sendUserDataSuccess(data)));
  }
}

export function getActualUserData() {
   console.log('getActualUserData');
    return dispatch => {
        return  dispatch(sendUserData());
      }
 }

 export function addActualUserData() {
    console.log('addActualUserData');
     return dispatch => {
         var tempData = { newdata : 'tmp1' };
         return  dispatch(addUserData(tempData));
       }
  }

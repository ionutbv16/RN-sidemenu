import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR } from '../constants';
//import getDataApi from '../api/api'

export const getData = () => {
    return {
        type: FETCHING_DATA

    }
}

export const getDataSuccess = (data) => {
    console.log('getDataSuccess', data)
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export const getDataFailure = (data) => {
    return {
        type: FETCHING_DATA_ERROR,
        err
    }
}

// ASYNC THUNK
/*
 

http://127.0.0.1:8888/eventsres/www_uk/crawl/dummy_json_response_list.php

http://api.tvmaze.com/search/shows?q=Family'
*/
 
export function fetchData() {
  return dispatch => {
    fetch('http://127.0.0.1:8888/eventsres/www_uk/crawl/dummy_json_response_list.php')
      .then(res => res.json())
      .then(data => dispatch(getDataSuccess(data)));
  }
}

/*
import data from '../data.json';

function getTwoLists(json) {
    var array = json.slice(0)
    var val = Math.floor(array.length / 2)
    var newArray = array.splice(0,val)
    return [array, newArray]
}

export function getAll() {
    return data
}

export const getTwoItems = getTwoLists(data)
*/

export default (genre) => {
    
    // return fetch(`http://api.tvmaze.com/search/shows?q=${genre}`).then(response => Promise.all([response,response.json])  ) 

    return fetch(`http://api.tvmaze.com/search/shows?q=Family`).then(response => Promise.all([response,response.json])  ) 
}
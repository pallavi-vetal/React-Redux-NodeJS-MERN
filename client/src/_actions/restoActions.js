import {SHOW_RESTO, SEARCH_RESTO} from '../_constants/restoConstants';
import axios from "axios";

export const setRestaurants = restaurants =>{
    return {
        type:SHOW_RESTO,
        payload:restaurants
    };
}


export const showRestaurnats = () => dispatch => {
   // console.log("showrestaurants");
    return axios
      .get("http://localhost:5001/api/restaurants/list")
      .then(res => {
        return dispatch(setRestaurants(res.data));
      })
      .catch(err =>
        console.log("ERror",err)
      );
  };
 
  export const searchRestaurant = (userData) => dispatch => {
    axios
      .get("http://localhost:5001/api/restaurants/search/"+userData)
      .then(res => {
        return dispatch(searchResto(res.data));
      })
      .catch(err =>
        console.log("ERror",err)
      );
  };
 
  export const searchResto = restaurants =>{
    return {
        type:SEARCH_RESTO,
        payload:restaurants
    };
}
export const sortRestaurant = (order) => dispatch => {
  axios
    .get("http://localhost:5001/api/restaurants/sort/"+order)
    .then(res => {
      return dispatch(sortByPrice(res.data));
    })
    .catch(err =>
      console.log("ERror",err)
    );
};

export const sortByPrice = restaurants =>{
  return {
      type:SEARCH_RESTO,
      payload:restaurants
  };
}

   
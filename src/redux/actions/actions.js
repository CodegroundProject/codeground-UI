import * as Actiontypes from "./actionsTypes";
import * as Endpoints from "../endpoints";
import axios from "axios";



// // WEBSOCKET STUFF
// export const testWebSocket=(arg)=>{
//   return {
//     type: Actiontypes.WEBSOCKET_TEST,
//     payload : arg
//   }
// }
// GET ALL THE CARS FOR CARS VIEW
// export const observeAllCarsData=(carsArr)=>{
//   return{
//     type : Actiontypes.WEBSOCKET_FETCH_ALL_CARS,
//     payload : carsArr
//   }
// }
//
// // OBSERVE CAR DATA CHANGE
// export const observeCarData=(carData)=>{
//   return{
//     type : Actiontypes.WEBSOCKET_OBSERVE_CAR_DATA,
//     payload : carData
//   }
// }


// ALOOG

export const getCurrentChallengeLoading = () => {
  return {
    type: Actiontypes.GET_THE_CHALLENGE_LOADING,
  };
};

export const getCurrentChallengeError = (err, dispatch) => {

  return {
    type: Actiontypes.GET_THE_CHALLENGE_ERROR,
    payload: err,
  };
};

export const getCurrentChallengeSuccess = (content) => {
  return {
    type: Actiontypes.GET_THE_CHALLENGE_SUCCESS,
    payload: content,
  };
};

export const fetchgetCurrentChallenge= (id) => (dispatch) => {

  dispatch(getCurrentChallengeLoading());
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  return new Promise((resolve, reject) => {
    axios
        .get("http://localhost:3000/api/challenges/" + id,  options)
        .then((res) => {
          console.log("RESPONSE SUCCESS =", res);
          dispatch(getCurrentChallengeSuccess(res.data.challenge, dispatch));
          resolve("success");
        })
        .catch((err) => {
          if (err?.response?.data) {
            console.log("RESPONSE=", err.response);
            dispatch(getCurrentChallengeError(err.response.data.msg, dispatch));
            reject(err.response.data);
          } else {
            console.log(err.message);
            dispatch(getCurrentChallengeError(err), dispatch);
            reject(err.message);
          }
        });
  });
};


// {challenge_id , user_id , code , language , strategy="OPTIMIZED" , secondsLeft}
export const fetchSubmitCode = (submitBody) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("gacela-token")}`,
  };
  const options = {
    headers: { ...headers, "Content-Type": "application/json" },
  };
  // let formattedCouponToPost={...couponToPost , }
  console.log("To Post  =", submitBody);
  return new Promise((resolve, reject) => {
    axios
        .post(Endpoints.ENDPOINT_SUBMIT, submitBody)
        .then((res) => {
          // dispatch(addPostSuccess(res.data));o
          console.log("RESOLVE =", res);
          resolve();
        })
        .catch((err) => {
          console.log("ERROR OBJECT = ", err);
          reject(err.response.data.message);
        });
  });
};


export const fetchUpdateTimer = (data) => {
  return {
    type: Actiontypes.SOCKET_UPDATE_TIMER,
    payload : data
  };
};


export const fetchUpdateLeaderboard = (data) => {
  
  return {
    type: Actiontypes.SOCKET_UPDATE_LEADERBOARD,
    payload : data
  };
};

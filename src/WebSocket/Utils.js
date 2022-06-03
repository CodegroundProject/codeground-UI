import {
    fetchUpdateLeaderboard,
    fetchUpdateTimer,
    observeAllCarsData,
    observeCarData,
    testWebSocket
} from "../redux/actions/actions";


// OBSERVE CAR DATA
export const observeLeaderboardScoreChange=(socket ,roomId ,  dispatch)=>{
    socket.on("leaderboard" , (data)=>{
        // const payload= JSON.parse(allCarsArr)
        console.log("LEADERBOARD EVENT GOT : "+data);
        dispatch(fetchUpdateLeaderboard(data))
        // dispatch(observeCarData(car));
    })
}

export const observeTimerChange=(socket ,roomId ,  dispatch)=>{
    socket.on("update timer" , (data)=>{
        // const payload= JSON.parse(allCarsArr)
        console.log("TIMER EVENT  GOT : ",data);
        dispatch(fetchUpdateTimer(data));
    })
}

// WebSocket.js

import React, { createContext } from 'react'
import io from 'socket.io-client';
import { WS_BASE } from './config';
import { useDispatch } from 'react-redux';
// import {observeAllCarsData, observeCarData, testWebSocket} from "../redux/actions/actions"
import {
    observeLeaderboardScoreChange,
    observeTimerChange,
    observeUtilAllCars,
    observeUtilCarData,
    observeUtilTest
} from "./Utils";

import { useHistory ,useLocation } from 'react-router-dom';


export const ROOM_ID="room1"
const WebSocketContext = createContext(null)

export { WebSocketContext }


let socket;
export default ({ children }) => {
    let ws;
    // const currentPath=location.pathname
    const dispatch = useDispatch();
    console.log("CURRENT PATH =", window.location.href)
    if(window.location.href.includes("/challenge/")){
        if (!socket) {
            console.log("TRYING TO CONNECT TO THE SOCKET")
            const data = {
                user_id: "userid1",
                room_id: ROOM_ID
            }
            socket = io(WS_BASE);
            // socket = io.connect(WS_BASE);
            console.log("CURRENT SOCKET ==== ", socket);
            socket.emit("join", data);

            observeLeaderboardScoreChange(socket , ROOM_ID , dispatch)
            observeTimerChange(socket , ROOM_ID,dispatch)


            ws = {
                socket: socket,
            }
        }
    }


    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}

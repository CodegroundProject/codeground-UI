import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'

const initalState = {}

const middleware = [thunk , logger]

let  store = createStore(rootReducer, initalState, applyMiddleware(...middleware))
// store = persistStore(store);
export default store;

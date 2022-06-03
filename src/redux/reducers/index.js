import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";

import userModal from "./user.Modal";
import currentChallengeModal from "./currentChallenge.Modal";

let persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

let reducers = combineReducers({
  currentChallenge: currentChallengeModal,
  user: userModal
  // users : usersReducer,
});

export default persistReducer(persistConfig, reducers);

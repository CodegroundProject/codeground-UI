import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";

import postsReducerModal from "./postsReducer.Modal";
import customizationReducer from "./customizationReducer";
import userModal from "./user.Modal";
import locatairesRequestsModal from "./locatairesRequests.Modal";
import snackBarModal from "./snackBarInfo.Modal";
import decideursProfilesModal from "./decideursProfiles.Modal";
import amsProfilesModal from "./amsProfiles.Modal";
import amProfileModal from "./amProfile.Modal";
import carsViewReducerModal from "./carsView.Modal";
import reportsListsModal from "./reportsLists.Modal";
import currentChallengeModal from "./currentChallenge.Modal";

let persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

let reducers= combineReducers({
    currentChallenge : currentChallengeModal,
    user : userModal
    // users : usersReducer,
});

export default persistReducer(persistConfig, reducers);

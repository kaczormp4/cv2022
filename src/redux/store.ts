import { combineReducers, createStore } from "redux";
import userCartReducer from "./userCartReducer";
import searchEngineReducer from "./searchEngineReducer";
import userProfileReducer from "./userProfileReducer";

const rootReducer = combineReducers(
    {
        userCart: userCartReducer,
        searchEngine: searchEngineReducer,
        userProfile: userProfileReducer
    }
);

const store = createStore(rootReducer);

export default store;
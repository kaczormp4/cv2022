import { combineReducers, createStore } from "redux";
import userCartReducer from "./userCartReducer";
import searchEngineReducer from "./searchEngineReducer";
import userProfileReducer from "./userProfileReducer";
import modalReducer from "./modalReducer";
import viewHistoryReducer from "./viewHistoryReducer";

const rootReducer = combineReducers(
    {
        userCart: userCartReducer,
        searchEngine: searchEngineReducer,
        userProfile: userProfileReducer,
        modalReducer: modalReducer,
        viewHistory: viewHistoryReducer
    }
);

const store = createStore(rootReducer);

export default store;
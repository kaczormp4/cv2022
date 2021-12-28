import { combineReducers, createStore } from "redux";
import userCartReducer from "./userCartReducer";

const rootReducer = combineReducers(
    {
        userEvents: userCartReducer,
    }
);

const store = createStore(rootReducer);

export default store;
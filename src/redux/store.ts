import { combineReducers, createStore } from "redux";
import userCartReducer from "./userCartReducer";

const rootReducer = combineReducers(
    {
        userCart: userCartReducer,
    }
);

const store = createStore(rootReducer);

export default store;
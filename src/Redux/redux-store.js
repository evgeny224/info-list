import { combineReducers, createStore } from "redux";
import infoReducer from "./info-reducer";



    let reducers = combineReducers({
        infoPage: infoReducer,
    });

    let store = createStore(reducers);

    export default store;
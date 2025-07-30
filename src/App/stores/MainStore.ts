import { combineReducers, configureStore } from "@reduxjs/toolkit";


const mainReducer = combineReducers({

});

export const MainStore = configureStore({
    reducer: mainReducer,
})
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import type {MainDispatch, MainState} from "./types";
import { mockSlice } from "@/entities/mock";
import { loadingMiddleware } from './middleware'
import {mapSlice} from "@modules/map/model";
import {default as loadingSlice} from "./loading.slice";

const mainReducer = combineReducers({
    mock: mockSlice,
    loading: loadingSlice,
    map: mapSlice,
});

export const MainStore = configureStore({
    reducer: mainReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loadingMiddleware)
})

export const useMainDispatch = useDispatch.withTypes<MainDispatch>()
export const useMainSelector = useSelector.withTypes<MainState>()


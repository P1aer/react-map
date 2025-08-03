import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {VehicleTableStatusFilter} from "@modules/map/lib";
import  type {VehicleResponse} from "@/entities/mock";
import {useDispatch, useSelector} from "react-redux";
import type {VehicleData} from "@/entities/mock/model";

export interface MapSliceState {
    currentVeh: VehicleResponse['id'] | null
    filter: VehicleTableStatusFilter
    centerCoords: VehicleData['coords'] | null
    isCardOpen: boolean
}
const initialState: MapSliceState = {
    currentVeh: null,
    isCardOpen: false,
    filter: '',
    centerCoords: null
}

const mapSlice = createSlice({
    initialState,
    name: 'map',
    selectors: {
        selectFilter: (state: MapSliceState) => state.filter,
        selectVeh: (state: MapSliceState) => state.currentVeh,
        selectCardOpen: (state: MapSliceState) => state.isCardOpen,
        selectCoords: (state: MapSliceState) => state.centerCoords,
    },
    reducers: {
        setFilter: (state: MapSliceState, action: PayloadAction<VehicleTableStatusFilter>) => {
            state.filter = action.payload
        },
        setCurrVeh: (state: MapSliceState, action: PayloadAction<string | null>) => {
            state.currentVeh = action.payload
        },
        setCardOpen: (state: MapSliceState, action: PayloadAction<boolean>) => {
            state.isCardOpen = action.payload
        },
        setCenterCoords: (state: MapSliceState, action: PayloadAction<[number, number] | null>) => {
            state.centerCoords = action.payload
        }
    }
})

export default mapSlice.reducer

export const { selectFilter, selectVeh, selectCardOpen, selectCoords } = mapSlice.selectors
export const { setCurrVeh, setFilter, setCardOpen, setCenterCoords } = mapSlice.actions
export const useMapDispatch = useDispatch.withTypes()
export const useMapSelector = useSelector.withTypes<{map:MapSliceState}>()


import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {VehicleTableStatusFilter} from "@modules/map/lib";
import  type {VehicleResponse} from "@/entities/mock";
import {useDispatch, useSelector} from "react-redux";

export interface MapSliceState {
    currentVeh: VehicleResponse['id'] | null
    filter: VehicleTableStatusFilter
    isCardOpen: boolean
}
const initialState: MapSliceState = {
    currentVeh: null,
    isCardOpen: false,
    filter: ''
}

const mapSlice = createSlice({
    initialState,
    name: 'map',
    selectors: {
        selectFilter: (state) => state.filter,
        selectVeh: (state) => state.currentVeh,
        selectCardOpen: (state) => state.isCardOpen,
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
        }
    }
})

export default mapSlice.reducer

export const { selectFilter, selectVeh, selectCardOpen } = mapSlice.selectors
export const { setCurrVeh, setFilter, setCardOpen } = mapSlice.actions
export const useMapDispatch = useDispatch.withTypes()
export const useMapSelector = useSelector.withTypes<{map:MapSliceState}>()


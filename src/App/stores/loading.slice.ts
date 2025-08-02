import { createSlice } from '@reduxjs/toolkit';
import type { LoadingSliceState } from "@app/stores/types.ts";
import { useSelector } from 'react-redux';

const initialState: LoadingSliceState = {
    isLoading: false,
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    selectors: {
        selectLoading: (state) => state.isLoading 
    },
    reducers: {
        setLoading: (state: LoadingSliceState, action) => {
            state.isLoading = action.payload;
        },
    },
});
export const {selectLoading} = loadingSlice.selectors;
export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
export const useLoadSelector = useSelector.withTypes<{loading:LoadingSliceState}>()

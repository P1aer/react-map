import { createSlice } from '@reduxjs/toolkit';
import type { LoadingSliceState } from "@app/stores/types.ts";

const initialState: LoadingSliceState = {
    isLoading: false,
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state: LoadingSliceState, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
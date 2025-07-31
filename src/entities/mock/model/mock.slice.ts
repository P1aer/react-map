import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {MockDispatch, MockSliceState} from "./types";
import {fetchData} from "@/entities/mock/model";
import {useDispatch, useSelector} from "react-redux";

const initialState:MockSliceState = {
    data: [],
    error: null,
    loading: false,
}

export const fetchMock = createAsyncThunk(
    'fetch',
    async (_, { rejectWithValue }) => {
        try {
            return await fetchData();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
const mockSlice = createSlice({
    name: 'mock',
    initialState,
    reducers: {
    },
    selectors: {
      selectAll: (state) => state,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMock.pending, (state: MockSliceState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMock.fulfilled, (state: MockSliceState, action) => {
                state.loading = false;
                if ('payload' in action) {
                    state.data = action.payload;
                }
                else {
                    state.data = []
                }
            })
            .addCase(fetchMock.rejected, (state: MockSliceState, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})


export default mockSlice.reducer;

export const { selectAll } = mockSlice.selectors
export const useMockDispatch = useDispatch.withTypes<MockDispatch>()
export const useMockSelector = useSelector.withTypes<MockSliceState>()

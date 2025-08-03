import {bindActionCreators, createAsyncThunk, createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {fetchData, postDataById, type VehicleData} from "@/entities/mock/model";
import {useDispatch, useSelector} from "react-redux";

export type MockSliceState = {
    data: VehicleData[],
    loading: boolean,
    error: string | null,
}
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
            console.log(error)
            return rejectWithValue('Fetch failed');
        }
    }
);
export const postMock = createAsyncThunk(
    'post',
    async(postData: VehicleData, { rejectWithValue }) => {
        try {
            return await postDataById(postData)
        }
        catch (error) {
            console.log(error)
            return rejectWithValue('Post failed')
        }
    }
)
const mockSlice = createSlice({
    name: 'mock',
    initialState,
    reducers: {
        setVehById:(state, action: PayloadAction<VehicleData>) => {
            const arr = [...state.data]
            const curr = arr.find((el => el.id === action.payload.id))
            if (!curr) return
            curr.isLocked = action.payload.isLocked
            state.data = arr;
        }
    },
    selectors: {
      selectAll: (state: MockSliceState) => state,
      selectVehById: (state: MockSliceState, id: string | null) => state.data.find((v) => v.id === id)
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
                    if (action.payload.length === 0) {
                        state.error = 'No Data'
                    }
                    state.data = action.payload;
                }
                else {
                    state.data = []
                }
            })
            .addCase(fetchMock.rejected, (state: MockSliceState, action) => {
                state.loading = false;
                  if ('payload' in action && typeof action.payload === 'string') {
                    state.error = action.payload;
                  } else {
                    state.error = 'error'
                  }
            });
            builder
            .addCase(postMock.pending, (state: MockSliceState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postMock.fulfilled, (state: MockSliceState, action) => {
                state.loading = false;
                if ('payload' in action) {
                    mockSlice.caseReducers.setVehById(state,action)
                }
            })
            .addCase(postMock.rejected, (state: MockSliceState, action) => {
                state.loading = false;
                  if ('payload' in action && typeof action.payload === 'string') {
                    state.error = action.payload;
                  } else {
                    state.error = 'error'
                  }
            });
    }
})


export default mockSlice.reducer;

export const { setVehById } = mockSlice.actions;
export const { selectAll , selectVehById } = mockSlice.selectors
export const useMockDispatch = useDispatch.withTypes()
export const useMockSelector = useSelector.withTypes<{mock:MockSliceState}>()
export const useMockActions = () => {
  const dispatch = useMockDispatch();
  return bindActionCreators({ fetchMock, postMock }, dispatch);
};

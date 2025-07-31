export { fetchData } from "./mock"
export type {
    VehicleCoords,
    VehicleStatus,
    VehicleResponse,
    VehicleResponseKeys,
    MockSliceState,
    MockDispatch,
} from "./types"
export { default as mockSlice, fetchMock, useMockDispatch, useMockSelector, selectAll } from './mock.slice.ts'
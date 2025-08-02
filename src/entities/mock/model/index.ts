export { fetchData, postDataById } from "./mock"
export type {
    VehicleCoords,
    VehicleStatus,
    VehicleResponse,
    VehicleResponseKeys,
    VechicleData,
} from "./types"
export { default as mockSlice, fetchMock,postMock, setVehById, useMockDispatch, useMockSelector, selectAll, selectVehById, type MockSliceState, useMockActions } from './mock.slice.ts'
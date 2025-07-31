import {mockSlice} from "@/entities/mock";

export type VehicleStatus = 'moving' | 'idle' | 'offline'

export type VehicleCoords = [number, number]
export interface VehicleResponse {
    "id": string,
    "name": string,
    "status": VehicleStatus,
    "coords": VehicleCoords,
    "lastUpdate": string,
}

export type VehicleResponseKeys = keyof VehicleResponse

export type MockSliceState = {
    data: VehicleResponse[],
    loading: boolean,
    error: string | null,
}
export type MockDispatch = typeof mockSlice.dispatch
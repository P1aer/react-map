
export type VehicleStatus = 'moving' | 'idle' | 'offline'

export type VehicleCoords = [number, number]
export interface VehicleResponse {
    "id": string,
    "name": string,
    "status": VehicleStatus,
    "coords": VehicleCoords,
    "lastUpdate": string,
}
export interface VehicleData extends VehicleResponse {
    isLocked?: boolean
}
export type VehicleResponseKeys = keyof VehicleResponse

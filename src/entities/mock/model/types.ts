
export type VehicleStatus = 'moving' | 'idle' | 'offline' | 'locked'

export type VehicleCoords = [number, number]
export interface VehicleResponse {
    "id": string,
    "name": string,
    "status": VehicleStatus,
    "coords": VehicleCoords,
    "lastUpdate": string,
}
export interface VechicleData extends VehicleResponse {
    isLocked?: boolean
}
export type VehicleResponseKeys = keyof VehicleResponse

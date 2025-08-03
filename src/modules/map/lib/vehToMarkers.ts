import type {VehicleData, VehicleStatus} from "@/entities/mock/model";
import {formatDate} from "@shared/lib";

export const vehicleToMarkers = (vehicles: VehicleData[]) => {
    return vehicles.map((v) => {
        return {
            coords: v.coords,
            content: {
                icon: statusToMarkerColor(v.status),
                innerContent: [ v.name, formatDate(v.lastUpdate)]
            }
        }
    })
}
export const MappedStatusColor: Record<VehicleStatus, string> = {
    'idle': '#fff',
    'moving': '#1ed257',
    'offline': '#ea1c1c'
}
export const statusToMarkerColor = (color: VehicleStatus) => {
    return MappedStatusColor[color]
}
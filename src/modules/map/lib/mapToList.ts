import type { VehicleResponse } from "@/entities/mock";
import { formatDate, type ListItem } from "@shared/lib";

export function mapToList(veh: VehicleResponse | undefined): ListItem[] {
    if (!veh) return []
    const obj = {
        name: veh.name,
        lastUpdate: formatDate(veh.lastUpdate),
        coords: `x:${veh.coords[0]} y:${veh.coords[1]}`,
        status: veh.status
    }
    return Object.entries(obj).map((arr) => {
        return {
            'title': arr[0],
            'value': arr[1]
        }
    })
}
import type {VehicleResponse} from "@/entities/mock";
import type {VehicleTableElement} from "@modules/map/model";
import {formatDate} from "@shared/lib";

export const mapToTableData = (initialData: VehicleResponse[]) => {
    const map: VehicleTableElement[]  = []
    initialData.forEach((element) => {
        map.push({
            id: element.id,
            name: element.name,
            lastUpdate: formatDate(element.lastUpdate),
            status: element.status,
        })
    })
    return map;
}
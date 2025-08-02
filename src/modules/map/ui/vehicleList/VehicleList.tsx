import { type VehicleResponse} from "@/entities/mock/model";
import { mapToList } from "@modules/map/lib";
import { BaseList } from "@shared/ui/List";

interface ComponentProps {
    data: VehicleResponse | undefined
}

export const VehicleList = ({ data }: ComponentProps) => { 
    const vechList = mapToList(data)
    return (<BaseList data={vechList} />)
}        
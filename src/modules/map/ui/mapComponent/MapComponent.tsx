import {BaseMap} from "@shared/ui";
import type {VehicleData} from "@/entities/mock/model";
import {vehicleToMarkers} from "@modules/map/lib";
import type {MapRef} from "@shared/ui/Map/BaseMap.tsx";
import {useEffect, useRef} from "react";
import {selectCoords, useMapSelector} from "@modules/map/model";
interface ComponentProps {
    vehicles?: VehicleData[]
}
export const MapComponent = ({ vehicles  = []}:ComponentProps) => {
    const mapRef = useRef<MapRef>(null);
    const centerCoords = useMapSelector(selectCoords)

    useEffect(() => {
        if (centerCoords && mapRef.current) {
            mapRef.current.setCenter(...centerCoords)
        }
    }, [centerCoords])

    const markers = vehicleToMarkers(vehicles!)
    return (
        <div className='mt-3' id='map'>
            <BaseMap ref={mapRef} markers={markers} />
        </div>
    )
}

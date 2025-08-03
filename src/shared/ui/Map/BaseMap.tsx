import  {forwardRef, useImperativeHandle} from 'react';
import {MapContainer, TileLayer, useMap} from "react-leaflet";
import style from './base-map.module.css'
import {BaseMarker} from "@shared/ui/Marker";
import type {TBaseMarker, TPopupContent} from "@shared/lib";

export type MapRef = {
    setCenter: (lat: number, lng: number) => void;
    flyTo: (lat: number, lng: number) => void;
};

interface ComponentProps {
    markers: TBaseMarker<TPopupContent>[]
}
export const BaseMap = forwardRef<MapRef, ComponentProps>(({ markers }, ref) => {

    const MapController = () => {
        const map = useMap();

        // Прокидываем методы наружу через `ref`
        useImperativeHandle(ref, () => ({
            setCenter: (lat: number, lng: number) => {
                //setCenter([lat, lng]);
                map.setView([lat, lng], 18);
            },
            flyTo: (lat: number, lng: number) => {
                //setCenter([lat, lng]);
                map.flyTo([lat, lng], 18);
            },
        }));

        return null;
    };
    return (
        <MapContainer className={style.container} center={[55.7558,37.6173]} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapController />
            {markers.map((m) => <BaseMarker
                key={`${m.coords[0]}:${m.coords[1]}`}
                coords={m.coords}
             content={m.content}
            />) }
        </MapContainer>
    );
});
BaseMap.displayName = 'Map';
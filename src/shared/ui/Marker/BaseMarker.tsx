import {Marker, Popup} from "react-leaflet";
import type {TBaseMarker, TPopupContent} from "@shared/lib";
import L from 'leaflet';

interface ComponentProps extends TBaseMarker<TPopupContent>{

}
const createStatusIcon = (color: string) => {
    return new L.DivIcon({
        html: `
      <div style="
        background-color: ${color};
        width: 36px;
        height: 36px;
        overflow: hidden;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
      ">
        <img
            style="
        width: 30px;
        height: 30px;
                    " 
            src='src/shared/assets/images/car-svg.svg'
            alt="marker"
         >
      </div>
    `,
        className: '',
        iconSize: [36, 36],
    });
};
export const BaseMarker = ({coords , content}: ComponentProps) => {
    return (
        <Marker position={coords} icon={createStatusIcon(content.icon)}>
            <Popup>
                <div className='text-center'>
                    {
                        content.innerContent.map(c => <div key={c}>
                                {c}
                            </div>
                        )}
                </div>
            </Popup>
        </Marker>
    );
};

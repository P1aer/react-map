export type { VehicleTableElement, VehicleTableElementKeys, SideBarTableElement, SideBarTableElementKeys } from './types'
export {
    default as mapSlice,
    setFilter,
    setCurrVeh,
    setCardOpen,
    setCenterCoords,
    useMapSelector,
    useMapDispatch,
    selectVeh,
    selectFilter,
    selectCardOpen,
    selectCoords,
    type MapSliceState,

} from './map.slice'
export { MapRoutes } from './routes'
export type { VehicleTableElement, VehicleTableElementKeys, SideBarTableElement, SideBarTableElementKeys } from './types'
export {
    default as mapSlice,
    setFilter,
    setCurrVeh,
    setCardOpen,
    useMapSelector,
    useMapDispatch,
    selectVeh,
    selectFilter,
    selectCardOpen,
    type MapSliceState,

} from './map.slice'
export { MapRoutes } from './routes'
import type {SideBarHeadElement, VehicleHeadElement, VehicleTableStatusFilter} from "./types";

export const VEHICLE_TABLE_HEAD: VehicleHeadElement[] = [
    {
        id: 1,
        title: 'Name',
        name: 'name',
        filterValue: null,
    },
    {
        id: 2,
        title: 'Status',
        name: 'status',
        filterValue: 'status',
    },
    {
        id: 3,
        title: 'Last Update',
        name: 'lastUpdate',
        filterValue: null,
    },
]
export const SIDEBAR_TABLE_HEAD: SideBarHeadElement[] = [
    {
        id: 1,
        title: 'Name',
        name: 'name',
        filterValue: null,
    },
    {
        id: 2,
        title: 'Status',
        name: 'status',
        filterValue: null,

    },
    {
        id: 3,
        title: 'Last Update',
        name: 'lastUpdate',
        filterValue: null,
    },
        {
        id: 4,
        title: 'Coords',
        name: 'coords',
        filterValue: null,
    },
]
export const TABLE_STATUS_FILTERS: VehicleTableStatusFilter[] = [
    "",
    "idle",
    'moving',
    'offline',
]

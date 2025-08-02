import type {VehicleResponse} from "@/entities/mock";

export type VehicleTableElement = Omit<VehicleResponse, 'coords'>
export type VehicleTableElementKeys = keyof VehicleTableElement
export type SideBarTableElement = VehicleResponse
export type SideBarTableElementKeys = keyof SideBarTableElement

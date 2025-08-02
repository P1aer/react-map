import type { VehicleStatus } from "@/entities/mock";
import type { TableHeadElement } from "@shared/lib";
import type { SideBarTableElementKeys, VehicleTableElementKeys } from "../model";

export type VehicleHeadElement = TableHeadElement<VehicleTableElementKeys>
export type VehicleTableStatusFilter = VehicleStatus | ''
export type SideBarHeadElement = TableHeadElement<SideBarTableElementKeys>

export function isVehicleStatus(value: unknown): value is VehicleTableStatusFilter {
  return (
    typeof value === 'string' &&
    ['moving', 'idle', 'offline', 'locked', ''].includes(value)
  );}
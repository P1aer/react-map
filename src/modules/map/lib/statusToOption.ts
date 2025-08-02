import { statusFilterMapper } from "./statusFilterMapper";
import type { VehicleTableStatusFilter } from "./types";

export const statusToOption =(arr: VehicleTableStatusFilter[]) => arr.map((t) => {
            return {
                value: t,
                label: statusFilterMapper(t)
            }})
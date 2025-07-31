import {MOCK_DATA, MOCK_RESPONSE_TIME} from "../lib";
import type {VehicleResponse} from "@/entities/mock";

export const fetchData = (): Promise<VehicleResponse[]> => {
    return new Promise<VehicleResponse[]>((resolve) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, MOCK_RESPONSE_TIME)
    })
}
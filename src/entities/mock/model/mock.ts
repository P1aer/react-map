import {MOCK_DATA, MOCK_RESPONSE_TIME} from "../lib";
import type {VehicleResponse} from "@/entities/mock";
import type { VehicleData } from "./types";

export const fetchData = (): Promise<VehicleResponse[]> => {
    return new Promise<VehicleResponse[]>((resolve) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, MOCK_RESPONSE_TIME)
    })
}
export const postDataById = (postData: VehicleData): Promise<VehicleData> => {
    return new Promise<VehicleData>((resolve) => {
        setTimeout(() => {
            resolve(postData)
        }, MOCK_RESPONSE_TIME)
    })
}
import {MOCK_DATA, MOCK_RESPONSE_TIME} from "../lib";
import type {VehicleResponse} from "@/entities/mock";
import type { VechicleData } from "./types";

export const fetchData = (): Promise<VehicleResponse[]> => {
    return new Promise<VehicleResponse[]>((resolve) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, MOCK_RESPONSE_TIME)
    })
}
export const postDataById = (postData: VechicleData): Promise<VechicleData> => {
    return new Promise<VechicleData>((resolve) => {
        setTimeout(() => {
            resolve(postData)
        }, MOCK_RESPONSE_TIME)
    })
}
import type {VehicleResponse} from "@/entities/mock";

export const MOCK_DATA: VehicleResponse[] = [
    { "id":"veh-001","name":"Truck 001","status":"moving","coords":[55.7558,37.6173],"lastUpdate":"2025-06-17T09:45:12Z" },
    { "id":"veh-002","name":"Van 022","status":"idle","coords":[55.7571,37.6150],"lastUpdate":"2025-06-17T10:02:34Z" },
    { "id":"veh-003","name":"Car 123","status":"offline","coords":[55.7522,37.6215],"lastUpdate":"2025-06-17T08:30:00Z" },
    { "id":"veh-004","name":"Bus 045","status":"moving","coords":[55.7590,37.6200],"lastUpdate":"2025-06-17T10:15:47Z" },
    { "id":"veh-005","name":"Lorry 087","status":"idle","coords":[55.7560,37.6100],"lastUpdate":"2025-06-17T09:55:22Z" },
    { "id":"veh-006","name":"Shuttle 311","status":"moving","coords":[55.7540,37.6180],"lastUpdate":"2025-06-17T10:05:10Z" },
    { "id":"veh-007","name":"Taxi 777","status":"idle","coords":[55.7530,37.6130],"lastUpdate":"2025-06-17T09:20:05Z" },
    { "id":"veh-008","name":"MiniBus 908","status":"offline","coords":[55.7585,37.6190],"lastUpdate":"2025-06-17T07:50:30Z" },
    { "id":"veh-009","name":"SUV 456","status":"moving","coords":[55.7550,37.6260],"lastUpdate":"2025-06-17T10:20:59Z" },
    { "id":"veh-010","name":"Courier 102","status":"idle","coords":[55.7515,37.6165],"lastUpdate":"2025-06-17T09:05:18Z" }
];
export const MOCK_RESPONSE_TIME = 1000


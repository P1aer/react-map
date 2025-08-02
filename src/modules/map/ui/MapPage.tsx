import  {useEffect} from 'react';
import {VehicleTable} from "./table";
import {MapComponent} from "./mapComponent";
import {SideBar} from "./sideBar";
import {selectAll} from "@/entities/mock";
import {useMockActions, useMockSelector} from "@/entities/mock/model";

export const MapPage = () => {
    const { fetchMock } = useMockActions()
    const {data, error} = useMockSelector(selectAll)

    console.log('rerender')
    useEffect(() => {
        fetchMock()
    },[])

    return (
        <div className='flex flex-row w-full'>
            <SideBar/>
            <div className="flex flex-col w-full p-8">
                { error && <div className='text-xl font-bold text-rose-600'>{error}</div>}
                <VehicleTable data={data} />
                <MapComponent />
            </div>
        </div>
    )
}

import React, {useEffect, useState} from 'react';
import {VehicleTable} from "./table";
import {MapComponent} from "./mapComponent";
import {SideBar} from "./sideBar";
import {fetchMock, selectAll} from "@/entities/mock";
import {useMockDispatch, useMockSelector} from "@/entities/mock/model";

export const MapPage = () => {
    const dispatch = useMockDispatch()
    const {data, error} = useMockSelector(selectAll)
    useEffect(() => {
        dispatch(fetchMock())
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

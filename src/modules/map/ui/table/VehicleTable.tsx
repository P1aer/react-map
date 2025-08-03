import {useEffect, useState} from 'react';
import {BasePagination, BaseTable} from "@shared/ui";
import type {VehicleResponse} from "@/entities/mock";
import {DEFAULT_TABLE_LIMIT} from "@shared/lib";
import {mapToTableData} from "@modules/map/lib";
import {selectFilter, setCardOpen, setCurrVeh, useMapDispatch, useMapSelector, type VehicleTableElement, type VehicleTableElementKeys} from "@modules/map/model";
import {VehicleFilters} from "@modules/map/ui/vehicleFilters";
import {VEHICLE_TABLE_HEAD} from '@/modules/map/lib'

interface ComponentProps {
    data: VehicleResponse[],
}

export const VehicleTable = ({data = []}: ComponentProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useMapDispatch()
    const filter = useMapSelector(selectFilter)
    

    const tableData = mapToTableData(data)
    const filteredData = tableData.filter((elem) => filter ? elem.status === filter : true)

    const totalPages = Math.ceil(filteredData.length / DEFAULT_TABLE_LIMIT)
    const paginatedData = filteredData.slice((currentPage - 1) * DEFAULT_TABLE_LIMIT, DEFAULT_TABLE_LIMIT * currentPage)


    const onRowClick = (id: string) => {
        dispatch(setCurrVeh(id))
        dispatch(setCardOpen(true))
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [filter])
    return (
        <div className='w-full max-w-[1024px]'>
            <VehicleFilters />
            <BaseTable<VehicleTableElement, VehicleTableElementKeys>
                onRowClick={onRowClick}
                head={VEHICLE_TABLE_HEAD}
                tableData={paginatedData}
                title={'Moscow Cars'}
            />
            <BasePagination
                currentPage={currentPage}
                totalPage={totalPages ? totalPages : 1}
                setPage={(data) => setCurrentPage(data)}
            />
        </div>
    )
}
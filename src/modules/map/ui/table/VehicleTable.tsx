import React, {useState} from 'react';
import {BasePagination, BaseTable} from "@shared/ui";
import type {VehicleResponse, VehicleResponseKeys} from "@/entities/mock";
import { VEHICLE_TABLE_HEAD } from "@modules/map/lib";
import {DEFAULT_TABLE_LIMIT} from "@shared/lib";
interface ComponentProps {
    data: VehicleResponse[],
}

export const VehicleTable = ({data = []}: ComponentProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(data.length / DEFAULT_TABLE_LIMIT)
    const paginatedData = data.slice((currentPage - 1) * DEFAULT_TABLE_LIMIT, DEFAULT_TABLE_LIMIT * currentPage)
    return (
        <div>
            <BaseTable<VehicleResponse, VehicleResponseKeys>
                head={VEHICLE_TABLE_HEAD}
                tableData={paginatedData}
                title={'Moscow Cars'}
            />
            <BasePagination
                currentPage={currentPage}
                totalPage={totalPages ? totalPages : 1}
            />
        </div>
    )
}
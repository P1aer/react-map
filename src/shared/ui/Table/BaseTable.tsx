import React from 'react';
import type {TableDataObject, TableHeadElement} from "@shared/lib";
import { FaFilter } from "react-icons/fa";


interface ComponentProps<Data, DataKeys> {
    head: TableHeadElement<DataKeys>[]
    tableData: TableDataObject<DataKeys, Data>[]
    title?: string
}
export const BaseTable: React.FC = <Data, DataKeys>(
    {
        head = [],
        tableData = [],
        title
    }: ComponentProps<Data, DataKeys>) => {
    return (
        <div className='w-full flex flex-col'>
            <h3 className='text-2xl font-bold'>
                { title }
            </h3>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    { head.map((col) => <div
                        key={col.id}
                        className='flex'>
                        {col.title}
                        {col.filterValue && <div><FaFilter /></div>}
                    </div>)}
                </div>
            </div>
            <div className='flex flex-col'>
                { tableData.map((row) => <div
                    className='flex flex-row'
                    key={row.id}>
                    {head.map((col) =>
                        <div key={row.id + col.id}> {row[col.name]} </div>
                    )}
                </div>)}
            </div>
        </div>
    );
};

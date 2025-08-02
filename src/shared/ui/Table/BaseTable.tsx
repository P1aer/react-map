import type {TableDataObject, TableHeadElement} from "@shared/lib";
import {BaseHeadCell} from "@shared/ui/Table/BaseHeadCell.tsx";
import {BaseTableCell} from "@shared/ui/Table/BaseTableCell.tsx";


interface ComponentProps<Data, DataKeys extends keyof Data> {
    head: TableHeadElement<DataKeys>[]
    tableData: TableDataObject<DataKeys, Data>[]
    title?: string,
    onRowClick?: (id:string) => void,
}
export const BaseTable = <D,K extends keyof D>(
    {
        head = [],
        tableData = [],
        title,
        onRowClick,
    }: ComponentProps<D,K>) => {
    const isClickable = !!onRowClick
    return (
        <div className='w-full flex flex-col mb-3'>
            <h3 className='text-2xl font-bold mb-3'>
                { title }
            </h3>
            <div className='border-1 border-indigo-500 rounded-sm p-4'>
                <div className='flex flex-row w-full mb-1 border-b-1'>
                    { head.map((col) => <BaseHeadCell<K> key={col.id} col={col}/>)}
                </div>
                <div className='flex flex-col'>
                    { tableData.map((row) => <div
                        onClick={() => isClickable && onRowClick!(row.id)}
                        className={`flex flex-row ${isClickable && 'cursor-pointer'} mt-2 p-1`}
                        key={row.id}>
                        {head.map((col) =>
                           <BaseTableCell key={row.id + col.id}>{`${row[col.name]}`}</BaseTableCell> 
                        )}
                    </div>)}
                </div>
            </div>

        </div>
    );
};

import type {TableHeadElement} from "@shared/lib";

interface ComponentProps<DataKeys> {
    col: TableHeadElement<DataKeys>
}
export const BaseHeadCell = <K,>({col}: ComponentProps<K>) => {
    return (
        <div
            className='text-xl flex flex-1 items-center'>
            {col.title}
        </div>
    );
};


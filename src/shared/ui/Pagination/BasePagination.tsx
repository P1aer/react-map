import {createRange} from "@shared/lib";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

interface ComponentProps {
    currentPage: number,
    totalPage: number,
    limit?: number,
    setPage: (arg: number) => void,
}
export const BasePagination = ({ currentPage = 1, totalPage = 1, setPage}: ComponentProps) => {
    const isPageFirst = currentPage === 1;
    const isPageLast = currentPage === totalPage;

    const onRightClick = () => {
        if (isPageFirst) return
        setPage(currentPage + 1)
    }

    const onLeftClick = () => {
        if (isPageLast) return
        setPage(currentPage - 1)
    }
    return (
        <div className='flex flex-row items-center'>
            <FaChevronLeft onClick={onRightClick} className={`${isPageFirst ? 'opacity-40' : 'cursor-pointer'}`}/>
            {createRange(1, totalPage).map((page) =>
                <div
                    key={page}
                    onClick={() => setPage(page)}
                    className={`flex w-fit cursor-pointer mx-3 px-2 rounded-md ${page === currentPage ?'border-3': 'border-1 '} border-sky-200`}>
                    {page.toString().padStart(2,'0')}
                </div>
            )}
            <FaChevronRight onClick={onLeftClick} className={`${isPageLast ? 'opacity-40' : 'cursor-pointer'}`}/>
        </div>
    );
};

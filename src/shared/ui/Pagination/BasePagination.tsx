import React from 'react';
import {DEFAULT_TABLE_LIMIT} from "@shared/lib";
interface ComponentProps {
    currentPage: number,
    totalPage?: number,
    limit?: number,
}
export const BasePagination = ({ currentPage = 1, totalPage= 1, limit = DEFAULT_TABLE_LIMIT}: ComponentProps) => {
    return (
        <div>
            cur: {currentPage}
            total: {totalPage}
        </div>
    );
};

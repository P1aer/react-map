import {BaseSelect} from "@shared/ui/Select";
import {isVehicleStatus, statusToOption, TABLE_STATUS_FILTERS} from "@modules/map/lib";
import {selectAll, useMockSelector} from "@/entities/mock";
import { selectFilter, setFilter, useMapDispatch, useMapSelector } from '@modules/map/model';
import type { SyntheticEvent } from "react";

export const VehicleFilters = () => {
    const {error, loading} = useMockSelector(selectAll)
    const filter = useMapSelector(selectFilter)

    const dispatch = useMapDispatch();

    const statusFilter = statusToOption(TABLE_STATUS_FILTERS);

    const onSelect = (event: SyntheticEvent) => {
        if ('value' in event.target && isVehicleStatus(event.target.value))
        dispatch(setFilter(event.target.value))
    }
    return (
        <div className='flex flex-col w-[40%] mb-3'>
            <BaseSelect
                onSelect={onSelect}
                disabled={!!error || loading}
                value={filter}
                options={statusFilter}
                label={'Status'}
            />
        </div>
    );
};

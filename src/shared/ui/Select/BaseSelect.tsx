import type { ChangeEventHandler } from 'react';
import style from './base-select.module.css'

type optionObject = {
    value: string,
    label: string
}
interface ComponentProps {
    label?: string,
    value: string | number | readonly string[] | undefined,
    disabled?: boolean,
    options: optionObject[],
    onSelect?: ChangeEventHandler<HTMLSelectElement>,
}
export const BaseSelect = ({label,options = [], value, disabled = false, onSelect}:ComponentProps) => {
    return (
        <div className='flex flex-col w-full border-bottom-indigo-200 border-b-1'>
            <span className=''>
                {label}
            </span>
            <select
                className={style.select}
                value={value}
                disabled={disabled}
                onChange={onSelect}
                >
                    {options?.map((op) => <option value={op.value} key={op.value}>{op.label}</option>)}
            </select>
        </div>

    );
};

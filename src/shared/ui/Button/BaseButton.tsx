import type {MouseEventHandler, ReactNode} from "react";
interface ComponentProps {
    disabled?: boolean,
    children: ReactNode
    onClick?: MouseEventHandler<HTMLDivElement>
}
export const BaseButton = ({disabled = false, children, onClick}: ComponentProps) => {
    return (
        <div
            className={`p-2 border-1 ${disabled ? 'bg-gray-300': ''} border-amber-300 rounded-xs`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

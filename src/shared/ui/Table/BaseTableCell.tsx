interface ComponentProps {
    children: React.ReactNode
}
export const BaseTableCell = ({children} :ComponentProps) => {
    return (
        <div className='flex-1 items-center'> {children} </div>
    );
};

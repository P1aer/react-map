export type TableHeadElement<DataKeys> = {
    id: number,
    title: string,
    name: DataKeys
    filterValue: null | DataKeys,
}
export type TableDataObject<Keys extends keyof Data, Data> = {
    [S in Keys]: Data[S]
} & { id: string }
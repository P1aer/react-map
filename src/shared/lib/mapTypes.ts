export type TPopupContent = {
    icon: string,
    innerContent: string[]
}

export type TBaseMarker<T extends TPopupContent> = {
    coords: [number, number]
    content: T
}
export function createRange(from: number, to: number) {
    const range: number[] = []
    let pointer = from
    while (pointer <= to) {
        range.push(pointer)
        pointer++
    }
    return range
}
import type { ListItem } from "@shared/lib"

interface ComponentProps {
    data: ListItem[]
}
export const BaseList = ({ data = []}: ComponentProps) => {
    return (<div className="">
        {data.map((el) => <div className="mb-2" key={el.title}>
            <span className="font-bold">{el.title}</span>: <span className="border-b-1 border-cyan-900">{el.value}</span>
        </div>)}
    </div>)
}        
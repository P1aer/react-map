import { selectAll, useMockSelector } from "@/entities/mock"
import type { ReactNode, SyntheticEvent } from "react"

interface ComponentProps {
    children: ReactNode
}
export const ErrorButtonWrapper = ({children}:ComponentProps) => {
    const { error } = useMockSelector(selectAll)
    const onClick = (event: SyntheticEvent) => {
        if (error) {
            event.stopPropagation()
        }
    }
  return (
    <div className={[error ? 'bg-gray-300 rounded-sm': 'cursor-pointer','flex w-fit my-4'].join(' ')} onClickCapture={onClick} >
     {children}
    </ div>
  )
}
    
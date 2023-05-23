import React from 'react'
import { CSSProperties, forwardRef, HTMLAttributes } from "react"
import { TItem } from "./TaskList"
import { Task } from './TaskList/Task'

type Props = {
    item: any
    isOpacityEnabled?: boolean
    isDragging?: boolean
} & HTMLAttributes<HTMLDivElement>

// eslint-disable-next-line react/display-name
export const Item = forwardRef<HTMLDivElement, Props>(
    ({ item, isOpacityEnabled, isDragging, style, ...props }, ref) => {
        const styles: CSSProperties = {
            opacity: isOpacityEnabled ? "0.4" : "1",
            cursor: isDragging ? "grabbing" : "grab",
            lineHeight: "0.5",
            transform: isDragging ? "scale(1.05)" : "scale(1)",
            ...style
        }

        return (
            <div ref={ref} style={styles} {...props}>
                <Task text={item.text} tomato={item.tomato} id={item.id}/>

            </div>
        )
    }
)


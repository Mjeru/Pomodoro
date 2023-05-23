import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { Task } from './TaskList/Task'
import { TaskType } from '../store/reducer'

type SortableItemProps = {
    item: TaskType
    id: string
}

export function SortableItem({ id, item }: SortableItemProps) {
    return (
        <div>

        </div>
    )
}

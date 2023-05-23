import React, { useState } from 'react'
import styles from './tasklist.css'
import { Button } from '../Button'
import { Break } from '../Break'
import { Task } from './Task'
import { store } from '../../store'
import { addTask, setTasks } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, TaskType } from '../../store/reducer'
import {
    DndContext,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent,
    TouchSensor,
    pointerWithin,
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    rectSortingStrategy,
} from '@dnd-kit/sortable'

export type TItem = {
    id: number
    imageUrl: string
}

export function TaskList() {
    const dispatch = useDispatch()
    const list = useSelector<RootState, Array<TaskType>>((state) => state.tasks)
    const [activeItem, setActiveItem] = useState<TaskType>()
    const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))
    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event
        setActiveItem(list.find((item) => item.id === active.id))
    }
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        if (!over) return

        const activeItem = list.find((item) => item.id === active.id)
        const overItem = list.find((item) => item.id === over.id)

        if (!activeItem || !overItem) {
            return
        }

        const activeIndex = list.findIndex((item) => item.id === active.id)
        const overIndex = list.findIndex((item) => item.id === over.id)

        if (activeIndex !== overIndex) {
            dispatch(setTasks(arrayMove<TaskType>(list, activeIndex, overIndex)))
            // setItems((prev) => arrayMove<TItem>(prev, activeIndex, overIndex));
        }
        setActiveItem(undefined)
    }
    const handleDragCancel = () => {
        setActiveItem(undefined)
    }

    const [value, setValue] = useState('')

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setValue(ev.target.value)
    }
    const clickHandler = () => {
        if (value.trim() !== '') {
            store.dispatch(addTask(value))
            setValue('')
        }
    }

    return (
        <div>

            <input
                value={value}
                onChange={onChange}
                className={styles.taskInput}
                type={'text'}
                placeholder={'Название задачи'}
            />
            <Break top={true} size={25} />
            <Button onClick={clickHandler} text={'Добавить'} />
            <Break top={true} size={25} />
            <DndContext
                id={'list'}
                sensors={sensors}
                collisionDetection={pointerWithin}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
            >
                <SortableContext items={list} strategy={rectSortingStrategy}>
                    <div>
                        {list.map((item) => (
                            <Task key={item.id} text={item.title} tomato={item.tomato} id={item.id} />
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay style={{ transformOrigin: '0 0 ' }}>
                    {activeItem ? <Task id={activeItem.id} text = {activeItem.title}  isDragging  tomato={activeItem.tomato}/> : null}
                </DragOverlay>
            </DndContext>
            <div className={styles.timeBlock}>
                {formatTime(
                    list.reduce((acc, el) => {
                        return acc + el.tomato
                    }, 0) * 25
                )}
            </div>
        </div>
    )
}

function formatTime(minutes: number) {
    const hours = Math.floor(minutes / 60)
    const remainderMinutes = minutes % 60

    let result = ''
    if (hours > 0) {
        result += hours + ' ' + getHoursSuffix(hours)
    }
    if (remainderMinutes > 0) {
        result += ' ' + remainderMinutes + ' минут'
    }
    if (result === '') {
        result = '0 минут'
    }

    return result.trim()
}

function getHoursSuffix(hours: number) {
    const lastDigit = hours % 10
    if (hours >= 11 && hours <= 19) {
        return 'часов'
    } else if (lastDigit === 1) {
        return 'час'
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return 'часа'
    } else {
        return 'часов'
    }
}

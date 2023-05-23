import React, { useRef, useState } from 'react'
import styles from './task.css'
import { Icon } from '../../Icon'
import { generateRandomString } from '../../../util/react/generateRandomIndex'
import { Dropdown } from '../../Dropdown'
import { GenericList } from '../../GenericList'
import { store } from '../../../store'
import { useDispatch } from 'react-redux'
import {
    decTomato,
    deleteTask,
    editTask,
    incTomato,
} from '../../../store/actions'
import classNames from 'classnames'
import { useSortable } from '@dnd-kit/sortable'

interface ITaskProps {
    text: string
    tomato: number
    id: string ,
    isDragging?: boolean
}

export function Task({ text, tomato, id }: ITaskProps) {
    const { attributes, listeners, setNodeRef, transition } =
        useSortable({ id })

    const dispatch = useDispatch()
    const [value, setValue] = useState(text)
    const [edit, setEdit] = useState(false)

    const editInput = useRef<HTMLInputElement>(null)
    const startEdit = () => {
        setEdit(true)
        if (editInput.current) {
            editInput.current.focus()
        }
    }
    const changeHandler = (ev: any) => {
        setValue(ev.target.value)
    }
    const keyDownHandler = (ev: any) => {
        if (ev.key === 'Escape') {
            setEdit(false)
            setValue(text)
        }
        if (ev.key === 'Enter') {
            setEdit(false)
            dispatch(editTask(id, value))
        }
    }
    const LIST = [
        {
            As: 'li' as const,
            text: 'Увеличить',
            icon: 'inc' as const,
            className: styles.desktop,
            onClick: (ev: PointerEvent) => {
                ev.stopPropagation()
                dispatch(incTomato(id))
            },
        },
        {
            As: 'li' as const,
            text: 'Уменьшить',
            icon: 'dec' as const,
            className: classNames(
                styles.desktop,
                tomato <= 1 ? styles.disabled : ''
            ),
            onClick: (ev: PointerEvent) => {
                ev.stopPropagation()
                if (tomato > 1) {
                    dispatch(decTomato(id))
                }
            },
        },
        {
            As: 'li' as const,
            text: 'Редактировать',
            icon: 'edit' as const,
            onClick: () => {
                startEdit()
            },
        },
        {
            As: 'li' as const,
            text: 'Удалить',
            icon: 'delete' as const,
            className: styles.desktop,
            onClick: () => {
                dispatch(deleteTask(id))
            },
        },
    ].map((item) => ({ ...item, id: generateRandomString() }))
    return (
        <div className={styles.wrapper}>
            <div className={styles.textWrapper} ref={setNodeRef}

                 style={{ transition }}
                 {...attributes}
                 {...listeners}>
                <span

                    className={styles.tomato}
                >
                    {tomato}
                </span>
                {edit ? (
                    <input
                        className={styles.editInput}
                        ref={editInput}
                        type={'text'}
                        value={value}
                        autoFocus={true}
                        onChange={changeHandler}
                        onKeyDown={keyDownHandler}
                    />
                ) : (
                    text
                )}
            </div>

            <Dropdown
                button={
                    <button className={styles.menuButton}>
                        <Icon iconName={'menu'} />
                    </button>
                }
                isOpen={false}
            >
                <ul className={styles.menuList}>
                    <GenericList list={LIST} />
                </ul>
            </Dropdown>
        </div>
    )
}

//функция которая принимает штамп даты и возвращает время формата ЧЧ:ММ

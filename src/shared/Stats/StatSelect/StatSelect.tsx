import React, { useEffect, useState } from 'react'
import styles from './statselect.css'
import { Dropdown } from '../../Dropdown'
import { Icon } from '../../Icon'
import classNames from 'classnames'
import { preventDefault } from '../../../util/react/PreventDefault'

const options = [
    { value: 'chocolate', label: 'Эта неделя' },
    { value: 'strawberry', label: 'Прошедшая неделя' },
    { value: 'vanilla', label: '2 недели назад' },
]

interface IStatSelectProps {
    setWeek: (value: string) => void
    week: string
}

export function StatSelect({ setWeek, week }: IStatSelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(options[0])
    const setOpen = () => {
        setIsOpen(true)
    }
    const setClose = () => {
        setIsOpen(false)
    }
    const clickHandler = (value: string) => () => {
        console.log('clickHandler')
        setWeek(value)
    }
    return (
        <Dropdown
            onOpen={setOpen}
            onClose={setClose}
            button={
                <div className={styles.input}>
                    <span>
                        {week === 'current'
                            ? 'Эта неделя'
                            : week === 'past'
                            ? 'Прошедшая неделя'
                            : week === '2past'
                            ? '2 недели назад'
                            : ''}
                    </span>
                    <div
                        className={classNames(
                            styles.inputArrow,
                            isOpen ? styles.open : ''
                        )}
                    >
                        <Icon iconName={'arrow'} />
                    </div>
                </div>
            }
        >
            <div>
                <div
                    className={styles.input}
                    onClick={clickHandler('current')}
                >
                    <span>{options[0].label}</span>
                </div>
                <div
                    className={styles.input}
                    onClick={ clickHandler('past')}
                >
                    <span>{options[1].label}</span>
                </div>
                <div
                    className={styles.input}
                    onClick={clickHandler('2past')}
                >
                    <span>{options[2].label}</span>
                </div>
            </div>
        </Dropdown>
    )
}

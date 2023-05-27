import React, { useContext } from 'react'
import styles from './header.css'
import { Icon } from '../Icon'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

interface IHeaderProps {
    token?: string
}

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to={'/'}>
                    <div className={styles.logoBlock}>
                        <img src={Logo} />
                        pomodoro_timer
                    </div>
                </Link>
                <Link to={'stats'}>
                    <div className={styles.statBlock}>
                        <Icon iconName={'statistic'} size={16} />
                        Statistic
                    </div>
                </Link>
            </div>
        </header>
    )
}

import React, { useContext } from 'react'
import styles from './header.css'
import { Icon } from '../Icon'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducer'
import { setTheme } from '../../store/actions'

interface IHeaderProps {
    token?: string
}

export function Header() {
    const theme = useSelector<RootState, string>(state=> state.theme)
    const dispatch = useDispatch()
    const changeTheme = ()=>{

        dispatch(setTheme(theme !== 'dark' ? 'dark' : 'light'))
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to={'/'}>
                    <div className={styles.logoBlock}>
                        {/*<img src={Logo} />*/}
                        <Icon iconName={'tomatoLogo'} />
                        pomodoro_box
                    </div>
                </Link>
                <div className={styles.statWrapper}>
                    <input onChange={changeTheme} checked={theme === 'dark'} type="checkbox" id="switch" />
                    <div className={styles.app}>
                        <div className={styles.content}>
                            <label htmlFor="switch">
                                <div className={styles.toggle} />
                                <div className={styles.names}>
                                    <p className={styles.light}><Icon iconName={'sun'}/></p>
                                    <p className={styles.dark}><Icon iconName={'moon'}/></p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <Link to={'stats'}>
                            <div className={styles.statBlock}>
                                <Icon iconName={'statistic'} size={16} />
                                Статистика
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

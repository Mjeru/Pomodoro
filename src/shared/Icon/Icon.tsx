import React from 'react'
import styles from './icon.css'

type IconProps = {
    size?: number
    iconName:
        | 'addButton'
        | 'disDec'
        | 'statistic'
        | 'menu'
        | 'inc'
        | 'dec'
        | 'edit'
        | 'delete'
    // перечисление имен иконок
}

export function Icon(props: IconProps) {
    const { iconName, size } = props

    let iconSvg
    switch (iconName) {
        case 'addButton':
            iconSvg = (
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="25" cy="25" r="25" fill="#C4C4C4" />
                    <path
                        d="M26.2756 26.1321V33H23.7244V26.1321H17V23.7029H23.7244V17H26.2756V23.7029H33V26.1321H26.2756Z"
                        fill="white"
                    />
                </svg>
            )
            break
        case 'disDec': {
            iconSvg = (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z"
                        fill="#C4C4C4"
                    />
                    <path
                        d="M4.25 7.25H7.25H8.75H11.75V8.75H8.75H7.25H4.25V7.25Z"
                        fill="#C4C4C4"
                    />
                </svg>
            )
            break
        }
        case 'delete': {
            iconSvg = (
                <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 4.75V12.25H3V4.75H9ZM7.875 0.25H4.125L3.375 1H0.75V2.5H11.25V1H8.625L7.875 0.25ZM10.5 3.25H1.5V12.25C1.5 13.075 2.175 13.75 3 13.75H9C9.825 13.75 10.5 13.075 10.5 12.25V3.25Z"
                        fill="#A8B64F"
                    />
                </svg>
            )
            break
        }
        case 'edit': {
            iconSvg = (
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.545 4.765L9.235 5.455L2.44 12.25H1.75V11.56L8.545 4.765ZM11.245 0.25C11.0575 0.25 10.8625 0.325 10.72 0.4675L9.3475 1.84L12.16 4.6525L13.5325 3.28C13.825 2.9875 13.825 2.515 13.5325 2.2225L11.7775 0.4675C11.6275 0.3175 11.44 0.25 11.245 0.25ZM8.545 2.6425L0.25 10.9375V13.75H3.0625L11.3575 5.455L8.545 2.6425Z"
                        fill="#A8B64F"
                    />
                </svg>
            )
            break
        }
        case 'dec': {
            iconSvg = (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z"
                        fill="#A8B64F"
                    />
                    <path
                        d="M4.25 7.25H7.25H8.75H11.75V8.75H8.75H7.25H4.25V7.25Z"
                        fill="#A8B64F"
                    />
                </svg>
            )
            break
        }
        case 'inc': {
            iconSvg = (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.75 4.25H7.25V7.25H4.25V8.75H7.25V11.75H8.75V8.75H11.75V7.25H8.75V4.25ZM8 0.5C3.8675 0.5 0.5 3.8675 0.5 8C0.5 12.1325 3.8675 15.5 8 15.5C12.1325 15.5 15.5 12.1325 15.5 8C15.5 3.8675 12.1325 0.5 8 0.5ZM8 14C4.6925 14 2 11.3075 2 8C2 4.6925 4.6925 2 8 2C11.3075 2 14 4.6925 14 8C14 11.3075 11.3075 14 8 14Z"
                        fill="#A8B64F"
                    />
                </svg>
            )
            break
        }
        case 'menu': {
            iconSvg = (
                <svg
                    width="26"
                    height="6"
                    viewBox="0 0 26 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="3" cy="3" r="3" fill="#C4C4C4" />
                    <circle cx="13" cy="3" r="3" fill="#C4C4C4" />
                    <circle cx="23" cy="3" r="3" fill="#C4C4C4" />
                </svg>
            )
            break
        }
        case 'statistic':
            {
                iconSvg = (
                    <svg
                        width={size}
                        height={size}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z"
                            fill="#DC3E22"
                        />
                    </svg>
                )
            }
            break
        default:
            iconSvg = (
                <svg
                    width={size ?? '15'}
                    height={size ?? '15'}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z"
                        fill="#999999"
                    />
                </svg>
            )
    }
    return iconSvg
}

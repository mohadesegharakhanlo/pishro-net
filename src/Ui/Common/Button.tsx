import React, { FC } from 'react'
import defualtStyle from '../../styles/Components/Button.module.scss'
type ButtonT = {
    onClick?:() => void;
    style?:any;
    children:React.ReactNode
}
const Button:FC<ButtonT> = ({onClick , style , children}) => {
  return (
    <button onClick={onClick} className={style ? style : defualtStyle.button}>
        {children}
    </button>
  )
}

export default Button
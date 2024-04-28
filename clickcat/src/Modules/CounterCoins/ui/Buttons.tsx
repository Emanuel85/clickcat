import { propsButton } from '@/utils/type'
import React from 'react'
import Style from './ui.module.css'

export const Buttons = ({ children, ...props }: propsButton,) => {

  return (
    <div>
      <button
        className={Style.button}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default Buttons


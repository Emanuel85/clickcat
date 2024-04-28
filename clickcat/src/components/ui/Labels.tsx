import { propsLabel } from '@/utils/type'
import React from 'react'


export const Labels = ({ children, ...props }: propsLabel) => {
  return (
    <label
      className=''
      {...props}
    >
      {children}
    </label>
  )
}

export default Labels
import { propsButton } from '@/utils/type'
import React from 'react'
import Style from './ui.module.css'
import { Tooltip, Typography } from "@material-tailwind/react";

export const Buttons = ({ children, toolTipDescription, toolTipValueProbability, toolTipTotalProbability, ...props }: propsButton,) => {

  return (
    <div>
      <Tooltip
        content={
          <div className="w-full">
            <Typography
              color="white"
              className="font-normal opacity-80"
            >
              {`${toolTipDescription}`}
            </Typography>
            <div className='flex flex-row'>
              <Typography
                color="white"
                className="font-normal opacity-80 pr-1"
              >
                Probabilidad
              </Typography>
              <Typography
                color="white"
                className=" font-bold opacity-80 text-pink-400"
              >
                {`${toolTipValueProbability}`}
              </Typography>
            </div>
            <div className='flex flex-row'>
              <Typography
                color="white"
                className="font-normal opacity-80 pr-1"
              >
                Total
              </Typography>
              <Typography
                color="white"
                className=" font-bold opacity-80 text-pink-400"
              >
                {`${toolTipTotalProbability}`}
              </Typography>
            </div>

          </div>}
        animate={{
          mount: { scale: 0.9, x: 10 },
          unmount: { scale: 0, y: 0 },
        }}
        className="bg-indigo-900 py-2 px-3 text-white"
        placement="left-center"
      >
        <button
          className={Style.button}
          {...props}
        >
          {children}
        </button>
      </Tooltip>
    </div>
  )
}

export default Buttons


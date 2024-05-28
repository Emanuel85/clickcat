import React from 'react'
import { Tooltip, Typography } from "@material-tailwind/react";
import { propsTooltipsSkills } from '@/utils/type'
import coinsColorAssignment from '@/utils/coinsColorAssignment';

export const Tooltips = ({ children, description, valueProbability, totalProbability, ID }: propsTooltipsSkills,) => {
 
  return (
    <div>
      <Tooltip
        content={
          <div className="w-full">
            <Typography
              color="white"
              className="font-light opacity-80"
            >
              {description}
            </Typography>
            <div className='flex flex-row'>
              <Typography
                color="white"
                className="font-light opacity-80 pr-1 font"
              >
                Probabilidad
              </Typography>
              <Typography
                color="white"
                className=" font-bold opacity-80 text-white"
              >
                {`+${valueProbability}%`}
              </Typography>
            </div>
            <div className='flex flex-row'>
              <Typography
                color="white"
                className="font-light opacity-80 pr-1"
              >
                Total
              </Typography>
              {
                //Modifica los colores de las monedas para una mejor visualizacion
                coinsColorAssignment(ID, totalProbability)
              }

            </div>

          </div>}
        animate={{
          mount: { scale: 0.9, x: 10 },
          unmount: { scale: 0, y: 0 },
        }}
        className="bg-gray-900 py-2 px-3 text-white"
        placement="left-center"
      >
        {children}
      </Tooltip >


    </div >
  )
}

export default Tooltips
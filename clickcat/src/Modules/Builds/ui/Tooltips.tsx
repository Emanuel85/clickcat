import React from 'react'
import { Tooltip, Typography } from "@material-tailwind/react";
import { propsTooltips } from '@/utils/type'

export const Tooltips = ({ children, toolTipDescription, toolTipValueProbability, toolTipTotalProbability, toolTipID }: propsTooltips,) => {
 
  return (
    <div>
      <Tooltip
        content={
          <div className="w-full">
            <Typography
              color="white"
              className="font-light opacity-80"
            >
              {toolTipDescription}
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
                {`+${toolTipValueProbability}%`}
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
                toolTipID === 'Michicoin' ?
                  < Typography
                    color="white"
                    className="font-extrabold opacity-80 text-blue-500"
                  >
                    {toolTipTotalProbability}
                  </Typography>
                  :
                  toolTipID === 'Mooncat' ?
                    < Typography
                      color="white"
                      className="font-extrabold opacity-80 text-violet-500"
                    >
                      {toolTipTotalProbability}
                    </Typography>
                    :
                    toolTipID === 'Miaustar' ?
                      < Typography
                        color="white"
                        className="font-extrabold opacity-80 text-pink-600"
                      >
                        {toolTipTotalProbability}
                      </Typography> :
                      //separa Mooncat 34.60% Michicoin 14.60%. en Mooncat 34.60% y Michicoin 14.60% para asignar su color
                      <>
                        < Typography
                          color="white"
                          className="font-extrabold opacity-80 text-violet-500"
                        >
                          {toolTipTotalProbability.slice(0, 14)}
                        </Typography>
                        < Typography
                          color="white"
                          className="font-extrabold opacity-80 text-blue-500 pl-1"
                        >
                          {toolTipTotalProbability.slice(14)}
                        </Typography>
                      </>
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
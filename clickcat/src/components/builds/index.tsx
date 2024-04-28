'use client'
import React, { useContext } from 'react'
import structureData from '@/utils/JSON/structure.json'
import Style from './index.module.css'
import { Buttons, Tooltips } from '../ui'
import { contextValueGame } from '@/utils/Provider'
import { ValueCoinsObject } from '@/utils/type'
import { changeValueCoins } from '@/utils/functions/sumValueCoins'
import { totalOverwriteValueCoins } from '@/utils/functions/totalOverwriteValueCoins'

export const index = () => {
  const { valueCoins, setValueCoins } = useContext(contextValueGame)  


  const handleTotalProbability = (valueCoins: ValueCoinsObject, id: string) => {
    return totalOverwriteValueCoins(valueCoins, id)
  }

//Esta handle maneja el cambio del valor de las monedas
  const handleSumValueCoins = (value: number, id: string) => {
    setValueCoins(valueCoin => {
      const res = changeValueCoins(valueCoin, value, id)
      return res
    })
  }

  return (
    <div >
      Estructuras
      {structureData.map(({ name, description, image, value, id }) => {
        return (
          <div className={Style.containerStructure} >
            <Tooltips
              toolTipDescription={description}
              toolTipValueProbability={value}
              toolTipTotalProbability={handleTotalProbability(valueCoins, id)}
              toolTipID={id}
            >
              <div>
                <Buttons onClick={() => handleSumValueCoins(value, id)}>
                  {name}
                </Buttons>
              </div>

            </Tooltips>
          </div>

        )
      })
      }

    </div >
  )
}

export default index
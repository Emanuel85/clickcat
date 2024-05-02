'use client'
import React, { useContext, useState } from 'react'
import Style from './index.module.css'
import { Buttons, Tooltips } from '@Buildings/ui'
import { contextValueGame } from '@/utils/Provider'
import { ValueCoinsObject } from '@/utils/type'
import { changeBuildingCost, changeValueCoins, totalOverwriteValueCoins } from '@Buildings/hooks'

export const index = () => {
  const { valueCoins, setValueCoins, buildings, setBuildings } = useContext(contextValueGame)
  

  const handleTotalProbability = (valueCoins: ValueCoinsObject, id: string) => {
    return totalOverwriteValueCoins(valueCoins, id)
  }

  //Esta handle maneja el cambio del valor de las monedas
  const handleSumValueCoins = (quantityCoins: number, id: string) => {
    setValueCoins(valueCoin => {
      const res = changeValueCoins(valueCoin, quantityCoins, id)
      return res
    })
  }

  const handleBuildingCost = (id: string) => {
    const updatedBuildings = buildings.map(building => {
      if (building.name.id === id) {
        return { ...building, buildingCost: changeBuildingCost(buildings, id) };
      }
      return building;
    });

    setBuildings(updatedBuildings);
  }




  return (
    <div >
      Estructuras
      {buildings.map(({ id, name, quantityCoins, buildingCost, description, image, }) => {
        return (
          <div className={Style.containerStructure} >
            <Tooltips
              toolTipDescription={description}
              toolTipValueProbability={quantityCoins}
              toolTipTotalProbability={handleTotalProbability(valueCoins, id)}
              toolTipID={id}
            >
              <div hidden={false}>
                <Buttons
                  // disabled={buttonDisabled}
                  onClick={() => {
                    handleSumValueCoins(quantityCoins, id)
                    handleBuildingCost(name.id)
                  }}>
                  {name.title}
                </Buttons>
                {buildingCost}
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
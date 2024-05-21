'use client'
import React, { useContext } from 'react'
import Style from './index.module.css'
import { Buttons, Tooltips } from '@Buildings/ui'
import { contextValueGame } from '@/utils/Provider'
import { ValueCoinsObject } from '@/utils/type'
import { changeBuildingCost, changeValueCoins, totalOverwriteValueCoins, changeRestaCoins } from '@Buildings/hooks'

export const index = () => {
  const { valueCoins, setValueCoins, buildings, setBuildings, setCoins } = useContext(contextValueGame)

  const handleTotalCost = (valueCoins: ValueCoinsObject, id: string, buildingCoinName:string) => {
    return totalOverwriteValueCoins(valueCoins, id, buildingCoinName)
  }

  //Redefine el cambio del valor de las coins
  const handleSumValueCoins = (quantityCoins: number, id: string) => {
    setValueCoins(valueCoin => {
      const res = changeValueCoins(valueCoin, quantityCoins, id)
      return res
    })
  }


  //Resta el costo del building a las coins
  const handleRestaBuildingCost = (id: string) => {
    buildings.map(building => {
      if (building.name.id === id) {
        setCoins(coin => {
          const res = changeRestaCoins(coin, building.buildingCost)
          return res
        })
      }
    })
  }


  //Incrementa el costo de building
  const handleBuildingCost = (id: string) => {
    const updatedBuildings = buildings.map(building => {
      if (building.name.id === id) {
        return { ...building, buildingCost: changeBuildingCost(building) };
      }
      return building;
    });
    setBuildings(updatedBuildings);
  }


  return (
    <div >
      Estructuras
      {buildings.map(({ id, buildingCoinName, name, disabled, quantityCoins, buildingCost, description, image, }) => {
        console.log('habilitado building',disabled)
        return (
          <div className={Style.containerStructure} >
            <Tooltips
              toolTipDescription={description}
              toolTipValueCost={quantityCoins}
              toolTipTotalCost={handleTotalCost(valueCoins, id, buildingCoinName)}
              tooltipNameCoin={buildingCoinName}
              toolTipID={id}
            >
              <div>
                <Buttons
                  disabled={disabled}
                  onClick={() => {
                    handleSumValueCoins(quantityCoins, id)
                    handleBuildingCost(name.id)
                    handleRestaBuildingCost(name.id)
                  }}>
                  {name.title}
                </Buttons>
                {`Costo: ${buildingCost}`}
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